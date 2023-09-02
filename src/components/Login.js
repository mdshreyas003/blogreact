import React, { useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const[setLogin] = useOutletContext();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const history  = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', formData);
      if(response.data){
        console.log(response.data)
        setLogin(response.data)
        history('/')
        // window.location.replace(window.location.href.slice(0,-5))
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email" // Make sure to set the 'name' attribute to match the state key
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              name="password" // Make sure to set the 'name' attribute to match the state key
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
        <Link to={'/signup'} className='text-blue-600 underline text-xl'>Signup</Link>
      </div>
    </div>
  );
};

export default Login;
