import React from 'react'
import Stars from '../../../assets/images/Mbastars.png'


const Operationmanagementsection = () => {
  return (
    <div className='row operationmanagementgeneralcontainer'>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6'>
            <p className='operationmanagementsectiontext'>Operations Management</p>
            <div className=' pt-4'>
                <p className='operationmanagementsectioncontenttext'>Lorem ipsum dolor sit amet consectetur. Tellus nullam et mauris diam et lobortis tincidunt neque arcu. Aliquam eu adipiscing massa posuere pulvinar nulla tortor. </p>

                 <div className='pt-3'>
                <p className='opertionmanagementtimes'>Duration: <span className='operationmanagementspantexts'>3hours | Beginner Level | 100% Online</span></p>
            </div>
            <div className='d-flex pt-1'>
                <img src={Stars}/>
                <p className='px-2 managemoperationenstratings'>24,369 <span className='opmspanratingstext'> ratings | </span> </p>
                <p className='px-2 opmpercentageratings'><i class="fa-solid fa-thumbs-up likeicons"></i> 67%</p>

            </div>
            

            </div>
        </div>

        <div className='col-sm-12 c0l-md-12 col-lg-6 col-xlg-6 operationmanagemenstsecondsection'>
            <div className='pt-4'>
                <button className='enrollbutton2'>Enroll</button>
            </div>
        </div>
      
    </div>
  )
}

export default Operationmanagementsection
