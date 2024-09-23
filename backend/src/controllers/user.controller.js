import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/clodinary.js";
import {ApiResponse} from '../utils/ApiResponse.js'

const generateAccessAndRefreshToken = async (id) => {
    const user = await User.findById(id); 
    const accessToken = generateAccessToken();
    const refreshToken = generateRefreshToken(); 
    user.refreshToken = refreshToken;
    await user.save({validateBeforeSave: false})
    return {accessToken, refreshToken}
}

const registerUser = asyncHandler(async (req, res) => {
    // Get user details from front-end
    // Provide validation checks - not empty
    // Check if user already exists. - username, email (One is enough)
    // Check for images, avatar (required)
    // upload image on cloudinary, avatar
    // Create user object - create entry in db
    // remove password and refresh token from response
    // check for user creation
    // return response

    const {username, email, password, fullName} = req.body;

    if([fullName, email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    // Here we will check if the database includes a username or email which the user passed.
    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    });

    if(existedUser) {
        throw new ApiError(401, "User already exists!")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath) {
        throw new ApiError(404, "Avatar image is required");
    } 


    const avatar = uploadOnCloudinary(avatarLocalPath);
    const coverImage = uploadOnCloudinary(coverImageLocalPath);

    if(!avatar) {
        throw new ApiError(500, "Avatar image was unable to upload");
    }

    const user = await User.create({
        fullName, 
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        username: username.toLowerCase(),
        email,
        password,
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );


    res.status(200).json(ApiResponse(200, createdUser, "User registered succesfully"));
});

const loginUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    if(!(username || email)) {
        throw new ApiError(403, "Username or email is required");
    }

    if(!password) {
        throw new ApiError(403, "Password is required")
    }

    const user = await User.findOne({
        $or: [{username},{email}]
    });

    if(!user) {
        throw new ApiError(401, "Invalid credentials")
    }

    const isValidPassword = user.isPasswordCorrect(password)

    if(!isValidPassword) {
        throw new ApiError(401, "Invalid credentials")
    }

    const {accessToken, refreshToken} = generateAccessAndRefreshToken(user._id);    // Can also pass the whole object. (Which would be better)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(
        200,
        {
            user: loggedInUser,
            accessToken,
            refreshToken
        },
        "User logged in succesfully"
    ))
})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1, // this removes the field from document.
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200,{},"User logged out"))
})

export {
    registerUser,
    loginUser,
    logoutUser

}