import React from 'react'
import A4 from '../../assets/images/A4.png'

const Viewcertificate = () => {
  return (
    <div className='row viewcertificategeneralcontainer'>
        <p className='text-center viewcertificatetext'>View Certificate</p>
        <div className='col-sm-12 col-md-12 col-lg-4 col-xlg-4'>
            <div className='studentverificationcontainer'>
                <div className="check-wrapper">
      <i className="bx bx-check-circle checkcircle"></i>
      <span className="circle-border"></span>
    </div>
                
                <p className='studentverificationtext'>Student verification  was successfully</p>
            </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-8 col-xlg-8 certificateimagecontainer'>
            <img src={A4}alt='Certificate' className='certificateimagetwo'/>
        </div>
    </div>
  )
}

export default Viewcertificate
