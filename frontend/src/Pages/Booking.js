import React from 'react'
import Navtab from '../Components/Navtab'
import Breadcrumb from '../Components/Breadcrumb'
import Subscribecard from '../Components/Subscribecard'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

   const Booking = () => {

   const submit = () => toast.success('Trek Book Succesfully !');

   const formerror = () => toast.error('Something Went Wrong !');                              

       const handleSubmit =(event)=> {
              event.preventDefault();
              
              const fullName = event.target.fullName.value;
              const email = event.target.email.value;
              const address = event.target.address.value;
              const callingNo = event.target.callingNo.value;
              const whatsappNo = event.target.whatsappNo.value;
              const chooseTrek = event.target.chooseTrek.value;
              const date = event.target.date.value;
              const contactedFirasta = event.target.contactedFirasta.value;
              const instagramId = event.target.instagramId.value;
              const gaurdianName = event.target.gaurdianName.value;
              const gaurdianNo = event.target.gaurdianNo.value;

              axios.post(`${process.env.REACT_APP_HOST_URL}/booking/addBooking`,{
                fullName,
                email,
                address,
                callingNo,
                whatsappNo,
                chooseTrek,
                date,
                contactedFirasta,
                instagramId,
                gaurdianName,
                gaurdianNo

              })
              .then((response)=>{
                 console.log(response.data);
                submit();
              })
              .catch((error)=>{
                 console.log(error);
                 formerror();
              })
              
              event.target.reset();
              }



  return (
    <>
    <div className='main-wrapper'>
<section className='booking-wrapper'>
   <div className='booking-inner-wrapper'>
    <Navtab/>
   <div className='booking-head-wrapper'>
            <h3>Booking Event</h3>
            <Breadcrumb
            title='Booking'
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
<section className='booking-details-wrapper'>
 <div className='container-xxl'>
        <form className='form-wrapper' onSubmit={handleSubmit}> 
        <div className='name-div'>
               <input className="form-control form-control-lg inputtext" type="text" placeholder="Your Name" name='fullName' aria-label=".form-control-lg example"/>
               </div>

               <div className='email-div'>
               <input className="form-control form-control-lg inputtext" type="email" placeholder="Email" name='email' aria-label=".form-control-lg example"/>
               </div>
 
               <div className='address-div'>
               <input className="form-control form-control-lg inputtext" type="text" placeholder="Address" name='address' aria-label=".form-control-lg example"/>
               </div>

               <div className='phone-div'>
               <input className="form-control form-control-lg inputtext" type="tel" placeholder="Calling Number" name='callingNo' aria-label=".form-control-lg example"/>
               <input className="form-control form-control-lg inputtext" type="tel" placeholder="Whatsapp Number" name='whatsappNo' aria-label=".form-control-lg example"/>
               </div>


                <div className='trek-div'>
                <select className="form-select form-select-lg inputtext" name='chooseTrek' aria-label="Default form-select-lg example">
                <option defaultValue={'Choose Trek'}>Choose Trek</option>
                <option value="Naneghat">Naneghat</option>
                <option value="Two">Shivnari</option>
                <option value="Three">Raigad</option>
                <option value="Three"></option>
                </select>
                <input className="form-control form-control-lg inputtext" type="date" name='date' placeholder="DD-MM-YY" aria-label=".form-control-lg example"/>
                </div>

               <div className='contacted-div'>
               <input className="form-control form-control-lg inputtext" type="text" name='contactedFirasta' placeholder="How you contacted Firasta Community ?" aria-label=".form-control-lg example"/>
               </div>

               <div className=' instagram-div'>
               <input className="form-control form-control-lg inputtext" type="text" name='instagramId' placeholder=" Instagram ID" aria-label=".form-control-lg example"/>
               </div>

               <div className='family-div'>
               <input className="form-control form-control-lg inputtext" type="text" name='gaurdianName' placeholder="Father or Mother Name" aria-label=".form-control-lg example"/>
               <input className="form-control form-control-lg inputtext" type="tel" name='gaurdianNo' placeholder="Father or Mother Contact Number" aria-label=".form-control-lg example"/>
               </div>


               <div className='radio1-div inputtext '>
               <h5>Team Firasta Community Reserves All Right To Change/ Deviate / Cancel The Plans Without Prior Notice.</h5>
               <div className="form-check">
                <input  className="form-check-input" type="checkbox" id="flexCheckDefault" name='' value='Agree' />
                <label  className="form-check-label " htmlFor="flexCheckDefault">Agree</label>
               </div>
               </div>

               <div className='radio2-div inputtext'>
               <h5>Team Firasta Community Is Not Responsible For Any Loss of Valuable Things of Participants At The Trip.</h5>
               <div  className="form-check">
                <input  className="form-check-input" type="checkbox" id="flexCheckDefault" name='' value='Agree'/>
                <label  className="form-check-label " htmlFor="flexCheckDefault">Agree</label>
               </div>
               </div>

               <div className='radio3-div inputtext '>
               <h5>Team Firasta Community Is Not Responsible For Any Enjury/ Accident / Death Happens To The Participate At Trip.</h5>
               <div  className="form-check">
                <input  className="form-check-input" type="checkbox" id="flexCheckDefault" name='' value='Agree'/>
                <label  className="form-check-label " htmlFor="flexCheckDefault">Agree</label>
               </div>
               </div>
               <button type='submit' className='btn-book'>Book Now</button>
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
        </form>
 </div>
</section>
<Subscribecard/>
</div>
    </>
  )
}

export default Booking