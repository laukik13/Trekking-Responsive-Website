import React, { useEffect, useState } from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsLockFill} from 'react-icons/bs'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaHome} from 'react-icons/fa'

const AdminLoginpage = () => {

  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  const formerror = () => toast.error('Something Went Wrong !');

  const update= ()=>{ toast.success('Register Succesfully !');} 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };


  const handleLogin =(event)=>{
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    axios.post(`${process.env.REACT_APP_HOST_URL}/admin/login`,{
      username,
      password
     })
     .then((res)=>{
      console.log(res.data.admin);
      setItems(res.data.admin);
      if (res.data.success == true) {
        navigate("/admin"
        // , {
        //   state: {
        //     id: res.data.admin._id,
        //   },
        // }
        );
      } else {
        formerror()
          }
     })
     .catch((err)=>{
      console.log(err);
     })

}

useEffect(() => {
  localStorage.setItem('items', JSON.stringify(items));
}, [items]);

  const handleRegister =(event)=>{
       event.preventDefault();

       const username = event.target.username.value;
       const firstName = event.target.firstName.value;
       const lastName = event.target.lastName.value;
       const email = event.target.email.value;
       const password = event.target.password.value;

       axios.post(`${process.env.REACT_APP_HOST_URL}/admin/register`,{
        username,
        firstName,
        lastName,
        email,
        password
       })
       .then((res)=>{
        console.log(res.data.admin);
        if (res.data.success == true) {
          update();
        } else {
          formerror();
            }
       })
       .catch((err)=>{
        console.log(err);
       })

       event.target.reset();
  }

  return (
   <>
        <div className='admin-header-wrapper px-3'>
    <div className='header-logo'>
        <img src='' alt=''/>
        <h5>Adventor</h5>
     </div>
     <div >
     <Link to='/' onClick={scrollToTop}><FaHome className='icon-admin'/></Link>
     {/* 
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
              <Link to='/admin/dashboard' onClick={scrollToTop}><LuLayoutDashboard />&nbsp;Dashboard</Link>
              <Link to='/admin/addtrek' onClick={scrollToTop}><GrAddCircle/>&nbsp;Add New Trek</Link>
              <Link to='/admin/treklist' onClick={scrollToTop}><FaList/>&nbsp;Trek List</Link>           
               <Link to='/admin/booklist' onClick={scrollToTop}><MdOutlineTravelExplore/>&nbsp;Booking List</Link>
               <Link to='/admin/addgallery' onClick={scrollToTop}><GrGallery/>&nbsp;Add Gallery</Link>
               <Link to='/admin/testimonallist' onClick={scrollToTop}><BiSolidCommentEdit/>&nbsp;Testimonial List</Link>
               <Link to='/admin/contactlist' onClick={scrollToTop}><BiSolidContact/>&nbsp;Contact List</Link>
               <Link to='/' onClick={scrollToTop}><FiCornerDownRight/>&nbsp;Logout</Link>
              </div>
               </Drawer> */}
     </div>
    </div>
    <div className='admin-login-wrapper'>
       <div className='admintrek-head-wrapper'>
            <h5>Login Page</h5>
            <p>Ready to jump back in!</p>
        </div>
        <div className='login-main-wrapper container'>
             <div className='signin-page-wrapper p-4 shadow'>
             <div className='mb-5'>
             <h5>Sign in</h5>
             </div>
             <form onSubmit={handleLogin}>
             <div className='nname-div mb-4'>
                <BsFillPersonFill className='login-icon'/>
               <input className="form-control form-control-lg addinputtext ps-4" type="text" placeholder="Username" name='username' aria-label=".form-control-lg example"/>        
             </div>
             <div className='nname-div mb-5'>
               <BsLockFill className='login-icon'/>
               <input className="form-control form-control-lg addinputtext ps-4" type="password" placeholder="Password" name='password' aria-label=".form-control-lg example"/>        
             </div>
             <div>
                <button type='submit' className='btn-signin'>SIGN IN</button>
             </div>
                               <ToastContainer
                                position="top-center"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                                >
                                </ToastContainer>
             </form>
             </div>
             <div className='registration-wrapper p-4 shadow'>
             <div className='mb-5'>
             <h5>Registration</h5>
             </div>
             <form onSubmit={handleRegister}>
             <div className='nname-div mb-4'>
               <input className="form-control form-control-lg addinputtext " type="text" placeholder="Username" name='username' aria-label=".form-control-lg example"/>        
             </div>  
             <div className='nname-div mb-4'>
               <input className="form-control form-control-lg addinputtext " type="text" placeholder="FirstName" name='firstName' aria-label=".form-control-lg example"/>        
             </div>  
             <div className='nname-div mb-4'>
               <input className="form-control form-control-lg addinputtext " type="text" placeholder="LastName" name='lastName' aria-label=".form-control-lg example"/>        
             </div>  
             <div className='nname-div mb-4'>
               <input className="form-control form-control-lg addinputtext " type="text" placeholder="Email" name='email' aria-label=".form-control-lg example"/>        
             </div>  
             <div className='nname-div mb-4'>
               <input className="form-control form-control-lg addinputtext " type="text" placeholder=" Create Password" name='password' aria-label=".form-control-lg example"/>        
             </div>  
             <div className='nname-div mb-5'>
               <input className="form-control form-control-lg addinputtext " type="text" placeholder="Re-enter password" name='confirmPassword' aria-label=".form-control-lg example"/>        
             </div>    
             <div>
                <button type='submit' className='btn-register'>REGISTER</button>
             </div>
             <ToastContainer
                                position="top-center"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                                >
                                </ToastContainer>
             </form>
             </div>
        </div>
    </div>
   </>
  )
}

export default AdminLoginpage
