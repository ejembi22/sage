import React from 'react'
import Operationsimg from'..//..//../assets/images/operationsimg1.jpg'
import Fourhalfstar from'..//..//../assets/images/fourhalfstar.png'
import Operationsimg2 from'..//..//../assets/images/operationsimg2.jpg'
import Operationsimg3 from'..//..//../assets/images/operationsimg3.png'
import Operationsimg4 from'../..//../assets/images/operationsimg4.jpg'
import Operationsimg5 from'..//..//../assets/images/operationsimg5.jpg'
import Operationsimg6 from'..//..//../assets/images/operationsimg6.jpg'
import Operationsimg7 from'..//..//../assets/images/operationsimg7.jpg'
import Operationsimg8 from'..//..//../assets/images/operationsimg8.jpg'
import Operationsimg9 from'..//..//../assets/images/operationsimg9.png'

const Viewallcourses = () => {
  return (
    <div className='row viewallavailablecoursesgeneralcontainer'>
        <div className='col-sm-12 col-md-12 col-lg-3 col-xlg-3'>
            <p className='filtertext'>Filter By</p>
        <div className=''>
                <p className='availablecoursesfiltertittle'>Subject</p>
            <div className='d-flex pt-3'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Operation Management</p>
            </div>

            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Operation Management</p>
            </div>
            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Operation Management</p>
            </div>
            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Operation Management</p>
            </div>
            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Operation Management</p>
            </div>

            <p className='seemoretext'>See More</p>

        </div>

        <div>
            <p className='availablecoursesfiltertittle'>Skills</p>
            <div className='d-flex pt-3'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Managment</p>
            </div>
            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Analytics</p>
            </div>
            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Marketing</p>
            </div>
            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Leadership</p>
            </div>
            <div className='d-flex '>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Operation</p>
            </div>
            <p className='seemoretext'>See More</p>
        </div>

        <div>
            <p className='availablecoursesfiltertittle'>Level</p>
            <div className='d-flex pt-3'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Beginner </p>
            </div>
            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Intermediate</p>
            </div>
            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Advance</p>
            </div>
            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Mixed</p>
                
            </div>

            <p className='seemoretext'>See More</p>
           
        </div>

        <div>
            <p className='availablecoursesfiltertittle'>Duration</p>
            <div className='d-flex pt-3'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>Less than 2 hours </p>
            </div>
            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>1-4 weeks</p>
            </div>
            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>1-3 months</p>
            </div>
            <div className='d-flex'>
                <input type='checkbox' className='availablecoursescheckbox'/>
                <p className='px-2 availablecoursesfiltertext'>3-6 months</p>
            </div>

        </div>
        <p className='seemoretext'>See More</p>


           
           
        </div>

        <div className='col-sm-12 col-md-12 col-lg-9 col-xlg-9'>
            <div className='d-flex availablecoursesandsearchcontainer'>
                 <p className='availablecoursestext'>24,659 Available Courses</p>
            <div className='searchandbuttoncontainer d-flex'>
                <input type='search' placeholder='What do you want to learn' className='viewallcoursessearchinput'/>
                <div className='availablecoursesearchbutton d-flex'>
                    <i class='bx  bx-search'  ></i> 
                    <button className='viewallcoursessearchbutton'> Search</button>

                </div>
                
            </div>

            </div>

            <div className='availablecoursessecondsectioncontainer pt-3'>
                <div className='availablecoursescontentcontainer'>
                    <img src={Operationsimg}alt='Operationimg' className='viewallcoursesavailableimage'/>

                    <div className='coursesavailablecontentsdetials'>

                         <p className='availablecoursescontenttext'>Operations Management</p>
                    <img src={Fourhalfstar}alt='stars'/>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-check-circle'  ></i> 
                        <p>Courses certificate</p>
                    </div>
                     <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-clock-3'  ></i> 
                        <p>3hours (self-paced)</p>
                        <p className='courseprice'>$20.99</p>
                    </div>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-laptop'  ></i> 
                        <p>100% online</p>
                        <p className='Freetext'>Free</p>
                    </div>
                    <p className='viewcoursetext'>View Course</p>




                    </div>
                    
                   
                </div>
                <div className='availablecoursescontentcontainer'>
                    <img src={Operationsimg2}alt='Operationimg' className='viewallcoursesavailableimage'/>

                    <div className='coursesavailablecontentsdetials'>

                         <p className='availablecoursescontenttext'>Operations Management</p>
                    <img src={Fourhalfstar}alt='stars'/>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-check-circle'  ></i> 
                        <p>Courses certificate</p>
                    </div>
                     <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-clock-3'  ></i> 
                        <p>3hours (self-paced)</p>
                        <p className='courseprice'>$20.99</p>
                    </div>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-laptop'  ></i> 
                        <p>100% online</p>
                        <p className='Freetext'>Free</p>
                    </div>
                    <p className='viewcoursetext'>View Course</p>




                    </div>
                    
                   
                </div>

                <div className='availablecoursescontentcontainer'>
                    <img src={Operationsimg3}alt='Operationimg' className='viewallcoursesavailableimage'/>

                    <div className='coursesavailablecontentsdetials'>

                         <p className='availablecoursescontenttext'>Operations Management</p>
                    <img src={Fourhalfstar}alt='stars'/>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-check-circle'  ></i> 
                        <p>Courses certificate</p>
                    </div>
                     <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-clock-3'  ></i> 
                        <p>3hours (self-paced)</p>
                        <p className='courseprice'>$20.99</p>
                    </div>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-laptop'  ></i> 
                        <p>100% online</p>
                        <p className='Freetext'>Free</p>
                    </div>
                    <p className='viewcoursetext'>View Course</p>




                    </div>
                    
                   
                </div>

                <div className='availablecoursescontentcontainer'>
                    <img src={Operationsimg4}alt='Operationimg' className='viewallcoursesavailableimage'/>

                    <div className='coursesavailablecontentsdetials'>

                         <p className='availablecoursescontenttext'>Operations Management</p>
                    <img src={Fourhalfstar}alt='stars'/>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-check-circle'  ></i> 
                        <p>Courses certificate</p>
                    </div>
                     <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-clock-3'  ></i> 
                        <p>3hours (self-paced)</p>
                        <p className='courseprice'>$20.99</p>
                    </div>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-laptop'  ></i> 
                        <p>100% online</p>
                        <p className='Freetext'>Free</p>
                    </div>
                    <p className='viewcoursetext'>View Course</p>




                    </div>
                    
                   
                </div>

                <div className='availablecoursescontentcontainer'>
                    <img src={Operationsimg5}alt='Operationimg' className='viewallcoursesavailableimage'/>

                    <div className='coursesavailablecontentsdetials'>

                         <p className='availablecoursescontenttext'>Operations Management</p>
                    <img src={Fourhalfstar}alt='stars'/>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-check-circle'  ></i> 
                        <p>Courses certificate</p>
                    </div>
                     <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-clock-3'  ></i> 
                        <p>3hours (self-paced)</p>
                        <p className='courseprice'>$20.99</p>
                    </div>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-laptop'  ></i> 
                        <p>100% online</p>
                        <p className='Freetext'>Free</p>
                    </div>
                    <p className='viewcoursetext'>View Course</p>




                    </div>
                    
                   
                </div>

                <div className='availablecoursescontentcontainer'>
                    <img src={Operationsimg6}alt='Operationimg' className='viewallcoursesavailableimage'/>

                    <div className='coursesavailablecontentsdetials'>

                         <p className='availablecoursescontenttext'>Operations Management</p>
                    <img src={Fourhalfstar}alt='stars'/>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-check-circle'  ></i> 
                        <p>Courses certificate</p>
                    </div>
                     <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-clock-3'  ></i> 
                        <p>3hours (self-paced)</p>
                        <p className='courseprice'>$20.99</p>
                    </div>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-laptop'  ></i> 
                        <p>100% online</p>
                        <p className='Freetext'>Free</p>
                    </div>
                    <p className='viewcoursetext'>View Course</p>




                    </div>
                    
                   
                </div>

                
                <div className='availablecoursescontentcontainer'>
                    <img src={Operationsimg7}alt='Operationimg' className='viewallcoursesavailableimage'/>

                    <div className='coursesavailablecontentsdetials'>

                         <p className='availablecoursescontenttext'>Operations Management</p>
                    <img src={Fourhalfstar}alt='stars'/>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-check-circle'  ></i> 
                        <p>Courses certificate</p>
                    </div>
                     <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-clock-3'  ></i> 
                        <p>3hours (self-paced)</p>
                        <p className='courseprice'>$20.99</p>
                    </div>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-laptop'  ></i> 
                        <p>100% online</p>
                        <p className='Freetext'>Free</p>
                    </div>
                    <p className='viewcoursetext'>View Course</p>




                    </div>
                    
                   
                </div>


                <div className='availablecoursescontentcontainer'>
                    <img src={Operationsimg8}alt='Operationimg' className='viewallcoursesavailableimage'/>

                    <div className='coursesavailablecontentsdetials'>

                         <p className='availablecoursescontenttext'>Operations Management</p>
                    <img src={Fourhalfstar}alt='stars'/>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-check-circle'  ></i> 
                        <p>Courses certificate</p>
                    </div>
                     <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-clock-3'  ></i> 
                        <p>3hours (self-paced)</p>
                        <p className='courseprice'>$20.99</p>
                    </div>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-laptop'  ></i> 
                        <p>100% online</p>
                        <p className='Freetext'>Free</p>
                    </div>
                    <p className='viewcoursetext'>View Course</p>




                    </div>
                    
                   
                </div>


                <div className='availablecoursescontentcontainer'>
                    <img src={Operationsimg9}alt='Operationimg' className='viewallcoursesavailableimage'/>

                    <div className='coursesavailablecontentsdetials'>

                         <p className='availablecoursescontenttext'>Operations Management</p>
                    <img src={Fourhalfstar}alt='stars'/>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-check-circle'  ></i> 
                        <p>Courses certificate</p>
                    </div>
                     <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-clock-3'  ></i> 
                        <p>3hours (self-paced)</p>
                        <p className='courseprice'>$20.99</p>
                    </div>
                    <div className='d-flex coursescertificatecontainer'>
                        <i class='bx  bx-laptop'  ></i> 
                        <p>100% online</p>
                        <p className='Freetext'>Free</p>
                    </div>
                    <p className='viewcoursetext'>View Course</p>




                    </div>
                    
                   
                </div>



                

            </div>
            

        </div>
        <div className='avaialblecoursescarouselgeneralcontainer'>
            <div></div>
            <div className='d-flex viewallcoursescarouselsbutton'>
                <i class='bx  bx-chevron-left leftchevron'  ></i> 
                <div className='d-flex viewallcoursescarouselcon '>
                <div className='viewallcoursescarousels'><p>1</p></div>
                <div className='viewallcoursescarousels'><p>2</p></div>
                <div className='viewallcoursescarousels'> <p>3</p></div>
                <div className='viewallcoursescarousels'><p>...</p></div>
                <div className='viewallcoursescarousels'><p>100</p></div>

                </div>
                
                        
                
                <i class='bx  bx-chevron-right rightchevron'  ></i> 
                
            </div>

        </div>
        


      
    </div>
  )
}

export default Viewallcourses
