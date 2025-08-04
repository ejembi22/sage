import React from 'react'
import Images from '../../assets/images/images.png'


const Whyminimba = () => {
  return (
    <div className='row whyminimbasectioncontainer'>
        <p className='text-center whyminimbatext'>Why Mini MBA?</p>
        <div className='col-sm-12 col-md-6 col-lg-4 col-xlg-6 whyminimbafirstsection'>
            <div className='whysageimagecontainerone'>
            <img src={Images} alt='Image' className='whysageimage'/>

            </div>
            <div className='Globallyaccreditedcontainer mt-4'>
                <p className='whysagetittle'>Globally Accredited</p>
                <p className='globalaccrediteddescription'>Sage Institute is globally accredited in Africa, US & Canada by various reputable institutions, we are also backed by various reputable educational institutions including but not limited to Pluralcode Academy and Skill Development Council of Canada. All our courses have a track record of success stories from alumni and current students who have seen massive career growth.</p>
            </div>
            

            
        </div>
        <div className='col-sm-12 col-md-6 col-lg-8 col-xlg-6'>
            <div className='whyminimbasecondcontainer'>
                <div className='whysagesecondsection'>
                <p className='whysagetittle'>100% Flexible</p>
                <p className='Whysagedescription'>Whether you are a student, an employee working for a corporation, a freelancer or a business owner, you have to learn and keep growing. Which is why all our business skills are broken down into short, bite-sized courses that can be mastered at your own pace, and in a matter of hours. We have streamlined these courses to remove bogus theories and focus exclusively on business use cases, practical examples and lessons directly to the core of any business skill you want to master.</p>
        
            </div>
            <div className='learnskillcontainer mt-4'>
                <p className='whysagetittle'>Learn Skills Fast</p>
                <p className='learnskilldescription'>Speed is woven into our DNA, and that manifests in the courses you learn with Sage. Whether you have an interview to prepare for, or you need to learn a skill quickly for a client project or you want to compete in the workplace or ascend to a promotion, our courses are tailored to help you achieve that in record time.</p>
            </div>

            </div>
            
        </div>
       

        
      
    </div>
  )
}

export default Whyminimba
