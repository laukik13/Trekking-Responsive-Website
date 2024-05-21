import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {RiAdminFill} from 'react-icons/ri'
import {CgMenuGridR} from 'react-icons/cg'
import { Drawer } from 'antd'
import {MdHome} from 'react-icons/md'
import {MdGroup} from 'react-icons/md'
import {MdEvent} from 'react-icons/md'
import {IoMdImages} from 'react-icons/io'
import {MdNewspaper} from 'react-icons/md'
import {MdModeComment} from 'react-icons/md'
import {MdUpcoming} from 'react-icons/md'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {MdContacts} from 'react-icons/md'
import {FaSortDown} from 'react-icons/fa'

const Header = () => {

   const [menu,setMenu]= useState(false);

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
   
  return (
   <>
  <header className={`header-wrapper ${show && 'hidden'} px-3`} >
     <div className='header-logo'>
        <img src='' alt=''/>
        <h5>Adventor</h5>
     </div>
     <div className='header-link'>
        <Link to='/' onClick={scrollToTop}>Home</Link>
        <Link to='/about' onClick={scrollToTop}>About</Link>
        <div className="dropdown">
         <button className="btn-header dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> 
           Event <FaSortDown className='dropdown-icon'/>
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><Link to='/adventure' onClick={scrollToTop}>Upcoming Event</Link></li>
            <li><Link to='/booking' onClick={scrollToTop}>Booking Event</Link></li>
         </ul>
         </div>
         <Link to='/gallery' onClick={scrollToTop}>Gallery</Link>

         <div className="dropdown">
         <button className="btn-header dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Talk <FaSortDown className='dropdown-icon'/>
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><Link to='/testimonial' onClick={scrollToTop}>Testimonial</Link></li>
            <li><Link to='/blog' onClick={scrollToTop}>Blog</Link></li>
         </ul>
         </div>
        <Link to='/contact' onClick={scrollToTop}>Contact</Link>
     </div>
     <div >
     <Link to='/admin/loginAdmin' onClick={scrollToTop}><RiAdminFill className='icon-admin'/></Link>
    <button className='btn-icon' onClick={()=>{setMenu(true);}}><CgMenuGridR className='icon-menu'/></button>
    <Drawer
               open={menu}
               title="Menu"
               closable={true}
               width={300}
               onClose={()=>{
               setMenu(false);
               }}
               placement='right'
               >
              <div className='menu-wrapper'>
              <Link to='/' onClick={scrollToTop}><MdHome/>&nbsp;&nbsp;Home</Link>
            <Link to='/about' onClick={scrollToTop}><MdGroup/>&nbsp;&nbsp;About</Link>
            <div className="dropdown">
               <button className="btn-header dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               <MdEvent/>&nbsp;&nbsp;Event<FaSortDown className='dropdown-icon-blk'/>
               </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link to='/adventure' onClick={scrollToTop}><MdUpcoming/>&nbsp;&nbsp;Upcoming Event</Link></li>
                  <li><Link to='/booking' onClick={scrollToTop}><BsFillPatchCheckFill/>&nbsp;&nbsp;Booking Event</Link></li>
               </ul>
               </div>
               <Link to='/gallery' onClick={scrollToTop}><IoMdImages/>&nbsp;&nbsp;Gallery</Link>
               <div className="dropdown">
               <button className="btn-header dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               <MdEvent/>&nbsp;&nbsp;Talk <FaSortDown className='dropdown-icon-blk'/>
               </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link to='/testimonial' onClick={scrollToTop}><MdModeComment/>Testimonial</Link></li>
                  <li><Link to='/blog' onClick={scrollToTop}><MdNewspaper/>&nbsp;&nbsp;Blog</Link></li>
               </ul>
               </div>
               <Link to='/contact' onClick={scrollToTop}><MdContacts/>&nbsp;&nbsp;Contact</Link>
               <Link to='/admin' onClick={scrollToTop}><RiAdminFill/>&nbsp;&nbsp;Admin</Link>
              </div>
               </Drawer>
     </div>
  </header>
   </>
  )
}

export default Header
