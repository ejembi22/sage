import React from 'react'
import { Link } from 'react-router-dom';


const Landingpage = () => {
  return (
    <div className=''>
      <div className='introductioncontainer'>
        <div className='upskillbackgrooundcolor'></div>
        <div className='upskillandlearncutcontainer'>
          <p className='upskilltext'>Upskill For Global Growth.</p>
          <p className='learncuttingedgetext'>Learn cutting-edge Business, Management and Corporate skills with real world case studies and earn globally recognized certificates</p>
          <div className='d-flex gap-3 upskillicons py-2'>
            <p><i class='bx  bx-refresh-cw'  ></i> Flexibile</p>
            <p><i class='bx  bx-alarm'  ></i> Fast</p>
            <p><i class='bx  bx-laptop'  ></i> 100% Online</p>
          </div>
          <div className='py-3'>
            <Link to={"/minimba"}>
            <button className='sageminibutton'>Sage Mini MBA</button> </Link> <br/>
            <button className='certificatecoursesbutton mt-3'>Certificate Courses</button>

          </div>
          
          
        </div>
        


      </div>

      
    </div>
  )
}

export default Landingpage
