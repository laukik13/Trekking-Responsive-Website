import axios from 'axios';
import React from 'react'
import  {FaPaperPlane} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscribecard = () => {

  const update = ()=> toast.success('Image Add Succesfully !');

  const formerror = () => toast.error('Something Went Wrong !');

const handleSubscribe =(event)=>{
event.preventDefault();

  const email = event.target.email.value;

  axios.post(`${process.env.REACT_APP_HOST_URL}/subscribe/addSubscriber`,{
    email
  })
  .then((res)=>{
    console.log(res.data);
    update();
  })
  .catch((err)=>{
    console.log(err);
    formerror();
  })

event.target.reset();

}



  return (
    <>
    <section className='subscribe-wrapper'>
    <div className='banner-wrapper'>
      <img src='./Images/clientlogo1.png' alt='clientlogo1'/>
      <img src='./Images/clientlogo2.png' alt='clientlogo2'/>
      <img src='./Images/clientlogo3.png' alt='clientlogo3'/>
      <img src='./Images/clientlogo4.png' alt='clientlogo4'/>
    </div>
   <div className='subscribe-inner-wrapper'>
           <p>Subscribe now</p>
           <h5>Get the Latest News</h5>
          <form onSubmit={handleSubscribe}>
          <div className='inputbox'>
          <input type='text' name='email' placeholder='Enter email'/>
          <button type='submit' className='btn-plane-icon'><FaPaperPlane/></button>
          <ToastContainer
             position="top-center"
             autoClose={2000}
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
          </div>
          </form>
   </div>
   </section>
    </>
  )
}

export default Subscribecard
