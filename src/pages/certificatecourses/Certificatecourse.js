import React from 'react'
import Agilecourseimage from '../../assets/images/agilecourseimage.jpg'
import Marketingimage from '../../assets/images/marketingimage.jpg'
import Operationsmanagement from '../../assets/images/operationsmanagement.jpg'
import Productmanagementimage from '../../assets/images/productmanagementimage.jpg'
import Businessanalysisimage from '../../assets/images/Businessanalysis.jpg'
import Innovationdesign from '../../assets/images/Innovationdesign.jpg'
import Internationalbusiness from '../../assets/images/Internationalbusiness.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Certificatecourse = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  return (
    <div className='certificatecoursegeneralcontainer'>
        <p className='text-center certificatecoursetext'>Certificates Courses</p>
        <div className='certificatecoursescontainer d-flex'>
            <div className='certificatecorsescontent'>
                <img src={Marketingimage} alt='Marketingimg' className='certificatecourseimage'/>
                <div className='px-4 py-2'>
                    <p className='certificatecoursetittle'>Marketing</p>
                    <p className='certificatecoursedescription'>Master the principles of 360 marketing for business growth.</p>
                    <p className='viewcourselink'><Link to={'/marketing'}>View Course</Link></p>
                </div>
                

            </div>
            <div className='certificatecorsescontent'>
              <img src={Operationsmanagement}alt='Operationsmanagementimg' className='certificatecourseimage'/>
              <div className='px-4 py-2'>
                <p className='certificatecoursetittle'>Operations Management</p>
                <p className='certificatecoursedescription'>Become a business operator and master high level management skills</p>
                 <p className='viewcourselink'><Link to={'/operationsmanagement'} className='text-decoration-none'>View Course</Link></p>
              </div>
            </div>
            <div className='certificatecorsescontent'>
              <img src={Productmanagementimage} alt='Productmanagementimage' className='certificatecourseimage'/>
              <div className='px-4 py-2'>
                <p className='certificatecoursetittle'>Product Management</p>
                <p className='certificatecoursedescription'>Learn Product Management, a highly demanded corporate tech skill.</p>
                 <p className='viewcourselink'><Link to={'/productmanagement'} className='text-decoration-none'>View Course</Link></p>
              </div>
            </div>
            <div className='certificatecorsescontent'>
              <img src={Agilecourseimage}alt='Agilecourseimage' className='certificatecourseimage'/>
              <div className='px-4 py-2'>
                <p className='certificatecoursetittle'>Agile Project Management</p>
                <p className='certificatecoursedescription'>Master Agile methodologies for efficiently managing corporate projects.</p>
                 <p className='viewcourselink'><Link to={'/agileprojectmanagement' } className='text-decoration-none'>View Course</Link></p>
              </div>
            </div>

        </div>

        <div className='certificatecoursesecondsection d-flex'> 
          <div className='certificatecorsescontent'>
            <img src={Businessanalysisimage}alt='Bussinessanalysisimg'className='certificatecourseimage'/>
            <div className='px-4 py-2'>
              <p className='certificatecoursetittle'>Business Analysis</p>
              <p className='certificatecoursedescription'>Master and deploy Data Analytics skills <br/>into business for predictive analysis.</p>
               <p className='viewcourselink'><Link to={'/businessanalysis'} className='text-decoration-none'>View Course</Link></p>
            </div>
          </div>
          <div className='certificatecorsescontent'>
            <img src={Internationalbusiness}alt='Internationalbusinessimg'className='certificatecourseimage'/>
            <div className='px-4 py-2'>
              <p className='certificatecoursetittle'>International Business</p>
              <p className='certificatecoursedescription'>Understand international laws, practices and skills to compete globally</p>
               <p className='viewcourselink'><Link to={'/internationalbussiness'} className='text-decoration-none'>View Course</Link></p>
            </div>
          </div>

          <div className='certificatecorsescontent'>
            <img src={Innovationdesign} alt='InnovationandDesignimg' className='certificatecourseimage'/>
            <div className='px-4 py-2'>
              <p className='certificatecoursetittle'>Innovation and Design Thinking</p>
              <p className='certificatecoursedescription'>Learn how the most successful startups build project that gets users hooked.</p>
               <p className='viewcourselink '><Link to={'/innovation&designthinking'}  className='text-decoration-none'>View Course</Link></p>
            </div>

          </div>

        </div>

        {showAllCourses && (
  <div className='certificatecoursesecondsection d-flex'>
    {/* your 3 hidden cards go here */}

    <div className='certificatecorsescontent'>
            <img src={Businessanalysisimage}alt='Accounting&Financeimg'className='certificatecourseimage'/>
            <div className='px-4 py-2'>
              <p className='certificatecoursetittle'>Accounting & Finance</p>
              <p className='certificatecoursedescription'>Understand financial statements, budgeting, and accounting principles.</p>
               <p className='viewcourselink'><Link to={'/accountandfinance'} className='text-decoration-none'>View Course</Link></p>
            </div>
          </div>



          <div className='certificatecorsescontent'>
            <img src={Innovationdesign} alt='TeamLeadershipimg' className='certificatecourseimage'/>
            <div className='px-4 py-2'>
              <p className='certificatecoursetittle'>Team Leadership</p>
              <p className='certificatecoursedescription'>Develop leadership traits to manage and inspire teams effectively.</p>
               <p className='viewcourselink '><Link to={'/teamleadership'}  className='text-decoration-none'>View Course</Link></p>
            </div>

          </div>

           <div className='certificatecorsescontent'>
              <img src={Operationsmanagement}alt='GrowthHackingtimg' className='certificatecourseimage'/>
              <div className='px-4 py-2'>
                <p className='certificatecoursetittle'>Growth Hacking</p>
                <p className='certificatecoursedescription'>Master smart marketing techniques for fast business growth.</p>
                 <p className='viewcourselink'><Link to={'/growthhacking'} className='text-decoration-none'>View Course</Link></p>
              </div>
            </div>
  </div>
)}

        <div className='viewallbtncontainer d-flex'>
          <div></div>
          <button className='viewallcoursesbtn'    onClick={() => setShowAllCourses(!showAllCourses)}
>
  {showAllCourses ? 'Hide extra courses' : 'View all courses'}</button>

        </div>
        
      
    </div>
  )
}

export default Certificatecourse
