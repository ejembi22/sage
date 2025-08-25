import React from 'react'
import Impactimage from'../../assets/images/impactimage.png'

const Ourimpact = () => {
  return (
    <div className='row aboutsageourimpactgeneralcontainer'>
      <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6 '>
        <img src={Impactimage}alt='Impact'className='impactimage'/>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6 aboutsageourimpactsecondsectioncontainer'>
        <p className='ourimpactext'>Our Impact</p>
        <p className='overtheyearstext pt-3'>over the years, we have partnered with several organizations to create massive impact and drive corporate education to thousands of under-privileged persons worldwide. Find out more about out partners by clicking the button below.</p>
        <button className='ourimpactpartnersbutton mt-4'>Our Partners</button>
      </div>
      
    </div>
  )
}

export default Ourimpact
