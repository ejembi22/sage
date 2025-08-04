import React from 'react'
import Microsoft from '../../assets/images/microsoft.png'
import Google from '../../assets/images/google.png'
import Tiktok from '../../assets/images/tiktok.png'
import Apple from '../../assets/images/apple.png'
import Toyota from '../../assets/images/toyota.png'
import Jpchase from '../../assets/images/jpchase.png'
import Nike from '../../assets/images/nike.png'
import Paypal from '../../assets/images/paypal.png'
import Motorola from '../../assets/images/motorola.png'
import Flutterwave from '../../assets/images/flutterwave.png'

const Realworld = () => {
  return (
    <div className='realworlgeneralcontainer'>
        <div className='realworldcontent'>
            <p className='text-center realworldtext'>Real-World Case Studies</p>
            <p className=' realworlddescription'>Success leaves clues, and so our courses allow you to learn from the most successful companies, their highs and lows and apply those lessons to the subject matter and to your own profession or business.</p>
        </div>
        <div className='d-flex realworlcaselogocontainter'>
            <div>
                <img src={Microsoft}alt='Microsoft'/>

            </div>
            <div> <img src={Google}alt='Google'/></div>
            <div><img src={Tiktok}alt='Tiktok'/></div>
            <div> <img src={Apple}alt='Apple'/></div>
            <div><img src={Toyota}alt='Toyota'/></div>

        </div>
        <div className='d-flex realworlcaselogocontainter2'>
            <div> <img src={Jpchase}alt='Chase'/> </div>
            <div> <img src={Nike}alt='Nike'/> </div>
            <div> <img src={Paypal}alt='Paypal'/> </div>


        </div>
        <div className='d-flex realworlcaselogocontainter3'>
            <div><img src={Motorola}alt='Motorola'/></div>
            <div><img src={Flutterwave}alt='Flutterwave'/></div>

        </div>
      
    </div>
  )
}

export default Realworld
