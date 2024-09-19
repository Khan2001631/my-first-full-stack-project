import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: '16kb'}));  // Middleware to parse json data (limit is 16kb)
app.use(express.urlencoded({extended: true, limit: '16kb'})); // Middleware to parse url encoded data
app.use(express.static('public'));   // Middleware to serve static files in public folder such as favicons, pdf, images etc


export {app}