import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {PiNotePencilThin} from 'react-icons/pi'


const Cardadventure = (props) => {

  const navigate = useNavigate();

const submitBookhandle=()=>{

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

   navigate('/booking'
//    ,{
//     state: {
//        bgsrc: `${props.bgsrc}`,
//        days: `${props.days}`,
//        groupsize: `${props.groupsize}`,
//        level: `${props.level}`,
//        price: `${props.price}`,
//        title: `${props.title}`,
//        desc: `${props.desc}`,
//        city: `${props.city}`
//     }
//  }
  );
}

  return (
    <div className='cardadventure-wrapper'>
      <div className='img-wrapper' style={{backgroundImage: `url(${process.env.REACT_APP_HOST_URL}/trek/${props.bgsrc})`}}>
          <div className='overlay-wrapper'>
          <div className='duration-wrapper'>
            <div className='duration-inner-wrapper'>
            <div className='d-flex flex-column  justify-content-center align-items-center gap-5'>
            <h6>{props.days}</h6>
            <p>Days</p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center gap-5'>
            <h6>{props.groupsize}</h6>
            <p>Group size</p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center gap-5'>
            <h6>{props.level}</h6>
            <p>Difficulty</p>
            </div>             
            </div>
          </div>
          <div className='price-wrapper'> 
           <p>From {props.price}/-</p>
          </div>
          </div>
      </div>
      <div className='detail-wrapper'>
              <h5>{props.title}</h5>
              <p>{props.desc}</p>
             <div className='d-flex justify-content-between align-items-center'><Link to=''><PiNotePencilThin className='icon-note'/>&nbsp;&nbsp;{props.city}</Link>
             <button className='btn-booknow' type='submit' onClick={submitBookhandle}>Book Now</button>
                </div>
      </div>
    </div>
  )
}

export default Cardadventure
