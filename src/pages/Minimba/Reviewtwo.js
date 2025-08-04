import React from 'react'
import Studentimage from '../../assets/images/Group5.png'
import Quoteone from '../../assets/images/quoteone.png'
import Quotetwo from '../../assets/images/quotetwo.png'
import Vectorone from '../../assets/images/Vector1.png'
import Vectortwo from '../../assets/images/Vector2.png'

const Reviewtwo = () => {
  return (
    <div className='row ourstudent-generalcontainer'>
        <div className='col-sm-12 col-md-6 col-lg-4 col-xlg-6'>
            <div>
                <img src={Studentimage}alt='Studentimage'className='studentimage'/>

            </div>

        </div>
        <div className='col-sm-12 col-md-6 col-lg-8 col-xlg-6 ourstudentsecondsection'>
            <div>
                <p className='whattext'>What <span className='ourstudenttittle'>Our Students</span> Are Saying</p>
                <div className='d-flex pt-5  ourstudentcontainer'>
                    <div>
                        <img src={Quoteone}alt='Quote' />

                    </div>
                    
                    <div className='pt-2 px-2'>
                        <p className='studentname '>Joy Mirabel | <span className='studentcoursetitle'> Risk Management</span></p>
                        <p className='studentremark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing.</p>
                        <div className='quotetwocontainer'>
                            <img src={Quotetwo}alt='Quote'className=''/>

                            
                        </div>
                    </div>
                    
                    
                </div>
                            

                             <div className='studentreviewgeneralcontainer d-flex'>
                             <div></div>
                             <div className='d-flex studentreviewnumbers '>
                                
                                <img src={Vectorone}alt='Vector'/>
                              <p className='reviewnumber'> 01/06 </p>
                              <img src={Vectortwo}alt='Vector'/>
                            </div>
                            </div>
                                   
            </div>
        </div>
      
    </div>
  )
}

export default Reviewtwo
