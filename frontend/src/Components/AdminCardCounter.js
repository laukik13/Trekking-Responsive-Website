import React from 'react'


const AdminCardCounter = (props) => {
  return (
    <>
    <div className='counter-card-wrapper'>
        <div className='icon-card'>
           {props.icons}
        </div>
        <div className='d-flex flex-column'>
           <h6>{props.no}</h6>
           <h5>{props.title}</h5>
        </div>
    </div>
    </>
  )
}

export default AdminCardCounter
