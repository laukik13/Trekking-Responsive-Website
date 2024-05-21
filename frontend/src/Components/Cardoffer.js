import React from 'react'

const Cardoffer = (props) => {
  return (
    <>
    <div className='cardoffer-wrapper'>
        <img src={props.imgsrc} alt={props.imgsrc}/>
        <div className='d-flex flex-column '>
           <h5>
           {props.title}
           </h5>
           <p>
           {props.detail}
           </p>
        </div>
    </div>
    </>
  )
}

export default Cardoffer
