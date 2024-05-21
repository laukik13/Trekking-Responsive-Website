import { Modal, Table } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { BiSolidEdit} from 'react-icons/bi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminContactList = () => {

  const formerror = () => toast.error('Something Went Wrong !');

  const update= ()=>{ toast.success('Data Update Succesfully !');} 
 
  const [open, setOpen] = useState(false);

  const [data, setData] = useState({
    fullName:'',
    email:'',
    phone:'',
    message:''
  });

  const {fullName,email,phone,message} = data;

  const [modal, setModal] = useState(false);

  const [dataSource,setDataSource] = useState([]);
  

  const handleInput = (e)=>{
    setData({...data,[e.target.name]: e.target.value})
  }


  useEffect (()=>{
    axios.get(`${process.env.REACT_APP_HOST_URL}/contact/getAllContact`)
    .then((response)=>{
     console.log(response.data.contact);
     setDataSource(response.data.contact);
    })
    .catch((error)=>{
     console.log(error);
     formerror();
    })
  
  },[])



 const handleUpdate =(event)=>{
  event.preventDefault();
    axios.put(`${process.env.REACT_APP_HOST_URL}/contact/updateContact/`+data._id, data)
    .then(response =>{
     console.log(response.data.contact);
     update();
     setTimeout(() => {
      window.location.reload();
    }, 2000)
    })
    .catch(error =>{
     console.log(error);
     formerror();
    })
 }


 const handleDelete =(event)=>{
 
  event.preventDefault();
    axios.delete(`${process.env.REACT_APP_HOST_URL}/contact/deleteContact/`+ data._id)
    .then((response)=>{
     console.log(response.data.contact); 
     toast.success('Data Delete Succesfully !');
     setTimeout(() => {
      window.location.reload();
    }, 2000)
  
    })
    .catch((error)=>{
     console.log(error);
     formerror();
    })

 }

  const columns = [
    {
      key: '1',
      title: 'Full Name',
      dataIndex: 'fullName'
    },
    {
      key: '2',
      title: 'Email',
      dataIndex: 'email'
    },
    {
      key: '3',
      title: 'Phone Number',
      dataIndex:'phone'
    },
    {
      key: '4',
      title: 'Message',
      dataIndex:'message'
    },
    {
      key: '5',
      title: 'Action',
      render:(record)=>{
       return <>
         <div className='d-flex gap-5'>
         <button className='btn-add-comment' onClick={()=>(setOpen(true),setData(record))}><BiSolidEdit className='trekdiv-editlogo'/></button>
         <Modal
            title="Update Your Details*"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={800} >
                               <form onSubmit={handleUpdate}>
        
                                <div className='nname-div mb-3'>
                                    <input className="form-control form-control-lg addinputtext" type="text" name='fullName' placeholder="Full Name" onChange={(e)=>handleInput(e)}  value={fullName} aria-label=".form-control-lg example"/>
                              </div>
                      
                              <div className='nname-div mb-3'>
                              <input className="form-control form-control-lg addinputtext" type="email" name='email' placeholder="Email" onChange={(e)=>handleInput(e)} value={email} aria-label=".form-control-lg example"/>
                              </div>

                              <div className='nname-div mb-3'>
                              <input className="form-control form-control-lg addinputtext" type="tel" name='phone' placeholder="Phone Number" onChange={(e)=>handleInput(e)} value={phone}  aria-label=".form-control-lg example"/>
                              </div>
                
                              <div className='mmessage-div'>
                                    <textarea placeholder='Address' className='form-control form-control-lg mmsg-textarea' name='message' onChange={(e)=>handleInput(e)} value={message} aria-label=".form-control-lg example" />
                              </div>
                              <button type='submit' onClick={update} className='btn-add-update'>Update</button>
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
         </Modal>
        

         <button className='btn-add-comment' onClick={()=>(setModal(true),setData(record))}><RiDeleteBin6Line className='trekdiv-deletelogo'/></button>
         <Modal
          title="Confirm Deletion"
          centered
          open={modal}
          onOk={() => setModal(false)}
          onCancel={() => setModal(false)}
          width={500}
         >
         <div>
         <h5>Are you sure you want to delete ID: <strong className='strong'>{data._id}</strong> </h5>
         <div>
         <button type='submit' onClick={handleDelete} className='btn-add-update'>Delete</button>
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
         </div>
         </div>
         </Modal>
                              </div>
       </>
      }
      }
  ]





  return (
    <>
      <div className='admin-main-wrapper'>
   <div className='admintrek-head-wrapper'>
            <h5>Contact List</h5>
            <p>Ready to jump back in!</p>
           </div>
   <div className='contact-list-wrapper container mt-4 mb-4'>
            <Table
            columns={columns}
            dataSource={dataSource}
            pagination={
              {
                pageSize:10
              }
            }
            >
            </Table>
  </div>
   </div>
    </>
  )
}

export default AdminContactList
