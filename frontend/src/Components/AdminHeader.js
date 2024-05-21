import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {BsPersonCircle} from 'react-icons/bs'
import {CgMenuGridR} from 'react-icons/cg'
import { Drawer } from 'antd'
import {LuLayoutDashboard} from 'react-icons/lu'
import {GrAddCircle} from 'react-icons/gr'
import {FaList} from 'react-icons/fa'
import {GrGallery} from 'react-icons/gr'
import {BiSolidCommentEdit} from 'react-icons/bi'
import {BiSolidContact} from 'react-icons/bi'
import {FiCornerDownRight} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import axios from 'axios'



const AdminHeader = () => {

  const [items, setItems] = useState([]);

// console.log(props.username);

    const [menu,setMenu]= useState(false);

       const scrollToTop = () => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        };
      

//  useEffect(()=>{
   
// axios.get('http://192.168.1.23:4000/admin/getAdmin/'+ props.id )
// .then((res)=>{
//   console.log(res.data.admin);
// })
// .catch((err)=>{
//   console.log(err);
// })

//  },[])

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
   setItems(items);
  }
}, []);


  return (
    <>
    <div className='admin-header-wrapper px-3'>
    <div className='header-logo'>
        <img src='' alt=''/>
        <h5>Adventor</h5>
     </div>
     <div>
     <Link to='/admin' onClick={scrollToTop} className='admin-icon'><BsPersonCircle className='icon-admin'/> {items.username}</Link>
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
              <div className='admin-menu-wrapper'>
              <Link to='/admin' onClick={scrollToTop}><LuLayoutDashboard />&nbsp;Dashboard</Link>
              <Link to='/admin/addtrek' onClick={scrollToTop}><GrAddCircle/>&nbsp;Add New Trek</Link>
              <Link to='/admin/treklist' onClick={scrollToTop}><FaList/>&nbsp;Trek List</Link>           
               <Link to='/admin/booklist' onClick={scrollToTop}><MdOutlineTravelExplore/>&nbsp;Booking List</Link>
               <Link to='/admin/addgallery' onClick={scrollToTop}><GrGallery/>&nbsp;Add Gallery</Link>
               <Link to='/admin/testimonallist' onClick={scrollToTop}><BiSolidCommentEdit/>&nbsp;Testimonial List</Link>
               <Link to='/admin/contactlist' onClick={scrollToTop}><BiSolidContact/>&nbsp;Contact List</Link>
               <Link to='/' onClick={scrollToTop}><FiCornerDownRight/>&nbsp;Logout</Link>
              </div>
               </Drawer>
     </div>
    </div>
    </>
  )
}

export default AdminHeader
