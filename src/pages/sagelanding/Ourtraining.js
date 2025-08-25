import React from 'react'
import Minimba from '../../assets/images/Frame 49.png'
import Certificaatecourses from '../../assets/images/7b894ce5d558444f5c44a5c5db78d94489e74f64.jpg'
import Sage from '../../assets/images/Group20.png'
import { Link } from 'react-router-dom'

const Ourtraining = () => {
  return (
    <div className='pt-5 ourtraininggeneralcontainer'>
        <p className='ourtrainingtext text-center'>Our Training</p>
        <div className='ourtrainingcontentcontainer px-5 d-flex '>
            <div className='ourtrainingcontent'>
                <img src={Minimba} alt='Minimba' className='minimba'/>
                <div className='py-3 px-3'>
                  <p className='minimbatext'>Mini MBA</p>
                 <p className='minimbadescription'>Stand out boldly with the Sage Mini-MBA</p>
                </div>
                <div className='rightarrowcontainer'>
                    <div></div>
                    <Link to={'/minimba'} className='text-decoration-none'><i class='bx  bx-arrow-right-stroke-circle rightarrow py-4'  ></i> </Link>
                </div>
                
                
                
            </div>
            <div className='ourtrainingcontent '>
                <img src={Certificaatecourses} alt='Certificatecourses' className='certificateimage'/>
                <div className='py-3 px-3'>
                    <p className='minimbatext'>Certificate Courses</p>
                    <p className='ourtrainingdescription'>Learn business & management courses, 100% online in a few hours</p>
                </div>
                <div className='rightarrowcontainer'>
                    <div></div>
                 <Link to={'/viewcertificate'} className='text-decoration-none' > <i class='bx  bx-arrow-right-stroke-circle rightarrow'  ></i> </Link>
                </div>

            </div>
            <div className='ourtrainingcontent'>
                <img src={Sage} alt='Sage' className='sageimage'/>
                <div className='py-3 px-3'>
                    <p className='minimbatext'>Sage Institute</p>
                    <p className='ourtrainingdescription'>Discover SAGE. Our partners, history, accreditation & culture.</p>

                </div>
                <div className='rightarrowcontainer'>
                    <div></div>
                    <i class='bx  bx-arrow-right-stroke-circle rightarrow'  ></i> 
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Ourtraining
