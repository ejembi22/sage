import React from 'react'
import Reachouttousimage from'../../assets/images/reachouttousimage.png'

const Reachout = () => {
  return (
    <div className='row reachouttousgeneralcontainer'>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6'>
            <p className='aboutreachouttext'>Reach Out to Us</p>
            <div>
                <div className='d-flex contactinfoandiconcontainer'>
                    <i class='bx  bx-phone-ring'  ></i> 
                    <p className='reachoutcontactinformation'>+(234) 012-345-6789, +(234) 012-345-6789.</p>

                </div>

                <div className='d-flex contactinfoandiconcontainer'>
                    <i class="fa-brands fa-twitter"></i>
                    <p className='reachoutcontactinformation'>sageinstitutehq</p>

                </div>
                <div className='d-flex contactinfoandiconcontainer'>
                    <i class="fa-brands fa-instagram"></i>
                    <p className='reachoutcontactinformation'>sageinstitutehq</p>

                </div>
                <div className='d-flex contactinfoandiconcontainer'>
                    <i class="fa-brands fa-facebook"></i>
                    <p className='reachoutcontactinformation'>sageinstitutehq</p>

                </div>
                <div className='d-flex contactinfoandiconcontainer'>
                    <i class="fa-solid fa-envelope"></i>
                    <p className='reachoutcontactinformation'><u>mailto:support@sageinstitutehq.com</u></p>

                </div>

                <div className='d-flex contactinfoandiconcontainer'>
                    <i class="fa-solid fa-location-dot"></i>
                    <p className='reachoutcontactinformation'>4b Toyin Street Ikeja, Lagos State</p>

                </div>
                
            </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6'>
            <img src={Reachouttousimage}alt='Reach out Image'className='reachouttousimage'/>
        </div>
      
    </div>
  )
}

export default Reachout
