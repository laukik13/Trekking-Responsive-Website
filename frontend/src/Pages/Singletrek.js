import React, { useEffect, useState } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import {MdLocationPin} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navtab from '../Components/Navtab'
import { Link, useLocation } from 'react-router-dom'
import Testimonialcard from '../Components/Testimonialcard'
import Subscribecard from '../Components/Subscribecard'

const Singletrek = () => {
   const location = useLocation();
   console.log(location.state)
   const [data,setData]=useState(location.state)

   const[show,setShow]= useState(true);

   const controlNavbar=()=>{
      if(window.scrollY > 150)
      {
         setShow(false)
      }  
      else{
         setShow(true)
      }
      }

   const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
  

   useEffect(()=>{
      window.addEventListener('scroll',controlNavbar)
      return()=>{
         window.removeEventListener('scroll',controlNavbar)
      }
   },[])

    useEffect(()=>{
        Aos.init({duration : 2000});
     },[])

  return (
   <>
<div className='main-wrapper'>
<section className='singletrek-wrapper' style={{backgroundImage: `url(${data.bgsrc})`}}>
   <div className='singletrek-inner-wrapper'>
    <Navtab/>
   <div className='singletrek-head-wrapper'>
            <h3>{data.title}</h3>
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
<section className='trekdetails-wrapper'>
    <div className='container-xxl'>
         <div className='trekdetails-inner-wrapper'>
               <div className='trek-left-wrapper'>
                 <div className='trek-img' data-aos="fade-right"><img src={data.bgsrc} alt='adventure1'/></div>
                 <div className='trek-head-wrapper mt-5'>
                    <div className='d-flex justify-content-between'>
                       <div> 
                        <h5>{data.title}</h5>
                        <p><MdLocationPin/>&nbsp;{data.city}</p>
                       </div>
                       <div>
                        <p>Price</p>
                        <h5>{data.price}</h5>
                       </div>
                    </div>
                 </div>
                 <div className='trek-feature-wrapper mt-5 mb-5'>
                     <div className='trek-feature-inner-wrapper'>
                         <div className='d-flex justify-content-center align-items-center gap-10 '>
                            <img src='./Images/calendar.gif' alt='' className='trekfeature-img'/>
                            <div className='text-center'>
                                <h6>Duration</h6>
                                <p>{data.days} Days</p>
                            </div>
                         </div>
                         <div className='d-flex justify-content-center align-items-center gap-10'>
                         <img src='./Images/bar-chart.gif' alt='' className='trekfeature-img'/>
                         <div className='text-center'>
                                <h6>Difficulty</h6>
                                <p>{data.level}</p>
                            </div>
                         </div>
                         <div className='d-flex justify-content-center align-items-center gap-10'>
                         <img src='./Images/hands.gif' alt='' className='trekfeature-img'/>
                         <div className='text-center'>
                                <h6>Group Size</h6>
                                <p>{data.groupsize} Guest</p>
                            </div>
                         </div>
                     </div>
                 </div>
                 <div className='trek-details-wrapper'>
                 <h5>About {data.title}</h5>
                 <p>{data.desc}</p>
                 <div className='mt-4 mb-4'>
                 <Link to='/booking' onClick={scrollToTop} className='btn-booknow'>Book Now</Link>
                 </div>
                 </div>
               </div>
               {/* <div className='trek-right-wrapper'>
               <div className='right-inner-wrapper shadow' data-aos="fade-left">
               <div className='title-wrapper'>
                    <h5>Trek Detail</h5>
                 </div>
                 <div className='form-wrapper'>
                  <form>
                  <div className='name-div'>
               <input className="form-control form-control-lg inputtext" type="text" placeholder="Name" aria-label=".form-control-lg example"/>
               </div>

               <div className='phone-div'>
               <input className="form-control form-control-lg inputtext" type="tel" placeholder="Phone" aria-label=".form-control-lg example"/>
               </div>

               <div className='email-div'>
               <input className="form-control form-control-lg inputtext" type="text" placeholder="Email" aria-label=".form-control-lg example"/>
               </div>
 
                <div className='trek-div'>
                <select className="form-select form-select-lg inputtext" aria-label="Default form-select-lg example">
                <option defaultValue={'Choose Trek'}>Choose Trek</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
                </div>

                <div className='date-div'>
               <input className="form-control form-control-lg inputtext" type="date" placeholder="DD-MM-YY" aria-label=".form-control-lg example"/>
               </div>


                <div className='group-size-div'>
               <input className="form-control form-control-lg inputtext" type="number" placeholder="Group Size" aria-label=".form-control-lg example"/>
               </div>


               <button type='button' className='btn-book'>Book Now</button>
                  </form>
                 </div>
               </div>
               </div> */}
         </div>
    </div>
</section>
<Testimonialcard/>
<Subscribecard/>
</div>
   </>
  )
}

export default Singletrek
