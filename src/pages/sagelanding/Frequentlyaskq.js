import React from 'react'
import { useState } from 'react'





 const faqs = [
      {
        question: 'What is the  Sage Mini MBA?',
        answer: 'Sage Mini MBA is one of the most advanced programs of its kind globally. The Mini MBA gives you the same academic value of a full-time MBA in a streamlined and self-paced environment and for a fraction of the cost. Sage Mini MBA is backed internationally and adheres to global standards for advanced business studies.'
      },

      {
        question: 'How do I start learning a course?',
        answer: 'Select a Course: Click on the course youre interested in to view details, curriculum, and requirements.'
      },
      {
        question: 'What happens after I pay for a course?',
        answer: 'After you pay for a course, you will get immediate access to all the course materials and can start learning right away at your own pace.'
      },
      {
        question: 'Do I get a certificate after learning?',
        answer: 'Yes, you will receive a certificate upon successful completion.'
      },
      {
        question: ' How long do courses take?',
        answer: 'The program typically runs for 6-8 weeks depending on your pace.'
      },
      {
        question: 'How much do programs cost?',
        answer: 'The cost of our programs varies depending on the course, but detailed pricing is listed on each course page for transparency before you enroll.'
      },

      {
        question: 'How do I get my certificate after completing my course?',
        answer: 'Once you complete all the required lessons and assessments in your course, your certificate will be automatically generated and made available for download from your dashboard.'
      }





    ]

const Frequentlyaskq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) =>{
        setOpenIndex(openIndex === index ? null : index);
    }

   

  return (
    <div className='pt-5 frequentlyaskedquestiongeneralcontainer'>
        <div>
            <p className='text-center frequentlyaskedquestiontext'>Frequently Asked Questions</p>
            <div className='searchboxcontainer'>
                <input type='text' placeholder='Search for a question' className='searchbox'/>
                <i class='bx  bx-search-big searchbutton '  ></i> 
            </div>
        </div>
        {faqs.map((faq, index) =>(

          <div className='faq-item' key={index}>
            <div className='faq-question' onClick={() => toggleFAQ(index)}>
              <ul className='faq-list'>
                <li className='faqmainquestion'>{faq.question}</li>
              </ul>
              <i className={`fa-solid ${ openIndex === index ? 'fa-angle-up' : 'fa-angle-down'} icon`}>

              </i>
            </div>
            {openIndex === index && (
              <div className="faq-answer pt-3 ">
                <p className=' fagsagetitle px-3'>{faq.question}</p>
                <p className='faqanswerdescription px-3 pt-2'>{faq.answer}</p>
              </div>
            )}
          </div>
          
        ))}
        

        
      
    </div>
  )
}

export default Frequentlyaskq
