import React from 'react'
import { Link } from 'react-router-dom'

const Cardphoto = (props) => {
  return (
    <>
    <div className='photss-main shadow'>
       <Link to={props.urll}> 
      <img  src={props.pict} alt="piccc"/>
       </Link> 

       <Link to={props.urll}> 
    <div className='photss-wrap'>
        <div className='photss-details'>
        <div className='photss-word'>
            <h4>{props.str}</h4>
        </div>
        </div>
    </div>
    </Link> 
    </div>
    </>
  )
}

export default Cardphoto
