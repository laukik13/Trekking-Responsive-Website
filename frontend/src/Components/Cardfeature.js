import React from 'react'
import { Link } from 'react-router-dom'

const Cardfeature = (props) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 1200, left: 0, behavior: 'smooth' });
  };


  return (
    <>
        <div className='featurecard-wrapper'>
         <div data-aos="flip-left">
         <img src={props.imgsrc} alt={props.imgsrc}/>
         <div className='img-wrapper'></div>
         </div>
           <h5>{props.title}</h5>
           <p>{props.detail}</p>
           <Link to='/contact' onClick={scrollToTop} className='btn-enquire'>Enquire</Link>
        </div>
    </>
  )
}

export default Cardfeature
