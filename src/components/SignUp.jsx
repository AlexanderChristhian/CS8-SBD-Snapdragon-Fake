import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaUserPlus } from 'react-icons/fa';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing again
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real app, replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Sign up attempt with:', formData);
      // Redirect to login or dashboard after successful registration
      // history.push('/login');
    } catch (error) {
      console.error('Sign up failed:', error);
      setError('Sign up failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black bg-opacity-70 backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-md border border-red-800/30"
      >
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-red-400">Join the Snapdragon community</p>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-md text-red-200 text-sm"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center bg-gray-900 bg-opacity-70 rounded-lg px-4 py-3 border border-red-900/30">
              <FaUser className="text-red-500 mr-3" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center bg-gray-900 bg-opacity-70 rounded-lg px-4 py-3 border border-red-900/30">
              <FaEnvelope className="text-red-500 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center bg-gray-900 bg-opacity-70 rounded-lg px-4 py-3 border border-red-900/30">
              <FaUser className="text-red-500 mr-3" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center bg-gray-900 bg-opacity-70 rounded-lg px-4 py-3 border border-red-900/30">
              <FaLock className="text-red-500 mr-3" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center bg-gray-900 bg-opacity-70 rounded-lg px-4 py-3 border border-red-900/30">
              <FaLock className="text-red-500 mr-3" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button 
              type="submit" 
              className={`mt-2 w-full bg-gradient-to-r from-red-700 to-red-600 text-white py-3 px-4 rounded-lg flex items-center justify-center font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 ${isLoading ? 'opacity-75' : 'hover:opacity-90'}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <FaUserPlus className="mr-2" />
                  Create Account
                </>
              )}
            </button>
          </motion.div>
        </form>

        <motion.div 
          className="flex justify-center items-center mt-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="text-gray-400">Already have an account?</span>
          <Link to="/login" className="text-red-500 hover:text-red-400 ml-2 font-medium transition-colors">
            Sign in
          </Link>
        </motion.div>
        
        <motion.div
          className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          By signing up, you agree to our Terms and Privacy Policy
          <div className="mt-2">
            <img src="/snapdragon_logo.png" alt="Snapdragon" className="h-6 mx-auto" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;
