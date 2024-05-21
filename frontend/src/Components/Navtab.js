import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {RiAdminFill} from 'react-icons/ri'
import {CgMenuGridR} from 'react-icons/cg'
import { Drawer } from 'antd'
import {MdHome} from 'react-icons/md'
import {MdGroup} from 'react-icons/md'
import {MdEvent} from 'react-icons/md'
import {IoMdImages} from 'react-icons/io'
import {GiTalk} from 'react-icons/gi'
import {MdNewspaper} from 'react-icons/md'
import {MdModeComment} from 'react-icons/md'
import {MdUpcoming} from 'react-icons/md'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {MdContacts} from 'react-icons/md'
import {FaSortDown} from 'react-icons/fa'

const Navtab = () => {

    const [menu,setMenu] = useState(false);
    

  return (
    <>
     <header className='navtab-wrapper px-3'>
     <div className='header-logo'>
        <img src='' alt=''/>
        <h5>Adventor</h5>
     </div>
     <div className='header-link'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <div className="dropdown">
         <button className="btn-header dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Event <FaSortDown className='dropdown-icon'/>
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><Link to='/adventure'>Upcoming Event</Link></li>
            <li><Link to='/booking'>Booking Event</Link></li>
         </ul>
         </div>
         <Link to='/gallery'>Gallery</Link>

         <div className="dropdown">
         <button className="btn-header dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Talk <FaSortDown className='dropdown-icon'/>
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><Link to='/testimonial'>Testimonial</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
         </ul>
         </div>
         
         <Link to='/contact'>Contact</Link>
     </div>
     <div >
     <Link to='/admin/loginAdmin'><RiAdminFill className='icon-admin'/></Link>
    <button className='btn-icon' onClick={()=>{setMenu(true);}}><CgMenuGridR className='icon-menu'/></button>
    <Drawer
               open={menu}
               title="Menu"
               closable={false}
               width={300}
               onClose={()=>{
               setMenu(false);
               }}
               placement='right'
               >
             <div className='menu-wrapper'>
              <Link to='/'><MdHome/>&nbsp;&nbsp;Home</Link>
            <Link to='/about'><MdGroup/>&nbsp;&nbsp;About</Link>
            <div className="dropdown">
               <button className="btn-header dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               <MdEvent/>&nbsp;&nbsp;Event<FaSortDown className='dropdown-icon-blk'/>
               </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link to='/adventure'><MdUpcoming/>&nbsp;&nbsp;Upcoming Event</Link></li>
                  <li><Link to='/booking'><BsFillPatchCheckFill/>&nbsp;&nbsp;Booking Event</Link></li>
               </ul>
               </div>
               <Link to='/gallery'><IoMdImages/>&nbsp;&nbsp;Gallery</Link>

               <div className="dropdown">
               <button className="btn-header dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               <MdEvent/>&nbsp;&nbsp;Talk<FaSortDown className='dropdown-icon-blk'/>
               </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link to='/testimonial'><MdModeComment/>Testimonial</Link></li>
                  <li><Link to='/blog'><MdNewspaper/>&nbsp;&nbsp;Blog</Link></li>
               </ul>
               </div>
               
               <Link to='/contact'><MdContacts/>&nbsp;&nbsp;Contact</Link>
               <Link to='/admin'><RiAdminFill/>&nbsp;&nbsp;Admin</Link>
              </div>
               </Drawer>
     </div>
  </header>
    </>
  )
}

export default Navtab
