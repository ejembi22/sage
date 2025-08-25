import React from 'react'
import Viewcertificate from './Viewcertificate'
import Verifystudent from '../verifyourstudent/Verifystudent'
import Review from '../sagelanding/Review'
import Frequentlyaskq from '../sagelanding/Frequentlyaskq'

const Viewcertificatepage = () => {
  return (
    <div>
        <Verifystudent/>
        <Viewcertificate/>
        <Review/>
        <Frequentlyaskq/>
      
    </div>
  )
}

export default Viewcertificatepage
