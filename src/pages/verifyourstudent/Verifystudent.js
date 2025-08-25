import React from 'react'
import Verifystudentimg from '..//..//assets/images/verifystudentimg.png'

const Verifystudent = () => {
  return (
    <div className='row verifystudentpagegeneralcontainer'>
        
        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6'>
            <p className='verifystudenttext'>Verify <span className='verifystudentspantext'>Our Student</span> Credentials</p>
            <p className='verifycertificatestext'>Verify certificates issued by Sage, kindly enter the certificate number below to validate its authenticity.</p>
            <div className='verifystudentinputandsearchcontainer'>
                <input type='text' placeholder='Enter certificate number here' className='verifystudentinput'/>
                <button className='verifystudentsearchbutton'>Search</button>

            </div>
            
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6'>
            <img src={Verifystudentimg}alt='Student Image' className='verifystudentimage'/>
            
        </div>  



      
    </div>
  )
}

export default Verifystudent
