import React, { useEffect, useState } from 'react'
import { BiSolidEdit} from 'react-icons/bi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {MdLocationPin} from 'react-icons/md';
import { Modal, Table } from 'antd';
import {BsCameraFill} from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const AdminTrekList = () => {

  const [open, setOpen] = useState(false);

  const [modal, setModal] = useState(false);

  const [data, setData] = useState({});

  const [dataSource, setDataSource] = useState([]);

  const [baseImg , setBaseImg] = useState();

  const [pict, setPict] = useState();

  const update = ()=> toast.success('Data Update Succesfully !');

  const formerror = () => toast.error('Something Went Wrong !');


  let img = data.trekImg;
  //  console.log(data.avatar);
   let result = `${process.env.REACT_APP_HOST_URL}/trek/` + img;


  const handleImg = async(e) =>{
       console.log(e.target.files);
       setPict((e.target.files[0]));
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

  const handleInput = (e)=>{
    setData({...data,[e.target.name]: e.target.value})
  }


  useEffect (()=>{
    axios.get(`${process.env.REACT_APP_HOST_URL}/trek/getAllTrek`)
    .then((response)=>{
     console.log(response.data.trek);
     setDataSource(response.data.trek);
    })
    .catch((error)=>{
     console.log(error);

    })
  
  },[])



  const handleUpdate = (event)=>{
    event.preventDefault();
  
    const formData = new FormData();
  
    formData.append("trekImg", pict);
    formData.append("title",   data.title);
    formData.append("location", data.location);
    formData.append("difficulty", data.difficulty);
    formData.append("price", data.price);
    formData.append("descp",   data.descp);
    formData.append("days", data.days);
    formData.append("size", data.size);
    formData.append("date", data.date);
   
      axios.put(`${process.env.REACT_APP_HOST_URL}/trek/updateTrek/`+data._id, formData)
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
      axios.delete(`${process.env.REACT_APP_HOST_URL}/trek/deleteTrek/`+ data._id)
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
      title: 'Treks',
      render:(record)=>{
        return(     
                     <div className='trekdiv-main'>
                         <div className='trekdiv-imgg'>
                            <img src={`${process.env.REACT_APP_HOST_URL}/trek/`+record.trekImg}  alt="imgg"/>
                         </div>
                         <div className='trekdiv-text'>
                           <h3>{record.title}</h3>
                           <div className='trekdiv-text-locdiv'>
                            < MdLocationPin className='trekdiv-text-loclogo'/>
                           <h6 className='trekdiv-text-locat' >{record.location}</h6>
                           </div>
                            <p>{record.descp}</p>
                           
                            <h2>{record.price}/-</h2>
                         </div>
                     </div>
        )
      }
    },
    {
      title: "Date/Days/GroupSize/Difficulty",
      render: (record) => (
        <React.Fragment>
          {record.date}
          <br />
          {record.days}
          <br/>
          {record.size}
          <br />
          {record.difficulty}
        </React.Fragment>
      ),
      responsive: ["xs"]
    },
    {
      key: '2',
      title: 'Date',
      dataIndex: 'date',
      responsive: ["sm"]
    },

    {
      key: '3',
      title: 'Days',
      dataIndex: 'days',
      responsive: ["sm"]
    },
    {
      key: '4',
      title: 'Group Size',
      dataIndex:'size',
      responsive: ["sm"]
    },
    {
      key: '5',
      title: 'Difficulty',
      dataIndex:'difficulty',
      responsive: ["sm"]
    },
    {
      key: '6',
      title: 'Action',
      render:(record)=>{
       return <>
         <div className='d-flex gap-5'>
         <button className='btn-add-comment' onClick={()=>(setOpen(true),setData(record))}><BiSolidEdit className='trekdiv-editlogo'/></button>
         <Modal
            title="Plz Update Your Trek"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={800}
           >
                               <form onSubmit={handleUpdate}>
                               <div className='modal-img-wrapper'>
                                <input type='file' onChange={handleImg} className='inputffile' />  
                                  
                                <div className='addtrek-img-wrapper'>
                                <BsCameraFill className='camera-icon'/>
                                <img src={ baseImg || result} alt='profile.jpg' name='trekImg' className='pictImgg' /> 
                                <h5>UPLOAD FILES</h5>
                                </div>
                                </div>
                                <div className='nname-div mb-3'>
                                    <input className="form-control form-control-lg addinputtext" type="text" placeholder="Trek Name" defaultValue={data.title}  name='title' onChange={(e) => handleInput(e)}  aria-label=".form-control-lg example"/>
                                    <input className="form-control form-control-lg addinputtext" type="text" placeholder="Location" defaultValue={data.location}  name='location' onChange={(e) => handleInput(e)}  aria-label=".form-control-lg example"/>
                              </div>
                      
                              <div className='nname-div mb-3'>

                              <select className="form-select form-select-lg  addinputtext" name='difficulty'  onChange={(e) => handleInput(e)} aria-label=".form-select-lg example">
                                  <option defaultValue>{data.difficulty}</option>
                                  <option value="Easy">Easy</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Hard">Hard</option>
                              </select>

                                    <input className="form-control form-control-lg addinputtext" type="text" placeholder="Price" defaultValue={data.price}  name='price' onChange={(e) => handleInput(e)}  aria-label=".form-control-lg example"/>
                              </div>
                          
                              <div className='mmessage-div'>
                                      <textarea placeholder='Description' className='form-control form-control-lg mmsg-textarea' defaultValue={data.descp} name='descp' onChange={(e) => handleInput(e)}  aria-label=".form-control-lg example" />
                              </div>
                              <div className='nname-div'>
                              <input className="form-control form-control-lg addinputtext" type="number" placeholder="Days" defaultValue={data.days}  name='days' onChange={(e) => handleInput(e)} aria-label=".form-control-lg example"/>
                                    
                              <input className="form-control form-control-lg addinputtext" type="number" placeholder="Group Size" defaultValue={data.size} name='size' onChange={(e) => handleInput(e)}  aria-label=".form-control-lg example"/>                                   

                              <input className="form-control form-control-lg addinputtext" type="date" placeholder="Date" defaultValue={data.date} name='date' onChange={(e) => handleInput(e)}  aria-label=".form-control-lg example"/>

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
         <h5>Are you sure you want to delete trek <strong className='strong'>{data.title}</strong> </h5>
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
            <h5>Trek List</h5>
            <p>Ready to jump back in!</p>
           </div>
   <div className='treklistdiv container mt-4 mb-4'>

            <Table
            columns={columns}
            dataSource={dataSource}
            pagination={
              {
                pageSize:3
              }
            }
            >
            </Table>
        </div>
   </div>
   </>
  )
}

export default AdminTrekList
