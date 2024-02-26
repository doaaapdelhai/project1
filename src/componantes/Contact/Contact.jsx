// import React from 'react'
import Swal from 'sweetalert2'
import './Contact.css'
import im from '../../assets/page-heading-bg.jpg'



function Contact() {

  function click () {
    Swal.fire({
      title: "Snded!",
      text: "You clicked the button!.",
      icon: "success",
      showConfirmButton: false,
      timer:1500,
    });

  }
  return (
    <div className='properties'>
    <div className='primary'>
    <button >HOME / PROPERTIES</button>
    </div>
    <h1> CONTACT US </h1>
    <img src={im} />
   


   <div className='main-contact'> 
   <div className=' title-contact'>
    <p className='p2'>Get In Touch<br/> With Our Agents</p>
    <p className='title'>
    When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.
    </p>

   </div>
   <div className='form'> 
 
     <form>
      <input type="text" placeholder='Enter Your Name' />
      <input type="text" placeholder='Enter Your Emil' />
      <input type="text" placeholder='Enter Your number' />
      <input type="text" placeholder='Enter Your massege' />
      <button className='o' onClick = {click} > Send</button>




     </form>

   </div>

   
     </div>
     



    </div>
  )
}

export default Contact