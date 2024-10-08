import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (password.length <= 8) {
      setError('Password must be more than 8 characters.');
      return;
    }

    try {
      const response = await axios.post('https://66e803d4b17821a9d9daf73c.mockapi.io/photo/SignUp', {
        name,
        email,
        password,
      });

      console.log('Successfully Signed Up:', response.data);
      setError('');
      navigate('/signin');   

    } catch (err) {
      console.error('Error during signup:', err);
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="w-96 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl mb-6 text-center">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="text-gray-400">Name:</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Email:</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-400">Password:</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 mt-4">
          Already have an account?{' '}
          <span 
            className="text-blue-400 cursor-pointer" 
            onClick={() => navigate('/signin')}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
