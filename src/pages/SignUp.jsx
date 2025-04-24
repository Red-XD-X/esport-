import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp({ onSignUp }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp();
  };

  return (
    <div className="min-h-screen bg-indigo-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-indigo-900 shadow-lg rounded-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-orange-500 font-bold text-4xl tracking-wide">SWIFT</h1>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-white text-center">Create Account</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-4 py-3 bg-indigo-800 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
              id="username"
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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

          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full px-4 py-3 bg-indigo-800 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
              id="confirmPassword"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          
          <div className="flex items-center mb-6">
            <input 
              type="checkbox" 
              id="terms" 
              className="h-4 w-4 bg-indigo-800 border-indigo-700 rounded focus:ring-orange-500 text-orange-500" 
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
              I agree to the <Link to="/terms" className="text-orange-500 hover:text-orange-400">Terms of Service</Link> and <Link to="/privacy" className="text-orange-500 hover:text-orange-400">Privacy Policy</Link>
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors font-medium"
          >
            Create Account
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-300">
            Already have an account?{" "}
            <Link to="/signin" className="text-orange-500 hover:text-orange-400 font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
