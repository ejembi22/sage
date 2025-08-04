import React from 'react'
import Foooterlogo from '../../assets/images/SIBM03.png'

const Footer = () => {
  return (
    <div className='row footergeneralcontainer'>
        <div className='col-sm-12 col-md-12 col-lg-3 col-xlg-3'>
            <div>
                <img src={Foooterlogo}alt='Sage'/>
            </div>
            <div className='footertext pt-3'>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim.</p>

            </div>
            <div className='footericoncontainer mt-3 d-flex'>
             <div className='footericons'> <i class="fa-brands fa-instagram "></i></div>
             <div className='footericons'><i class="fa-brands fa-facebook-f"></i></div>
             <div className='footericons'><i class="fa-brands fa-twitter t"></i></div>
             <div className='footericons'><i class="fa-brands fa-linkedin-in"></i></div>
            </div>  

            



                
                
                

            

           
            

        </div>
        <div className='col-sm-12 col-md-12 col-lg-9 col-xlg-9 '>
            <dl className='footersecondsection d-flex'>
                <div>
                <dt className='footertittle'>Top Courses</dt>
                <dd className='footerlistitems'>Operations Management</dd>
                <dd className='footerlistitems'>Business Analytics</dd>
                <dd className='footerlistitems'>Leadership</dd>
                <dd className='footerlistitems'>Digital Marketing</dd>
                <dd className='footerlistitems'>HR Management</dd>
                <dd className='footerlistitems'>Agile Project Management</dd>
                <dd className='footerlistitems'>Negotiation</dd>
                <dd className='footerlistitems'>Sales & Sales Management</dd>
                </div>
                

                <div>
                <dt className='footertittle'>Platforms</dt>
                <dd className='footerlistitems'>SAGE in the news</dd>
                <dd className='footerlistitems'>SAGE Mini MBA</dd>
                <dd className='footerlistitems'>Real-World Case Studies</dd>
                </div>

                

                <div>
                <dt className='footertittle'>Our training</dt>
                <dd className='footerlistitems'>Mini MBA</dd>
                <dd className='footerlistitems'>Certificate Courses</dd>
                <dd className='footerlistitems'>Sage Institute</dd>

                </div>

                

                <div className='footertittle'>
                <dt className='footerlistitems'>Company</dt>
                <dd className='footerlistitems'>Why Pluralcode</dd>
                <dd className='footerlistitems'>Talk to Student Advisor</dd>

                </div>

                



            </dl>
            <dl className='d-flex  footerthirdsection '>
                <div>
                    <dt className='footertittle'>Resources</dt>
                    <dd className='footerlistitems'>FAQs</dd>
                    <dd className='footerlistitems'>Testimonials</dd>
                    
                </div>
                <div>
                    <dt className='footertittle'>Policies</dt>
                    <dd className='footerlistitems'>Terms and Condition</dd>
                    <dd className='footerlistitems'>Student Loan Policy</dd>
                    <dd className='footerlistitems'>Refunds Policy</dd>
                    <dd className='footerlistitems'>Privacy Policy</dd>
                </div>

                <div>
                    <dt className='footertittle'>Contact</dt>
                    <dd className='footerlistitems'><i class="fa-solid fa-phone-volume "></i> +(234) 123-456-7890.</dd>
                    <dd className='footerlistitems'><i class="fa-solid fa-phone-volume"></i> +(234) 123-456-7890.</dd>
                    <dd className='footerlistitems'><i class="fa-brands fa-twitter"></i> sageinstitutehq</dd>
                    <dd className='footerlistitems'><i class="fa-brands fa-instagram"></i> sageinstitutehq</dd>
                    <dd className='footerlistitems'><i class="fa-brands fa-facebook"></i> sageinstitutehq</dd>
                    <dd className='footerlistitems'><i class="fa-solid fa-envelope"></i> support@sageinstitutehq.com</dd>
                   
                </div>
            </dl>
        </div>

        <div>
            <p className='copyrighttext'>Copyright 2023 Sage Institute of Business and Management</p>
        </div>
      
    </div>
  )
}

export default Footer
