import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='logincontainer'>
        <p className='logintext text-center'>Login to your account</p>
        <div className='loginformcontainer'>

        <form id='loginform'>
         <label for='email' className='loginemail'>Email Address</label>  <br/> 
         <input type='email' id='loginemail' placeholder='Enter your email' className='logininputfield mt-2' required /> <br/>

         <label for='password' className='loginpassword pt-5'>Password</label> <br/>
         <input type='password' id='loginpassword' placeholder='Enter your Password' className='logininputfield mt-2' required /> <br/>


         

        </form>
         <button
            id="loginbtn"
            type="submit"
        
            className="loginbtn"
          >
           Login
          </button>

           <div class="text-center py-4">
            <Link to={'/signup'} class="text-decoration-none fst-italic"
              >Don't have an account yet? Create one</Link >
          </div>




        </div>
       


      
    </div>
  )
}

export default Login
