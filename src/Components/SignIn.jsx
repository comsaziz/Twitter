import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (password.length <= 5) {
      setError('Password must be more than 5 characters.');
      return;
    }

    
    try {
      const response = await axios.get('https://66e803d4b17821a9d9daf73c.mockapi.io/photo/SignUp');
      
      const user = response.data.find(user => user.email === email && user.password === password);

      if (user) {
        console.log('Successfully Signed In!');
        setError('');
        navigate('/'); 
      } else {
        setError('Invalid email or password.');
      }

    } catch (err) {
      console.error('Error during sign-in:', err);
      setError('Failed to sign in. Please try again.');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <div className="w-96 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl mb-6 text-center">Sign In</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSignIn}>
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
          <button className="w-full bg-blue-500 text-white py-2 rounded-md">
            Sign In
          </button>
        </form>
        <p className="text-gray-400 mt-4">
          Don't have an account?{' '}
          <span 
            className="text-blue-400 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
