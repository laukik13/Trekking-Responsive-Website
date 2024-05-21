import { Modal, Table } from 'antd';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { BiSolidEdit} from 'react-icons/bi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {BsCameraFill} from 'react-icons/bs';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminTestimonialList = () => {

  const [open, setOpen] = useState(false);

  const [data, setData] = useState({});

  const [modal, setModal] = useState(false);

  const [imgData , setImgData] = useState();

  const [baseImg , setBaseImg] = useState();

  const [dataSource, setDataSource] = useState([])

  const update = ()=> toast.success('Data Update Succesfully !');

  const formerror = () => toast.error('Something Went Wrong !');


 const handleImageChange = async(e) => {
  console.log(e.target.files); 
  setImgData((e.target.files[0]));   
  const file = e.target.files[0];
  const base64 = await convertBase64(file);
  //console.log(base64);
  setBaseImg(base64);
 } 

 const convertBase64 =(file)=>{

  return new Promise((resolve,reject)=>{
       const fileReader =new FileReader();
       fileReader.readAsDataURL(file);

       fileReader.onload=()=>{
        resolve(fileReader.result);
       }

       fileReader.onerror=(error)=>{
        reject(error);
       }
  })

}

 let img = data.avatar;
//  console.log(data.avatar);
 let result = `${process.env.REACT_APP_HOST_URL}/avatar/` + img;


 const handleInput = (e) => {

  setData({ ...data, [e.target.name]: e.target.value });
};


 useEffect (()=>{
  
  axios.get(`${process.env.REACT_APP_HOST_URL}/testimonial/getAllTestimonial`)
  .then((response)=>{
   console.log(response.data);
   setDataSource(response.data.testimonial);
  })
  .catch((error)=>{
   console.log(error);
  })

},[])


const handleUpdate = (event)=>{
  event.preventDefault();

  const formData = new FormData();

  formData.append("avatar", imgData);
  formData.append("fullName", data.fullName);
  formData.append("category", data.category);
  formData.append("comment", data.comment);
 
    axios.put(`${process.env.REACT_APP_HOST_URL}/testimonial/updateTestimonial/`+data._id, formData)
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
    axios.delete(`${process.env.REACT_APP_HOST_URL}/testimonial/deleteTestimonial/`+ data._id)
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
      title: 'Image',
      render:(record)=>{
        return (        
          <div className='testimonial-imgg'>
          <img src={`${process.env.REACT_APP_HOST_URL}/avatar/`+record.avatar} alt="imgg"/>
          </div>
        )
       
      }
    },
    {
      key: '2',
      title: 'Full Name',
      dataIndex: 'fullName'
    },
    {
      key: '3',
      title: 'Category',
      dataIndex:'category'
    },
    {
      key: '4',
      title: 'Comments',
      dataIndex:'comment'
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
                               <div className='img-div'>      
                                <img src={baseImg || result} alt='profile.jpg'/>
                                <BsCameraFill className='testimonial-camera-icon'/>
                              <input type="file" name='Images' onChange={handleImageChange} className='profile-file-img'/>
                              <h5>UPLOAD FILES</h5>
                                </div>
                                <div className='nname-div mb-3'>
                                    <input className="form-control form-control-lg addinputtext" type="text" placeholder="Full Name" name='fullName' defaultValue={data.fullName} onChange={(e) => handleInput(e)} aria-label=".form-control-lg example"/>
                                </div>
                      
                              <div className='nname-div mb-3'>
                              <input className="form-control form-control-lg addinputtext" type="text" placeholder="Category" name='category' defaultValue={data.category} onChange={(e) => handleInput(e)} aria-label=".form-control-lg example"/>
                              </div>
                
                              <div className='mmessage-div'>
                                    <textarea placeholder='Address' className='form-control form-control-lg mmsg-textarea' name='comment' defaultValue={data.comment} onChange={(e) => handleInput(e)} aria-label=".form-control-lg example" />
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
         <h5>Are you sure you want to delete ID: <strong className='strong'>{data._id}</strong> </h5>
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
            <h5>Testimonial List</h5>
            <p>Ready to jump back in!</p>
           </div>
   <div className='testimonial-list-wrapper container mt-4 mb-4'>

            <Table
            columns={columns}
            dataSource={dataSource}
            pagination={
              {
                pageSize:5
              }
            }
            >
            </Table>
        </div>
   </div>
   </>
  )
}

export default AdminTestimonialList
