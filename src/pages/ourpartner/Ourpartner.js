import React from 'react'
import Partnersimage from'../../assets/images/partnersimg.png'

const Ourpartner = () => {
  return (
    <div className='row meetpartnersgeneralcontainer'>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6'>
            <p className='meetpartnerstext'>Meet <span className='meetpartnerspantext'>Our Partners</span> For Good</p>
            <p className='distinguishedpartnerstext'>Our distinguished partners make it possible for us to provide world-class business education across the globe.</p>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6'>
            <img src={Partnersimage}alt='Partnersimage' className='partnerimage'/>
        </div>
    </div>
  )
}

export default Ourpartner
