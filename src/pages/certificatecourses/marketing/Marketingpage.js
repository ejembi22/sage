import React from 'react'
import Stars from '../../../assets/images/Mbastars.png'


const Marketingpage = () => {
  return (
    <div className='operationmanagementcontainer'>

        <div className='operationmanagementcontentcontainer'>
            <p className='operationmanagmentexttittle'>Marketing </p>
            <p className='operationmanagementtext pt-3'>Lorem ipsum dolor sit amet consectetur. Tellus nullam et mauris diam et lobortis tincidunt neque arcu. Aliquam eu adipiscing massa posuere pulvinar nulla tortor. </p>
            <div className='pt-3'>
                <p className='opertionmanagementtime'>Duration: <span className='operationmanagementspantext'>3hours | Beginner Level | 100% Online</span></p>
            </div>
            <div className='d-flex pt-1'>
                <img src={Stars}/>
                <p className='px-2 managemoperationentratings'>24,369 <span className='opmspanratingstext'> ratings | </span> </p>
                <p className='px-2 opmpercentagerating'><i class="fa-solid fa-thumbs-up likeicon"></i> 67%</p>

            </div>
            <div className='pt-4'>
                <button className='enrollbutton'>Enroll</button>
            </div>
            
        </div>
       
       
      
    </div>
  )
}

export default Marketingpage
