import React from 'react'
import Internationalbusinesspage from './Internationalbusinesspage'
import Aboutcourse from '../operationmanagement/Aboutcourse'
import Coursebenefit from '../operationmanagement/Coursebenefit'
import Video from '../../sagelanding/Video'
import Whatyoulearn from '../operationmanagement/Whatyoulearn'
import Operationmanagementsection from '../operationmanagement/Operationmanagementsection'
import Reviewtwo from '../../Minimba/Reviewtwo'
import Realworld from '../../sagelanding/Realworld'

const Internationalbussiness = () => {
  return (
    <div>
      <Internationalbusinesspage/>
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

export default Internationalbussiness
