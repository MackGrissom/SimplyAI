import React from 'react';

const JoinBetaPage: React.FC = () => {
    return (
        <div className="bg-transparent min-h-screen flex items-center justify-center">
        <div className="bg-white/40 shadow-lg p-8 rounded-lg w-96">
        <h1 className="text-3xl font-semibold mb-6">Join Our Beta</h1>
        <p className="text-gray-600 mb-8">
        Be a part of our journey. Sign up for our beta program and stay
        updated with our future goals and developments!
        </p>
        <form className="space-y-4">
        <div>
        <label className="block text-sm font-medium text-gray-700">
        Email Address
        </label>
        <input
        type="email"
        className="mt-1 p-2 w-full border rounded-md"
        placeholder="Your email"
        />
        </div>
        <div>
        <label className="block text-sm font-medium text-gray-700">
        Full Name
        </label>
        <input
        type="text"
        className="mt-1 p-2 w-full border rounded-md"
        placeholder="Your full name"
        />
        </div>
        <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
        Sign Up
        </button>
        </form>
        <p className="text-gray-500 text-sm mt-4">
        By signing up, you agree to our <a href="#">Terms</a> and{' '}
        <a href="#">Privacy Policy</a>.
        </p>
        </div>
        </div>
        );
    };
    
    export default JoinBetaPage;
    