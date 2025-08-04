import React from 'react'
import Productmanagementpage from './Productmanagementpage'
import Aboutcourse from '../operationmanagement/Aboutcourse'
import Coursebenefit from '../operationmanagement/Coursebenefit'
import Video from '../../sagelanding/Video'
import Whatyoulearn from '../operationmanagement/Whatyoulearn'
import Operationmanagementsection from '../operationmanagement/Operationmanagementsection'
import Reviewtwo from '../../Minimba/Reviewtwo'
import Realworld from '../../sagelanding/Realworld'


const Productmanagement = () => {
  return (
    <div>
        <Productmanagementpage/>
         <Aboutcourse/>
        <Coursebenefit/>
        <Video/>
        <Whatyoulearn/>
        <Operationmanagementsection/>
        <Reviewtwo/>
        <Realworld/>
      
    </div>
  )
}

export default Productmanagement
