import React from 'react'
import { Link } from 'react-router-dom'
import {FaCaretRight} from 'react-icons/fa'

const Breadcrumb = (props) => {
  return (
    <>
    <div className='breadcrumb-wrapper'>
     <div className='container-xxl'>
      <div className='row'>
         <div className='col-12 d-flex justify-content-center align-items-center'>
             <p>
                <Link to='/'>Home</Link> <FaCaretRight/> {props.title}
             </p>
         </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default Breadcrumb
