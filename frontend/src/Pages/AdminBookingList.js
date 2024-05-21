import { Modal, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiSolidEdit} from 'react-icons/bi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminBookingList = () => {

  const update = ()=> toast.success('Data Update Succesfully !');

  const formerror = () => toast.error('Something Went Wrong !');

  const [open, setOpen] = useState(false);

  const [data, setData] = useState({
    fullName:'',
    email:'',
    callingNo:'',
    whatsappNo:'',
    chooseTrek:'',
    date:'',
    address:'',
    contactedFirasta:'',
    instagramId:'',
    gaurdianName:'',
    gaurdianNo:''
  });

  const {fullName,email,callingNo,whatsappNo,chooseTrek,date, address,contactedFirasta,instagramId,gaurdianName,gaurdianNo} = data;

  const [modal, setModal] = useState(false);

  const [dataSource, setDataSource] = useState([])


  const handleInput = (e)=>{
   setData({...data,[e.target.name]: e.target.value})
 }

  useEffect (()=>{
  
    axios.get(`${process.env.REACT_APP_HOST_URL}/booking/getAllBooking`)
    .then((response)=>{
     console.log(response.data);
     setDataSource(response.data.booking);
    })
    .catch((error)=>{
     console.log(error);
    })

 },[])

 

 const handleUpdate = (event)=>{
  event.preventDefault();
    axios.put(`${process.env.REACT_APP_HOST_URL}/booking/updateBooking/`+data._id, data)
    .then(response =>{
     console.log(response.data);
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
    axios.delete(`${process.env.REACT_APP_HOST_URL}/booking/deleteBooking/`+ data._id)
    .then((response)=>{
     console.log(response.data);
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
      dataIndex: 'fullName',
      responsive: ["sm"]
    },
    {
      key: '2',
      title: 'Email',
      dataIndex: 'email',
      responsive: ["sm"]
    },
    {
      title: "Name and Details",
      render: (record) => (
        <React.Fragment>
          {record.fullName}
          <br />
          {record.email}
          <br />
          {record.callingNo}
          <br/>
          {record.whatsappNo}
          <br />
          {record.gaurdianName}
          <br />
          {record.gaurdianNo}
        </React.Fragment>
      ),
      responsive: ["xs"]
    },
    {
      key: '3',
      title: 'Address',
      dataIndex:'address'
    },
    {
      key: '4',
      title: 'Calling No',
      dataIndex:'callingNo',
      responsive: ["sm"]
    },
    {
      key: '5',
      title: 'Whatsapp No',
      dataIndex:'whatsappNo',
      responsive: ["sm"]
    },
    {
      title: "Trek Details",
      render: (record) => (
        <React.Fragment>
          {record.chooseTrek}
          <br />
          {record.date}
          <br/>
          {record.difficulty}
        </React.Fragment>
      ),
      responsive: ["xs"]
    },
    {
      key: '6',
      title: 'Choose Trek',
      dataIndex:'chooseTrek',
      responsive: ["sm"]
    },
    {
      key: '7',
      title: 'Date',
      dataIndex:'date',
      responsive: ["sm"]
    },
    {
      key: '8',
      title: 'How you contacted Firasta ?',
      dataIndex:'contactedFirasta',
    },
    {
      key: '9',
      title: 'Instagram ID',
      dataIndex:'instagramId'
    },
    {
      key: '10',
      title: 'Gaurdian Name',
      dataIndex:'gaurdianName',
      responsive: ["sm"]
    },
    {
      key: '11',
      title: 'Gaurdian No',
      dataIndex:'gaurdianNo',
      responsive: ["sm"]
    },
    {
      key: '12',
      title: 'Action',
      render:(record)=>{
       return <>
         <div className='d-flex gap-5'>
         <button className='btn-add-comment' onClick={()=>(setOpen(true),setData(record))}><BiSolidEdit className='trekdiv-editlogo'/></button>
         <Modal
            title="Plz Update Booking"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={800} >
                  <form onSubmit={handleUpdate}>
                                <div className='nname-div mb-3'>
                                    <input className="form-control form-control-lg addinputtext" type="text" name='fullName' onChange={(e)=>handleInput(e)}  placeholder="Full Name" value={fullName} aria-label=".form-control-lg example"/>
                                    <input className="form-control form-control-lg addinputtext" type="email" name='email' onChange={(e)=>handleInput(e)}   placeholder="Email" value={email} aria-label=".form-control-lg example"/>
                              </div>
                    
                              <div className='nname-div mb-3'>
                                    <input className="form-control form-control-lg addinputtext" type="tel" name='callingNo' onChange={(e)=>handleInput(e)} placeholder="Calling No" value={callingNo}  aria-label=".form-control-lg example"/>
                                    <input className="form-control form-control-lg addinputtext" type="tel" name='whatsappNo' onChange={(e)=>handleInput(e)}  placeholder="Whatsapp No" value={whatsappNo}  aria-label=".form-control-lg example"/>
                              </div>
                              <div className='nname-div mb-3'>
                                    <input className="form-control form-control-lg addinputtext" type="text" name='chooseTrek' onChange={(e)=>handleInput(e)}  placeholder="Trek Name"  value={chooseTrek} aria-label=".form-control-lg example"/>
                                    <input className="form-control form-control-lg addinputtext" type="date" name='date' onChange={(e)=>handleInput(e)}  placeholder="Date"       value={date} aria-label=".form-control-lg example"/> 
                                    <input className="form-control form-control-lg addinputtext" type="text" name='instagramId' onChange={(e)=>handleInput(e)}  placeholder="Instagram ID" value={instagramId}  aria-label=".form-control-lg example"/>
                              </div>
                              <div className='nname-div mb-3'>
                              <input className="form-control form-control-lg addinputtext" type="text" name='contactedFirasta' onChange={(e)=>handleInput(e)} placeholder="How you contacted Firasta ?" value={contactedFirasta} aria-label=".form-control-lg example"/>
                            </div>  
                            <div className='nname-div mb-3'>
                                    <input className="form-control form-control-lg addinputtext" type="text" name='gaurdianName' onChange={(e)=>handleInput(e)}  placeholder="Gaurdian Name" value={gaurdianName}  aria-label=".form-control-lg example"/>
                                    <input className="form-control form-control-lg addinputtext" type="tel" name='gaurdianNo' onChange={(e)=>handleInput(e)}  placeholder="Gaurdian No" value={gaurdianNo}  aria-label=".form-control-lg example"/>
                              </div>
                              <div className='mmessage-div'>
                                    <textarea placeholder='Address' className='form-control form-control-lg mmsg-textarea' name='address' onChange={(e)=>handleInput(e)} value={address} aria-label=".form-control-lg example" />
                              </div>
                              <button type='submit' className='btn-add-update'>Update</button>
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
         <h5>Are you sure you want to delete Booking ID <strong className='strong'>{data.id}</strong></h5>
         <div>
         <button type='button' onClick={handleDelete} className='btn-add-update'>Delete</button>
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
            <h5>Booking List</h5>
            <p>Ready to jump back in!</p>
           </div>
   <div className='booking-list-wrapper container mt-4'>
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

export default AdminBookingList
