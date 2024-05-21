import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Navtab from '../Components/Navtab';
import Subscribecard from '../Components/Subscribecard';
import Testimonialcard from '../Components/Testimonialcard';

const Testimonial = () => {
  return (
    <>
    <div className='main-wrapper'>
<section className='testimonial-container-wrapper'>
   <div className='testimonial-container-inner-wrapper'>
    <Navtab/>
   <div className='testimonial-container-head-wrapper'>
            <h3>Testimonial</h3>
            <Breadcrumb
            title='testimonial'
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
<section className='testimonial-container-details-wrapper mb-3'>
<Testimonialcard/>
</section>
<Subscribecard/>
</div>
    </>
  )
}

export default Testimonial
