import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    try {
      // In a real app, replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login attempt with:', formData);
      // Redirect to dashboard or home after successful login
      // history.push('/dashboard'); 
    } catch (error) {
      console.error('Login failed:', error);
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
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-red-400">Please sign in to continue</p>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <motion.div 
            className="mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
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
            className="mb-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button 
              type="submit" 
              className={`w-full bg-gradient-to-r from-red-700 to-red-600 text-white py-3 px-4 rounded-lg flex items-center justify-center font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 ${isLoading ? 'opacity-75' : 'hover:opacity-90'}`}
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
                  <FaSignInAlt className="mr-2" />
                  Sign In
                </>
              )}
            </button>
          </motion.div>
        </form>

        <motion.div 
          className="flex justify-between items-center mt-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/forgot-password" className="text-gray-400 hover:text-red-400 transition-colors">
            Forgot Password?
          </Link>
          <Link to="/signup" className="text-gray-400 hover:text-red-400 transition-colors">
            Create Account
          </Link>
        </motion.div>
        
        <motion.div
          className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Powered by Snapdragon
          <div className="mt-2">
            <img src="/snapdragon_logo.png" alt="Snapdragon" className="h-6 mx-auto" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
