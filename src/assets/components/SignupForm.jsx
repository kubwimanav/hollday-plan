import React, { useState } from 'react';
import './SignupForm.css'
import log from '../images/LoginPage.jpg'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
function SignupForm () {
  const [formData, setFormData] = useState({
    email: '',  
    fullName: '',  
    password: '', 
    role: '',
    phone : '',
    location: '',  
   
  });
  const {
    register,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const navigate= setNavigate[];
    const handleSubmit = async (e) => {
    e.preventDefault();
    try{ console.log(formData)
      await axios.post ('https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup',formData);
      window.location.href="/login"
    } 
  // Navigate('/login')

  
 catch (error){
console.log(error.response)
alert(error.response.data.message)
 }
 

  };
  return (
    <div className="signup">
      <div className="signupform">
        <h2 className="signuph2">Sign Up Form</h2>
        <form action="post" onSubmit={handleSubmit} className='sinupform1'>
          <div>
            <label className="signuplabel">fullName:</label>
            <input
              className="signupinput"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              {...register("fullName", {
                required: {
                  value: true,
                },
              })}
            />
            {errors.fullName && <span>Please Enter Your FullName</span>}
          </div>
          <div>
            <label className="signuplabel">Email:</label>
            <input
              className="signupinput"
              placeholder="example@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              {...register("email", {
                required: {
                  value: true,
                },
              })}
            />
            {errors.email && <span>Please Enter Your Email</span>}
          </div>
          <div>
            <label className="signuplabel">Password:</label>
            <input
              className="signupinput"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              {...register("password", {
                required: {
                  value: true,
                },
              })}
            />
            {errors.password && <span>Please Enter Your Password</span>}
          </div>

          <div>
            <label className="signuplabel">phone:</label>
            <input
              className="signupinput"
              type="phone"
              value={formData.phone}
              onChange={handleChange}
              {...register("phone", {
                required: {
                  value: true,
                },
              })}
            />
            {errors.phone && <span>Please Enter Your phoneNumber</span>}
          </div>

          <div>
            <label className="signuplabel">location:</label>
            <input
              className="signupinput"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              {...register("location", {
                required: {
                  value: true,
                },
              })}
            />
            {errors.location && <span>Please Enter Your Location</span>}
          </div>

          <button className="signupbutton" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;