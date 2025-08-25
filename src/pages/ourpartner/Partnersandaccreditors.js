import React from 'react'
import Pluralcodelogo from'../../assets/images/pluralcodelogo.png'

const Partnersandaccreditors = () => {
  return (
    <div className=''>
        <p className='partnersandaccreditorstext text-center'>Our Partners And Accreditors</p>
        <div className='ourpartnerscontentcontainer'>
            <div className='partnerscardcontainer d-flex'>
                <img src={Pluralcodelogo}alt='pluralcode' className='pluralcodelogo'/>
                <div className='px-3 pluralcodetextcontainer'>
                    <p className='pluralcodetittle'>Pluralcode Academy</p>
                    <p className='pluralcodedescriptions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing.</p>
                </div>
            </div>

            <div className='partnerscardcontainer d-flex'>
                <div className='px-3'>
                    <p className='pluralcodetittle'>Pluralcode Academy</p>
                    <p className='pluralcodedescriptions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing.</p>
                </div>
                <img src={Pluralcodelogo}alt='pluralcode' className='pluralcodelogo'/>
                
            </div>

            <div className='partnerscardcontainer d-flex'>
                <img src={Pluralcodelogo}alt='pluralcode' className='pluralcodelogo'/>
                <div className='px-3'>
                    <p className='pluralcodetittle'>Pluralcode Academy</p>
                    <p className='pluralcodedescriptions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing.</p>
                </div>
            </div>

            <div className='partnerscardcontainer d-flex'>
                <div className='px-3'>
                    <p className='pluralcodetittle'>Pluralcode Academy</p>
                    <p className='pluralcodedescriptions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing.</p>
                </div>
                <img src={Pluralcodelogo}alt='pluralcode' className='pluralcodelogo'/>
                
            </div>

        </div>
        
    </div>
  )
}

export default Partnersandaccreditors
