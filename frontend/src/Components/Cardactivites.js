import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Cardactivites = (props) => {

  useEffect(()=>{
    Aos.init({duration : 2000});
 },[])


  return (
    <>
    <div className='cardactivites-wrapper' data-aos={props.aos} style={{backgroundImage: `url(${props.activitybg})`}}>
    <h3>{props.title}</h3>
         <div className='cardactivites-inner-wrapper'>
           <div className='cardactivites-details'>
           <h6>{props.desc}</h6>
           </div>
         </div>
    </div>
    </>
  )
}

export default Cardactivites
