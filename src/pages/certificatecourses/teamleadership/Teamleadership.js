import React from 'react'
import Teamleadershippage from './Teamleadershippage'
import Aboutcourse from '../operationmanagement/Aboutcourse'
import Coursebenefit from '../operationmanagement/Coursebenefit'
import Video from '../../sagelanding/Video'
import Whatyoulearn from '../operationmanagement/Whatyoulearn'
import Operationmanagementsection from '../operationmanagement/Operationmanagementsection'
import Reviewtwo from '../../Minimba/Reviewtwo'
import Realworld from '../../sagelanding/Realworld'

const Teamleadership = () => {
  return (
    <div>
        <Teamleadershippage/>
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

export default Teamleadership
