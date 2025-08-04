import React from 'react'

const Aboutcourse = () => {
  return (
    <div className='row aboutthiscoursegeneralcontainer'>
        <p className='text-center aboutcourses'>About Courses</p>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6 aboutthiscoursefirstsection'>
            <p className='aboutthiscourse'>About this course</p>
            <p className='aboutnumberofstudent'>1000+ Students</p>
            <p className='pt-4 aboutthiscoursedetails'>Lorem ipsum dolor sit amet consectetur. Tellus nullam et mauris diam et lobortis tincidunt neque arcu. Aliquam eu adipiscing massa posuere pulvinar nulla tortor. Netus maecenas sit augue pretium interdum. Lorem ipsum dolor sit amet consectetur. Tellus nullam et mauris diam et lobortis tincidunt neque arcu. Aliquam eu adipiscing massa posuere pulvinar nulla tortor. Netus maecenas sit augue pretium interdum. </p>

        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6 aboutthiscoursesecondsection'>
            <div className='aboutthiscourseiconandtextgeneralcontainer'>
                <div className='d-flex abouticonandtextcontainer'>
                    <i class='bx  bx-user-circle abouticons'  ></i> 
                    <p className='abouticontittle px-2'>Career Outlook</p>
                </div>
                <div className='pt-5'>

                <div className='d-flex abouticonandtextcontainer'>
                    <i class='bx  bx-flag-alt-2 abouticon'  ></i> 
                    <p className='abouticontittles px-2'>45% </p>
                    <p className='aboutthiscoursespantext'>started a new career after completing these courses</p>
                </div>

                <div className='d-flex abouticonandtextcontainer'>
                    <i class='bx  bx-briefcase-alt-2  abouticon'  ></i> 
                    <p className='abouticontittles px-2'>60% </p>
                    <p className='aboutthiscoursespantext'>got a tangible career benefit from this course</p>
                </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Aboutcourse
