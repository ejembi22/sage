import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';


const Signup = () => {

  // State for form inputs
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""

  });

  const [error, setError] = useState(""); // To show error messages
  const [success, setSuccess] = useState(""); // To show success messages
  const [loading, setLoading] = useState(false); // Button loading state

  // Handle input changes
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  //Handle form submission 
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic Validation 
    if(!formData.name || !formData.email || !formData.password || !formData.confirmPassword){
      return setError("All fields are required");
    }

    if (formData.password.length < 6){
      return setError("Password must be at least 6 characters long");
    }

    if (formData.password !==  formData.confirmPassword){
      alert("Passwords do not match")

    }

    try{
      setLoading(true);

      //call API
      const response = await fetch("https://sage-api-o3hl.onrender.com/api/users", {

      // const response = await fetch("/api/users", {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name:formData.name,
          email:formData.email,
          password:formData.password
        })
      });
      const data = await response.json();

      if(!response.ok) {
        //Handle API errors safely
        throw new Error(data.message || "Failed to create account");
      }
      console.log("Account created successfully:", data) //log my response on console
      setSuccess("Account created successfully");
      setFormData({ name: "", email: "", password: "", confirmPassword: ""});
    } catch (error){
      setError(error.message);
    }finally {
      setLoading(false);
    }
  };
  return (
    <div className='createaccountcontainer'>
        <p className='createyouraccounttext text-center'>Create your account</p>

        <div className='createyouraccountcontainer'>

          {/* Attach onSubmit to form */}

          <form id='createyouraccountform' onSubmit={handleSubmit}> 
            <label htmlFor='name' className='createaccountdetailstext'>Full Name</label> <br/>
            <input type='text' id='fullname' name='name' placeholder='Enter your full name' className='createinputfield mt-2' value={formData.name} onChange={handleChange} required/> <br/>

            <label htmlFor='email' className='createaccountdetailstext'>Email Address</label><br/>
            <input type='email' id='createemail' name='email' placeholder='Enter your email' className='createinputfield mt-2' value={formData.email} onChange={handleChange} required /> <br/>

            <label htmlFor='password' className='createaccountdetailstext'>Password</label><br/>
            <input type='password' id='createpassword' name='password' className='createinputfield mt-2' placeholder='Create your password ' value={formData.password} onChange={handleChange} required/> <br/>

            <label htmlFor='confirmpassword' className='createaccountdetailstext' >Confirm Password</label><br/>
            <input type='password' id='confirmpassword' name='confirmPassword' className='createinputfield mt-2' placeholder='Confirm your password' value={formData.confirmPassword} onChange={handleChange} required/> <br/>

            {/* set error/success messages */}
            {error && <p style={{color: "red"}}>{error}</p>}
            {success && <p style={{color:"green"}}>{success}</p>}


             <button
            id="signupbtn"
            type="submit"
        
            className="signupbtn"
            disabled={loading}
          >
            {loading ? "signing up ...": "Sign Up"}
           
          </button>




          </form>

         

           <div class="text-center py-4">
            <Link to={'/login'} class="text-decoration-none fst-italic"
              >You have an account? Login</Link>
          </div>

        </div>
      
    </div>
  )
}

export default Signup
