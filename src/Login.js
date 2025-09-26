import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Login = () => {
    const [formData, setFormData]=useState({email: "", password: ""});
    const [error, setError]=useState("");
    const [success, setSuccess]=useState("")
    const [loading, setLoading]=useState(false);
    const navigate = useNavigate();

    //handle input changes
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    //handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if(!formData.email || !formData.password){
            return setError("Email and Password are required");
        }

        try{
            setLoading(true);

            const response = await fetch("https://sage-api-o3hl.onrender.com/api/auth", {
            // const response = await fetch("/api/auth", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },

                body:JSON.stringify(formData),

            });

            const data = await response.json();

            // let data;

            // try{
                
            //      data = await response.json();
            // } catch {
            //     throw new Error("Server returned an invalid response");
            // }

            

            if(!response.ok){
                throw new Error(data.message || "Login failed");
            }

            // save token
            if(data.token){
                localStorage.setItem("authToken", data.token);
            }

            setSuccess("Login Successful");
            console.log("Login Success", data);

           setTimeout(() => navigate("/dashboard"), 2000) ; //link the dashboard here once it is ready
        } catch (error){
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className='logincontainer'>
        <p className='logintext text-center'>Login to your account</p>
        <div className='loginformcontainer'>

        <form id='loginform' onSubmit={handleSubmit}>
         <label htmlFor='email' className='loginemail'>Email Address</label>  <br/> 
         <input type='email' id='loginemail' name='email' value={formData.email} onChange={handleChange} placeholder='Enter your email' className='logininputfield mt-2' required /> <br/>

         <label htmlFor='password' className='loginpassword pt-5'>Password</label> <br/>
         <input type='password' id='loginpassword' name='password' value={formData.password} onChange={handleChange} placeholder='Enter your Password' className='logininputfield mt-2' required /> <br/>

         {error && <p style={{color: "red"}}>{error}</p>}
         {success && <p style={{color:"green"}}>{success}</p>}


         <button
            id="loginbtn"
            type="submit"
            className="loginbtn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login" }
           
          </button>


         

        </form>

        {success && (
            <div style= {{
                backgroundColor: "White",
                color: "green",
                padding:"10px",
                borderRadius:"5px",
                textAlign:"center",
                marginTop: "10px",
                fontWeight: "bold"
            }}>
                {success}


            </div>
        )}
         

           <div class="text-center py-4">
            <Link to={'/signup'} class="text-decoration-none fst-italic"
              >Don't have an account yet? Create one</Link >
          </div>




        </div>
       


      
    </div>
  )
}

export default Login
