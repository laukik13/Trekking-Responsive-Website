import React, { useEffect, useState } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navtab from '../Components/Navtab'
import { useLocation } from 'react-router-dom'
import Testimonialcard from '../Components/Testimonialcard'
import Subscribecard from '../Components/Subscribecard'

const Singleblog = () => {

  const location = useLocation();
  console.log(location.state)
  const [data,setData]=useState(location.state)


    useEffect(()=>{
        Aos.init({duration : 2000});
     },[])

  return (
   <>
   <div className='main-wrapper'>
   <section className='singleblog-wrapper'>
   <div className='singleblog-inner-wrapper'>
    <Navtab/>
   <div className='singleblog-head-wrapper'>
            <h3>{data.topic}</h3>
            <Breadcrumb
            title='Blog'
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
   <section className='singleblog-detail-wrapper'>
        <div className='container-xxl'>
             <div className='d-flex flex-column gap-30'>
                    <div className='singleblog-img-wrapper' data-aos="fade-down">
                        <img src={data.picc} className='shadow' alt={data.picc}/>
                    </div>
                    <div>
                        <div className='d-flex justify-content-between mb-5'>
                        <h5>{data.topic}</h5>
                        <p>{data.dd} {data.mon} {data.yyr}</p>
                        </div>
                        <p>
                          {data.descst}
                        </p>
                        <p>
                          {data.desclg}
                        </p>
                    </div>
             </div>
        </div>
   </section>
   <Testimonialcard/>
   <Subscribecard/>
   </div>
   </>
  )
}

export default Singleblog
