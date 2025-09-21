import React from 'react'
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <div className='createaccountcontainer'>
        <p className='createyouraccounttext text-center'>Create your account</p>

        <div className='createyouraccountcontainer'>

          <form id='createyouraccountform'> 
            <label for='name' className='createaccountdetailstext'>Full Name</label> <br/>
            <input type='text' id='fullname' name='name' placeholder='Enter your full name' className='createinputfield mt-2' required/> <br/>

            <label for='email' className='createaccountdetailstext'>Email Address</label><br/>
            <input type='email' id='createemail' placeholder='Enter your email' className='createinputfield mt-2' required /> <br/>

            <label for='password' className='createaccountdetailstext'>Password</label><br/>
            <input type='password' id='createpassword' className='createinputfield mt-2' placeholder='Create your password ' required/> <br/>

            <label for='password' className='createaccountdetailstext' >Confirm Password</label><br/>
            <input type='password' id='confirmpassword' className='createinputfield mt-2' placeholder='Confirm your password' required/>




          </form>

          <button
            id="loginbtn"
            type="submit"
        
            className="signupbtn"
          >
           Sign Up
          </button>

           <div class="text-center py-4">
            <Link to={'/login'} class="text-decoration-none fst-italic"
              >You have an account? Login</Link>
          </div>

        </div>
      
    </div>
  )
}

export default Signup
