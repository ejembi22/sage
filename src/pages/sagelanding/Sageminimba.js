import React from 'react'
import Sagestudentimage from '../../assets/images/Group17.png'

const Sageminimba = () => {
  return (
    <div className='row sagminimbageneralcontainer'>
        <p className='sageminitext text-center'>Sage Mini MBA</p>
    <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6 pt-5'>
        <div>
        <p className='standouttext'>Stand Out With <span className='sagespantext'>Sage Mini MBA</span></p>
        <p className='sageminibadescription'>Sage Mini MBA is one the most advanced program of its kind globally. The Mini MBA focuses gives you the same academic value of a full-time MBA in a streamlined and self-paced environment and for a fraction of the cost. Sage Mini MBA is backed internationally and adheres to global standards for advanced business studies.</p>
        </div>
        <div className='getstartedbtncontainer pt-5'>
            <button className='getstartedbutton'>Get Started</button>
        </div>

    </div>
    <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6 pt-5'>
        <img src={Sagestudentimage}alt='Sagestudentimage' className='sagestudentimage mx-4'/>
    </div>
    </div>
  )
}

export default Sageminimba
