import React from 'react'

const Coursebenefit = () => {
  return (
    <div className='row generalcoursebenefitcontainer'>
        <p className='text-center coursebenefittext'>Courses Benefit</p>
     <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6 coursebenefitfirstsection'></div>   
     <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6'>
        <p className='coursebenefitsecondsectiontext'>Course Benefit</p>
        <ul className='coursebenefitlistitems'>
            <li className='pt-3'>Internationally valid Certificate.</li>
            <li className='pt-3'>Interview prep. material.</li>
            <li className='pt-3'>Lifetime access to course material.</li>
            <li className='pt-3'>Access to Sage student community.</li>
        </ul>
        
    </div> 
    </div>
  )
}

export default Coursebenefit
