import  { useState } from "react";
import Logo from "./assets/images/Sagelogo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [showCourses, setShowCourses] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [menu, setMenu] = useState(true);
  const handleMenu = ()=>{
    setMenu(!menu)

  }

  return (
    <div>
        
      <nav className="nav-container py-4">
        <div className="nav-wrapper">

            <div className="nav-top-row">
            
            <div className="nav-left">
              <Link to={"/"} className="text-decoration-none">
              
                <img src={Logo} alt="logo" />
                </Link> 
            </div>

            <i class='bx  bx-menu-wider' id="menuicon" onClick={handleMenu}  ></i>

            </div>
            


            

            
          
            {menu && (

            <div className='nav-link-wrapper'>
            
            <div className=" nav-center">
           
            <p><Link to={"/"} className="text-decoration-none nav-item">Home</Link></p>
            
            <div className="menu-item">
                <p><a href="#" className="text-decoration-none nav-item">Courses <i class='bx  bx-chevron-down '  ></i></a></p>  
                
              <div className="dropdown">
                 <p class="dropdown-title">Certificate Courses</p>   
                 <div className="dropdown-columns d-flex">
                    <ul className="column">
                    <li><Link to={'/marketing'}  className="text-decoration-none nav-item">Marketing</Link></li>
                    <li><Link to={'/productmanagement'} className="text-decoration-none nav-item">Product Management</Link></li>
                    <li><Link to={'/operationsmanagement'} className="text-decoration-none nav-item">Operations Management</Link></li>
                    <li><Link to={'/agileprojectmanagement'} className="text-decoration-none nav-item">Agile Project Management</Link></li>
                    <li><Link to={'/businessanalysis'} className="text-decoration-none nav-item">Business Analysis</Link></li>

                </ul>
                <ul className="px-5">
                   <li><Link to={'/internationalbussiness'} className="text-decoration-none nav-item">International Business</Link></li>
                   <li><Link to={'/innovation&designthinking'} className="text-decoration-none nav-item">Innovation & Design Thinking</Link></li>
                   <li><Link to={'/accountandfinance'} className="text-decoration-none nav-item">Accounting and Finance</Link></li>
                   <li><Link to={'/teamleadership'} className="text-decoration-none nav-item">Team Leadership</Link></li>
                   <li><Link to={'/growthhacking'} className="text-decoration-none nav-item">Growth Hacking</Link></li>
                </ul>
                    
                    
                    </div>             
                
                
                
              </div>
            </div>
            <p><Link to={'/aboutsage'} className="text-decoration-none nav-item">About Sage</Link></p>
            <div className="moredropdown">
                <p><a href="#" className="text-decoration-none nav-item">More <i class='bx  bx-chevron-down '  ></i></a></p>
                <ul className="moredropdown-menu">
                    <li><Link to={'/verifystudentpage'} className="text-decoration-none nav-item">Verify Certificate</Link></li>
                    <li><Link to={'/ourpartner'} className="text-decoration-none nav-item">Our Partners</Link></li>
                    <li><a href="#" className="text-decoration-none nav-item">Contact Us</a></li>
                </ul>
            </div>
            

          </div>

             
          <div className="d-flex nav-right">
           
            
              <p className="loginlink"><a href="#" className="text-decoration-none text-danger " >Login</a></p>
              <p className="signuplink"><a href="#" className="text-decoration-none text-white" >Sign Up</a></p>
  
          </div>
          </div>


           )}

          
           
          

          
          
        </div>
        
      </nav>
      
    </div>
  );
};

export default Navbar;
