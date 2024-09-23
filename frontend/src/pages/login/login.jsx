import React from 'react';
import { useForm } from 'react-hook-form';


const Login = () => {

    const { register, handleSubmit } = useForm();

    const formSubmit = (data) => {

    }
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                    type="text"
                    {...register('fullName')}
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your full name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                    type="text"
                    id="username"
                    {...register('username')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your username"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                    type="password"
                    id="username"
                    {...register('password')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your password"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                    type="file"
                    id="username"
                    {...register('password')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your password"
                    />
                </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Login
            </button>
            </form>
      </div>
    </div>
  );
};

export default Login;
