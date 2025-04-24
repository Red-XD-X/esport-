import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn();
  };

  return (
    <div className="min-h-screen bg-indigo-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-indigo-900 shadow-lg rounded-2xl p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-orange-500 font-bold text-4xl tracking-wide">SWIFT</h1>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-white text-center">Sign In</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-3 bg-indigo-800 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-3 bg-indigo-800 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="h-4 w-4 bg-indigo-800 border-indigo-700 rounded focus:ring-orange-500 text-orange-500" 
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <div>
              <Link to="/forgot-password" className="text-sm text-orange-500 hover:text-orange-400">
                Forgot Password?
              </Link>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors font-medium"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-300">
            Don't have an account?{" "}
            <Link to="/signup" className="text-orange-500 hover:text-orange-400 font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;