import React from 'react'
import Aboutsageimage from'../../assets/images/aboutsageimage.png'

const Aboutsage = () => {
  return (
    <div className="row theaboutsagegeneralcontainer">

        <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6">
            <p className='thesageinstituteabout'>About <span className='thesageinstituteaboutspantext'>SAGE Institute Of</span>  Business & MGT</p>
            <p className='thissageinsitituteaboutdescription'>Sage Institute is an internationally accredited School of Business & Management. We believe that business skills should be accessible to everyone globally and regardless of income levels, this is the first step in creating entrepreneurs and corporate professionals that make a difference.</p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6 theaboutsagesecondcontainer">
            <img src={Aboutsageimage} alt='Image' className='aboutsageimage'/>
        </div>


              
    </div>
  )
}

export default Aboutsage
