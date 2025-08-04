import React from 'react'

const Firstsection = () => {
  return (
    <div className='minimbastudentimage'>
        <div>
            <p className='Standoutsagetext'>Stand Out With Sage Mini MBA</p>
            <p className="Standoutsagedescription">Learn cutting-edge Business, Management and Corporate skills with real world case studies and earn globally recognized certificates</p>
            <div className='standoutsageicon d-flex'>
                <div className='d-flex text-white standouttextandicon'>
                <i class='bx  bx-book-content'  ></i> 
                <p className='px-1 text-white standoutspantext'>Number of required modules: <span className='standoutspannumbertext'>10</span></p>

                </div>

                <div className='d-flex standouttextandicon px-2'>
                    <i class='bx  bx-clock-12 text-white'  ></i>
                     <p className='px-1 text-white standoutspantext'> Duration: <span className='standoutspannumbertext'>30+ hours</span> </p>

                </div>

            </div>

               <div className='d-flex standoutsageicon'>
                <div className='d-flex  standouttextandicon'>
                    <i class='bx  bx-bar-chart-big text-white'  ></i> 
                    <p className='text-white px-1 standoutspantext'>Level: <span className='standoutspannumbertext'>Intermediate</span></p>


                </div>
                <div className='d-flex standouttextandicon px-2'>
                    <i class='bx  bx-desktop-alt text-white'  ></i> 
                    <p className='text-white standoutspantext px-1'>Price: <span className='text-white standoutspannumbertext'>$149.99</span></p>
                </div>
                

                    
                </div>

                <div className='standoutsageicon'>
                    <div className='d-flex standouttextandicon '>
                    <i class='bx  bx-lock-keyhole-open text-white'  ></i> 
                    <p className='text-white px-1 standoutspantext'> Access: <span className='standoutspannumbertext'> Unlocks automatically upon completion of required modules</span> </p>
              </div>

                </div>

                

        </div>
        <div className='pt-5'>
            <button className='standoutenrollbtn'>Enroll Now</button>

        </div>

        
    
      
    </div>
  )
}

export default Firstsection
