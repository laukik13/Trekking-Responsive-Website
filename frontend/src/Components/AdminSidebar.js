import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {LuLayoutDashboard} from 'react-icons/lu'
import {GrAddCircle} from 'react-icons/gr'
import {FaList} from 'react-icons/fa'
import {GrGallery} from 'react-icons/gr'
import {BiSolidCommentEdit} from 'react-icons/bi'
import {BiSolidContact} from 'react-icons/bi'
import {FiCornerDownRight} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import axios from 'axios'

const AdminSidebar = () => {

  const navigate = useNavigate();

const handleLogout =(event)=>{
event.preventDefault();

axios.get(`${process.env.REACT_APP_HOST_URL}/admin/logout`)
      .then((res) => {
        // console.log(res.data);
        // window.location.reload();
          navigate("/admin/loginAdmin");
    
      })

      .catch((error) => {
        console.log(error);
      });

}


  return (
  <>
  <div className='admin-sidebar-wrapper'>
         <div className='inner-sidebar-wrapper'>
               <Link to='/admin'>
               <LuLayoutDashboard className='admin-sidebar-icon'/>
                <h5>Dashboard</h5>
               </Link>
               <Link to='/admin/addtrek'>
               <GrAddCircle className='admin-sidebar-icon'/>
               <h5>Add New Trek</h5>
               </Link>
               <Link to='/admin/treklist'>
                <FaList className='admin-sidebar-icon'/>
               <h5>Trek List</h5>
               </Link>
               <Link to='/admin/booklist'>
               <MdOutlineTravelExplore className='admin-sidebar-icon'/>
               <h5>Booking List</h5>
               </Link>
               <Link to='/admin/addgallery'>
                <GrGallery className='admin-sidebar-icon'/>
               <h5>Add Gallery</h5>
               </Link>
               <Link to='/admin/testimonallist'>
                <BiSolidCommentEdit className='admin-sidebar-icon'/>
               <h5>Testimonial List</h5>
               </Link>
               <Link to='/admin/contactlist'>
                <BiSolidContact className='admin-sidebar-icon'/>
               <h5>Contact List</h5>
               </Link>
               <Link onClick={handleLogout}>
                <FiCornerDownRight className='admin-sidebar-icon'/>
               <h5>Logout</h5>
               </Link>
               <div></div>
         </div>
  </div>
  </>
  )
}

export default AdminSidebar
