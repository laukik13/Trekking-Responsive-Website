import React, { useEffect, useState } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import { MdMail } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navtab from '../Components/Navtab';
import Subscribecard from '../Components/Subscribecard';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const submit = () => toast.success('Data Submit Succesfully !');

  const formerror = () => toast.error('Something Went Wrong !');

  useEffect(()=>{
    Aos.init({duration : 2000});
 },[])


const handleSubmit = (event) => {
event.preventDefault();

const fullName = event.target.fullName.value;
const email = event.target.email.value;
const phone = event.target.phone.value;
const message = event.target.message.value;

axios.post(`${process.env.REACT_APP_HOST_URL}/contact/addContact`,{
  fullName,
  email,
  phone,
  message
})
.then(response =>{
   console.log(response.data);
   submit();
})
.catch(error => {
   console.log(error);
   formerror();
})

event.target.reset();

}


  return (
    <>
<div className='main-wrapper'>
<section className='contact-wrapper'>
   <div className='contact-inner-wrapper'>
    <Navtab/>
   <div className='contact-head-wrapper'>
            <h3>Contact</h3>
            <Breadcrumb
            title='Contact'
            />
         </div>
         <div className='img-forest-wrapper'>   
                <img src='./Images/pineforest.png' alt='pineforest'/>
           </div>
            <div className='img-slider-wrapper'>   
                <img src='./Images/slidermask.png' alt='slidermask'/>
           </div>     
   </div>
   </section>
   <section className='contact-details-wrapper'>
   <div className='container-xxl cont'>
        <div className='cont1' data-aos="fade-down">
            <h5>Talk to us</h5>
            <h2>Get in Touch</h2>
         </div>

         <div className='cont2'>

            <div className='cont2-1' data-aos="fade-right">
              <p>Contact us and get strapped in for a better adventure experience in your lifetime. just look for opportunity to be with nature. Don't hesitate to write to us and ask for
              any help at any time for your convenience. </p>
            </div>

            <div className='cont2-2' data-aos="fade-left">
              <p>Sed do eiusmod tempor incidunt ut labore. Et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo this is to bring the viverra maecenas accumsan.</p>
            </div>

            <div className='cont2-3'  data-aos="fade-right">
                <h2 className='mb-5'>Contact Info</h2>
                <div className='d-flex align-items-center mb-4'><MdMail className='iicon' /><p>someone@gmail.com</p></div>
                <div className='d-flex  align-items-center mb-4'><MdCall className='iicon' /> <p>(334) 336 3346</p></div>
                <div className='d-flex  align-items-center mb-4'><MdLocationOn className='iicon' /> <p>932 Galvin St. Pompano Beach, FL 33060</p> </div>
            </div>

            <div className='cont2-4'  data-aos="fade-left">
                 <h2 className='mb-5'>Business Hours:</h2>
                 <div className='hoursdiv mb-4'> <h5>Monday - Friday</h5> <h5>8am - 9pm </h5></div>
                 <div className='hoursdivv mb-4'> <h5>Saturday - Sunday</h5> <h5>9am - 6pm </h5></div>
                 <div> <p><span><b>Note:</b></span> Due to covid situation pls don't hesitate to get in touch with nature. Nature doesnt need us but we do, so lets join together and have fun.</p></div>
            </div>

         </div>

         <div className='cont3'>

           <div className='cont3-2'  data-aos="fade-down">
              <div className='cont3-2-1'>
               <h2>Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                <div className='name-div'>
               <input className="form-control form-control-lg inputtext" type="text"  name='fullName' placeholder="Name" aria-label=".form-control-lg example"></input>
               </div>

               <div className='email-div'>
               <input className="form-control form-control-lg inputtext" type="email"  name='email'  placeholder="Email"  aria-label=".form-control-lg example"></input>
               </div>

               <div className='phone-div'>
               <input className="form-control form-control-lg inputtext" type="tel"  name='phone' placeholder="Phone" aria-label=".form-control-lg example"></input>
               </div>

               <div className='message-div'>
                <textarea placeholder='Message' type="text" className='form-control form-control-lg msg-textarea' name='message'  aria-label=".form-control-lg example" ></textarea>
               </div>

               <button type='submit' className='buttn'>Submit</button>
               <ToastContainer
               position="top-center"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
               >
               </ToastContainer>
               </form>
               
               </div>
            </div>      
            <div className='cont-img-wrapper'>
              <img src='./Images/compass.jpg' alt='compass'/>
              </div>          
         </div>
         </div>
   </section>
<Subscribecard/>
</div>
    </>
  )
}

export default Contact
