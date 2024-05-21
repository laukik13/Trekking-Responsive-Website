import { Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import {BsCameraFill} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri';
import {MdAddCircleOutline} from 'react-icons/md'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AdminAddGallery = () => {

  const [people, setPeople] = useState(false);

  const [sightOpen, setSightOpen] = useState(false);

  const [trekOpen, setTrekOpen] = useState(false);

  const [natureOpen, setNatureOpen] = useState(false);

  const [ refugeOpen, setRefugeOpen] = useState(false);

  const [ otherOpen, setOtherOpen] = useState(false);

  const [peopleModel,setPeopleModel] = useState(false);

  const [sightModel, setSightModel] = useState(false);

  const [trekModel,setTrekModel] = useState(false);

  const [natureModel,setNatureModel] = useState(false);

  const [refugeModel,setRefugeModel] = useState(false);

  const [otherModel,setOtherModel] = useState(false);

  const [dataPeople, setDataPeople] = useState({});

  const [dataSight, setDataSight] = useState({});

  const [dataTrek, setDataTrek] = useState({});

  const [dataNature, setDataNature] = useState({});

  const [dataRefuge, setDataRefuge] = useState({});

  const [dataOther, setDataOther] = useState({});

  const [pict, setPict] = useState();

  const [baseImg , setBaseImg] = useState();

  const [dataSource, setDataSource] = useState([])

  const update = ()=> toast.success('Image Add Succesfully !');

  const formerror = () => toast.error('Something Went Wrong !');


  const peoples = [
    {
      key: '1',
      title: 'Image',
     render: (record)=>{
      return(
        <div className='gallery-table-img-wrapper'>
          <img src={`http://192.168.1.23:4000/gallery/`+ record.imgPeople}  alt="galleryImage"/>
        </div>
      )
     }
    },
    {
      key: '2',
      title: 'Action',
      render:(record)=>{
       return <>
         <div className='d-flex gap-5'>
         <button className='btn-add-comment' onClick={()=>(setPeopleModel(true),setDataPeople(record))}><RiDeleteBin6Line className='trekdiv-deletelogo'/></button>
         <Modal
          title="Confirm Deletion"
          centered
          open={peopleModel}
          onOk={() =>setPeopleModel(false)}
          onCancel={() => setPeopleModel(false)}
          width={500}
         >
         <div>
         <h5>Are you sure you want to delete Id <strong className='strong'>{dataPeople._id}</strong> </h5>
         <div>
         <button type='button' onClick={handlePeopleDelete} className='btn-add-update'>Delete</button>
         </div>
         </div>
         </Modal>
          </div>
       </>
      }
      }
  ]

  const handleImg = async(e) =>{
    //   console.log(e.target.files);
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

  useEffect (()=>{
  
    axios.get(`${process.env.REACT_APP_HOST_URL}/gallery/getAllPeople`)
    .then((response)=>{
     // console.log(response.data);
     setDataSource(response.data.people);
    })
    .catch((error)=>{
     console.log(error);
    })
  
  },[])



const handlePeople =(event)=>{
  event.preventDefault();
  const formData = new FormData();
  formData.append("imgPeople", pict);

  axios.post(`${process.env.REACT_APP_HOST_URL}/gallery/addPeople`, formData)
  .then((res) => {
   // console.log(res.data);
    update();
    setTimeout(() => {
      window.location.reload();
    }, 2000)
    setBaseImg('');
  })
  .catch((err) => {
    console.log(err);
    formerror();
  });
}


const handlePeopleDelete =(event)=>{
  event.preventDefault();
    axios.delete(`${process.env.REACT_APP_HOST_URL}/gallery/deleteImagePeople/`+ dataPeople._id)
    .then((response)=>{
    // console.log(response.data);
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


  const [sightimg, setSightimg] = useState();


  const [sight, setSight] = useState([])


  const sights = [
    {
      key: '1',
      title: 'Image',
     render: (record)=>{
      return(
        <div className='gallery-table-img-wrapper'>
          <img src={`${process.env.REACT_APP_HOST_URL}/gallery/`+ record.imgSight}  alt="galleryImage"/>
        </div>
      )
     }
    },
    {
      key: '2',
      title: 'Action',
      render:(record)=>{
       return <>
         <div className='d-flex gap-5'>
         <button className='btn-add-comment' onClick={()=>(setSightModel(true),setDataSight(record))}><RiDeleteBin6Line className='trekdiv-deletelogo'/></button>
         <Modal
          title="Confirm Deletion"
          centered
          open={sightModel}
          onOk={() => setSightModel(false)}
          onCancel={() => setSightModel(false)}
          width={500}
         >
         <div>
         <h5>Are you sure you want to delete Id <strong className='strong'>{dataSight._id}</strong> </h5>
         <div>
         <button type='button' onClick={handleSightDelete} className='btn-add-update'>Delete</button>
         </div>
         </div>
         </Modal>
          </div>
       </>
      }
      }
  ]

  const handleSightimg = async(e) =>{
   //    console.log(e.target.files);
       setSightimg((e.target.files[0]));
       const file = e.target.files[0];
       const base64 = await convertBase64(file);
       //console.log(base64);
       setBaseImg(base64);
  }

  useEffect (()=>{
  
    axios.get(`${process.env.REACT_APP_HOST_URL}/gallery/getAllSight`)
    .then((response)=>{
    // console.log(response.data);
     setSight(response.data.sight);
    })
    .catch((error)=>{
     console.log(error);
    })
  
  },[])

  const handleSight =()=>{
    const formData = new FormData();
    formData.append("imgSight", sightimg);
  
    axios.post(`${process.env.REACT_APP_HOST_URL}/gallery/addSight`, formData)
    .then((res) => {
     // console.log(res.data);
      // window.location.reload();
      update();
      setTimeout(() => {
        window.location.reload();
      }, 2000)
      setBaseImg('');
    })
    .catch((err) => {
      console.log(err);
      formerror();
    });
  }

  const handleSightDelete =(event)=>{
    event.preventDefault();
      axios.delete(`${process.env.REACT_APP_HOST_URL}/gallery/deleteImageSight/`+ dataSight._id)
      .then((response)=>{
     //  console.log(response.data);
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



  const [trekimg, setTrekimg] = useState();

  const [trek, setTrek] = useState([])

  const treks = [
    {
      key: '1',
      title: 'Image',
     render: (record)=>{
      return(
        <div className='gallery-table-img-wrapper'>
          <img src={`http://192.168.1.23:4000/gallery/`+ record.imgTrek}  alt="galleryImage"/>
        </div>
      )
     }
    },
    {
      key: '2',
      title: 'Action',
      render:(record)=>{
       return <>
         <div className='d-flex gap-5'>
         <button className='btn-add-comment' onClick={()=>(setTrekModel(true),setDataTrek(record))}><RiDeleteBin6Line className='trekdiv-deletelogo'/></button>
         <Modal
          title="Confirm Deletion"
          centered
          open={trekModel}
          onOk={() => setTrekModel(false)}
          onCancel={() => setTrekModel(false)}
          width={500}
         >
         <div>
         <h5>Are you sure you want to delete Id <strong className='strong'>{dataTrek._id}</strong> </h5>
         <div>
         <button type='button' onClick={handleTrekDelete} className='btn-add-update'>Delete</button>
         </div>
         </div>
         </Modal>
          </div>
       </>
      }
      }
  ]


  const handleTrekimg = async(e) =>{
    //   console.log(e.target.files);
       setTrekimg((e.target.files[0]));
       const file = e.target.files[0];
       const base64 = await convertBase64(file);
       //console.log(base64);
       setBaseImg(base64);
  }

  useEffect (()=>{
  
    axios.get(`${process.env.REACT_APP_HOST_URL}/gallery/getAllTrek`)
    .then((response)=>{
    // console.log(response.data);
     setTrek(response.data.trek);
    })
    .catch((error)=>{
     console.log(error);
    
    })
  
  },[])

  const handleTrek =()=>{
    const formData = new FormData();
  formData.append("imgTrek", trekimg);

  axios.post(`${process.env.REACT_APP_HOST_URL}/gallery/addTrek`, formData)
  .then((res) => {
 //   console.log(res.data);
    // window.location.reload();
    update();
    setTimeout(() => {
      window.location.reload();
    }, 2000)
    setBaseImg('');
  })
  .catch((err) => {
    console.log(err);
    formerror();
  });
  }

  const handleTrekDelete =(event)=>{
    event.preventDefault();
      axios.delete(`${process.env.REACT_APP_HOST_URL}/gallery/deleteImageTrek/`+ dataTrek._id)
      .then((response)=>{
     //  console.log(response.data);
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


  const [natureimg, setNatureimg] = useState();

  const [nature, setNature] = useState([ ])

  const natures = [
    {
      key: '1',
      title: 'Image',
     render: (record)=>{
      return(
        <div className='gallery-table-img-wrapper'>
          <img src={`${process.env.REACT_APP_HOST_URL}/gallery/`+ record.imgNature}  alt="galleryImage"/>
        </div>
      )
     }
    },
    {
      key: '2',
      title: 'Action',
      render:(record)=>{
       return <>
         <div className='d-flex gap-5'>
         <button className='btn-add-comment' onClick={()=>(setNatureModel(true),setDataNature(record))}><RiDeleteBin6Line className='trekdiv-deletelogo'/></button>
         <Modal
          title="Confirm Deletion"
          centered
          open={natureModel}
          onOk={() => setNatureModel(false)}
          onCancel={() => setNatureModel(false)}
          width={500}
         >
         <div>
         <h5>Are you sure you want to delete Id <strong className='strong'>{dataNature._id}</strong> </h5>
         <div>
         <button type='button' onClick={handleNatureDelete} className='btn-add-update'>Delete</button>
         </div>
         </div>
         </Modal>
          </div>
       </>
      }
      }
  ]


  const handleNatureimg = async(e) =>{
 //      console.log(e.target.files);
       setNatureimg((e.target.files[0]));
       const file = e.target.files[0];
       const base64 = await convertBase64(file);
       //console.log(base64);
       setBaseImg(base64);
  }


  useEffect (()=>{
  
    axios.get(`${process.env.REACT_APP_HOST_URL}/gallery/getAllNature`)
    .then((response)=>{
 //    console.log(response.data);
     setNature(response.data.nature);
    })
    .catch((error)=>{
     console.log(error);
     
    })
  
  },[])

  const handleNature =()=>{
    const formData = new FormData();
  formData.append("imgNature", natureimg);

  axios.post(`${process.env.REACT_APP_HOST_URL}/gallery/addNature`, formData)
  .then((res) => {
   // console.log(res.data);
    // window.location.reload();
    update();
    setTimeout(() => {
      window.location.reload();
    }, 2000)
    setBaseImg('');
  })
  .catch((err) => {
    console.log(err);
    formerror();
  });
  }


  const handleNatureDelete =(event)=>{
    event.preventDefault();
      axios.delete(`${process.env.REACT_APP_HOST_URL}/gallery/deleteImageNature/`+ dataNature._id)
      .then((response)=>{
  //     console.log(response.data);
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


  const [refugeimg, setRefugeimg] = useState();

  const [ refuge, setRefuge] = useState([])

  const refuges = [
    {
      key: '1',
      title: 'Image',
     render: (record)=>{
      return(
        <div className='gallery-table-img-wrapper'>
          <img src={`http://192.168.1.23:4000/gallery/`+ record.imgRefuge}  alt="galleryImage"/>
        </div>
      )
     }
    },
    {
      key: '2',
      title: 'Action',
      render:(record)=>{
       return <>
         <div className='d-flex gap-5'>
         <button className='btn-add-comment' onClick={()=>(setRefugeModel(true),setDataRefuge(record))}><RiDeleteBin6Line className='trekdiv-deletelogo'/></button>
         <Modal
          title="Confirm Deletion"
          centered
          open={refugeModel}
          onOk={() => setRefugeModel(false)}
          onCancel={() => setRefugeModel(false)}
          width={500}
         >
         <div>
         <h5>Are you sure you want to delete Id <strong className='strong'>{dataRefuge._id}</strong> </h5>
         <div>
         <button type='button' onClick={handleRefugeDelete} className='btn-add-update'>Delete</button>
         </div>
         </div>
         </Modal>
          </div>
       </>
      }
      }
  ]


  const handleRefugeimg = async(e) =>{
  //     console.log(e.target.files);
       setRefugeimg((e.target.files[0]));
       const file = e.target.files[0];
       const base64 = await convertBase64(file);
       //console.log(base64);
       setBaseImg(base64);
  }

  useEffect (()=>{
  
    axios.get(`${process.env.REACT_APP_HOST_URL}/gallery/getAllRefuge`)
    .then((response)=>{
   //  console.log(response.data);
     setRefuge(response.data.refuge);
    })
    .catch((error)=>{
     console.log(error);
     
    })
  
  },[])

  const handleRefuge =()=>{
    const formData = new FormData();
  formData.append("imgRefuge", refugeimg);

  axios.post(`${process.env.REACT_APP_HOST_URL}/gallery/addRefuge`, formData)
  .then((res) => {
 //   console.log(res.data);
    // window.location.reload();
    update();
    setTimeout(() => {
      window.location.reload();
    }, 2000)
    setBaseImg('');
  })
  .catch((err) => {
    console.log(err);
    formerror();
  });
  }

  const handleRefugeDelete =(event)=>{
    event.preventDefault();
      axios.delete(`${process.env.REACT_APP_HOST_URL}/gallery/deleteImageRefuge/`+ dataRefuge._id)
      .then((response)=>{
    //   console.log(response.data);
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


  const [otherimg, setOtherimg] = useState();

  const [ other, setOther] = useState([])

  const others = [
    {
      key: '1',
      title: 'Image',
     render: (record)=>{
      return(
        <div className='gallery-table-img-wrapper'>
          <img src={`http://192.168.1.23:4000/gallery/`+ record.imgOther}  alt="galleryImage"/>
        </div>
      )
     }
    },
    {
      key: '2',
      title: 'Action',
      render:(record)=>{
       return <>
         <div className='d-flex gap-5'>
         <button className='btn-add-comment' onClick={()=>(setOtherModel(true),setDataOther(record))}><RiDeleteBin6Line className='trekdiv-deletelogo'/></button>
         <Modal
          title="Confirm Deletion"
          centered
          open={otherModel}
          onOk={() => setOtherModel(false)}
          onCancel={() => setOtherModel(false)}
          width={500}
         >
         <div>
         <h5>Are you sure you want to delete Id <strong className='strong'>{dataOther._id}</strong> </h5>
         <div>
         <button type='button' onClick={handleOtherDelete} className='btn-add-update'>Delete</button>
         </div>
         </div>
         </Modal>
          </div>
       </>
      }
      }
  ]

  const handleOtherimg = async(e) =>{
       console.log(e.target.files);
       setOtherimg((e.target.files[0]));
       const file = e.target.files[0];
       const base64 = await convertBase64(file);
       //console.log(base64);
       setBaseImg(base64);

  }

  useEffect (()=>{
  
    axios.get(`${process.env.REACT_APP_HOST_URL}/gallery/getAllOther`)
    .then((response)=>{
   //  console.log(response.data);
     setOther(response.data.other);
    })
    .catch((error)=>{
     console.log(error);
     
    })
  
  },[])

  const handleOther =()=>{
    const formData = new FormData();
    formData.append("imgOther", otherimg);
  
    axios.post(`${process.env.REACT_APP_HOST_URL}/gallery/addOther`, formData)
    .then((res) => {
   //   console.log(res.data);
      // window.location.reload();
      update();
      setTimeout(() => {
        window.location.reload();
      }, 2000)
      setBaseImg('');
    })
    .catch((err) => {
      console.log(err);
      formerror();
    });
  }

  const handleOtherDelete =(event)=>{
    event.preventDefault();
      axios.delete(`${process.env.REACT_APP_HOST_URL}/gallery/deleteImageOther/`+ dataOther._id)
      .then((response)=>{
      // console.log(response.data);
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

//vedio



const [data, setData] = useState([]);

const [video ,setVideo] = useState([]);

const [modal, setModal] = useState(false);

useEffect (()=>{
  
  axios.get(`${process.env.REACT_APP_HOST_URL}/video//getAllVideo`)
  .then((response)=>{
  // console.log(response.data);
   setData(response.data.video);
   setTimeout(() => {
    window.location.reload();
  }, 2000)
  })
  .catch((error)=>{
   console.log(error);
  })

},[])



const handleVideoSubmit =(event)=>{
  event.preventDefault();
  
    const videoLink = event.target.videoLink.value;
  
    axios.post(`${process.env.REACT_APP_HOST_URL}/video/addVideo`,{
      videoLink
    })
    .then((res)=>{
      console.log(res.data.video);
      toast.success('Video Link Add Succesfully !');
    })
    .catch((err)=>{
      console.log(err);
      formerror();
    })
  
  }


const handleVedioDelete =(event)=>{
  event.preventDefault();
    axios.delete(`${process.env.REACT_APP_HOST_URL}/video/deleteVideo/`+video._id)
    .then((response)=>{
    //  console.log(response.data);
     toast.success('Video Delete Succesfully !');
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
    title: 'Vedio Links',
    dataIndex: 'videoLink'
  },
  {
    key: '2',
    title: 'Action',
    render:(record)=>{
     return <>
       <div className='d-flex gap-5'>
       <button className='btn-add-comment' onClick={()=>(setModal(true),setVideo(record))}><RiDeleteBin6Line className='trekdiv-deletelogo'/></button>
       <Modal
        title="Confirm Deletion"
        centered
        open={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
        width={500}
       >
       <div>
       <h5>Are you sure you want to delete ID: <strong className='strong'>{video._id}</strong> </h5>
       <div>
       <button type='submit' onClick={handleVedioDelete} className='btn-add-update'>Delete</button>
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
            <h5>Add Gallery</h5>
            <p>Ready to jump back in!</p>
           </div>
           <div className='gallery-img-wrapper container mt-4'>
           <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <h3>People Images</h3>
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                          <div className='add-btn-wrapper mb-3'>
                          <button className='btn-add' onClick={()=>{setPeople(true)}}><MdAddCircleOutline className='add-icon'/></button>
                          <Modal
                              title="Add Your Image*"
                              centered
                              open={people}
                              onOk={() => setPeople(false)}
                              onCancel={() => setPeople(false)}
                              width={580}
                            >
                              <form onSubmit={handlePeople}>
                              <div className='gallery-btn'>
                                <input type='file' value='' onChange={handleImg} name='imgPeople' className='inputffile' id='1' />  
                                  
                                <div className='addtrek-img-wrapper'>
                                <BsCameraFill className='camera-icon'/>
                                <img src={baseImg} className='pictImgg' /> 
                                <h5>UPLOAD FILES</h5>
                                </div>
                                </div>
                                  <button type='submit' className='btn-add-submit'>Submit</button>
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
                          </div>
                          <Table
                            columns={peoples}
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
                      </div>
                      </div>
           </div>
           <div className='gallery-img-wrapper container '>
           <div className="accordion" >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                          <h3>Sight Images</h3>
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <div className='add-btn-wrapper mb-3'>
                          <button className='btn-add' onClick={()=>{setSightOpen(true)}}><MdAddCircleOutline className='add-icon'/></button>
                          <Modal
                              title="Add Your Image*"
                              centered
                              open={sightOpen}
                              onOk={() => setSightOpen(false)}
                              onCancel={() => setSightOpen(false)}
                              width={580}
                            >
                              <form onSubmit={handleSight}>
                              <div className='gallery-btn'>
                                <input type='file' value='' onChange={handleSightimg} className='inputffile' id='2' />  
                                  
                                <div className='addtrek-img-wrapper'>
                                <BsCameraFill className='camera-icon'/>
                                <img src={baseImg} name='imgSight' className='pictImgg' /> 
                                <h5>UPLOAD FILES</h5>
                                </div>
                                </div>
                                  <button type='submit' className='btn-add-submit'>Submit</button>
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
                          </div>
                          <Table
                            columns={sights}
                            dataSource={sight}
                            pagination={
                              {
                                pageSize:5
                              }
                            }
                            >
                          </Table>
                          </div>
                        </div>
                      </div>
                      </div>
           </div>
           <div className='gallery-img-wrapper container '>
           <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                          <h3>Trek Images</h3>
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <div className='add-btn-wrapper mb-3'>
                          <button className='btn-add' onClick={()=>{setTrekOpen(true)}}><MdAddCircleOutline className='add-icon'/></button>
                          <Modal
                              title="Add Your Image*"
                              centered
                              open={trekOpen}
                              onOk={() => setTrekOpen(false)}
                              onCancel={() => setTrekOpen(false)}
                              width={580}
                            >
                              <form onSubmit={handleTrek}>
                              <div className='gallery-btn'>
                                <input type='file' value='' onChange={handleTrekimg} name='imgTrek' className='inputffile' />  
                                  
                                <div className='addtrek-img-wrapper'>
                                <BsCameraFill className='camera-icon'/>
                                <img src={baseImg} className='pictImgg' /> 
                                <h5>UPLOAD FILES</h5>
                                </div>
                                </div>
                                  <button type='submit' className='btn-add-submit'>Submit</button>
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
                          </div>
                          <Table
                            columns={treks}
                            dataSource={trek}
                            pagination={
                              {
                                pageSize:5
                              }
                            }
                            >
                          </Table>
                          </div>
                        </div>
                      </div>
                      </div>
           </div>
           <div className='gallery-img-wrapper container '>
           <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                          <h3>Nature Images</h3>
                          </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <div className='add-btn-wrapper mb-3'>
                          <button className='btn-add' onClick={()=>{setNatureOpen(true)}}><MdAddCircleOutline className='add-icon'/></button>
                          <Modal
                              title="Add Your Image*"
                              centered
                              open={natureOpen}
                              onOk={() =>  setNatureOpen(false)}
                              onCancel={() => setNatureOpen(false)}
                              width={580}
                            >
                              <form onSubmit={handleNature}>
                              <div className='gallery-btn'>
                                <input type='file' value='' onChange={handleNatureimg} name='imgNature' className='inputffile' />  
                                  
                                <div className='addtrek-img-wrapper'>
                                <BsCameraFill className='camera-icon'/>
                                <img src={baseImg} className='pictImgg' /> 
                                <h5>UPLOAD FILES</h5>
                                </div>
                                </div>
                                  <button type='submit' className='btn-add-submit'>Submit</button>
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
                          </div>
                          <Table
                            columns={natures}
                            dataSource={nature}
                            pagination={
                              {
                                pageSize:5
                              }
                            }
                            >
                          </Table>
                          </div>
                        </div>
                      </div>
                      </div>
           </div>
           <div className='gallery-img-wrapper container '>
           <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                          <h3>Refuge Images</h3>
                          </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <div className='add-btn-wrapper mb-3'>
                          <button className='btn-add' onClick={()=>{setRefugeOpen(true)}}><MdAddCircleOutline className='add-icon'/></button>
                          <Modal
                              title="Add Your Image*"
                              centered
                              open={refugeOpen}
                              onOk={() => setRefugeOpen(false)}
                              onCancel={() => setRefugeOpen(false)}
                              width={580}
                            >
                              <form onSubmit={handleRefuge}>
                              <div className='gallery-btn'>
                                <input type='file' value='' onChange={handleRefugeimg} name='imgRefuge' className='inputffile' />  
                                  
                                <div className='addtrek-img-wrapper'>
                                <BsCameraFill className='camera-icon'/>
                                <img src={baseImg} className='pictImgg' /> 
                                <h5>UPLOAD FILES</h5>
                                </div>
                                </div>
                                  <button type='submit' className='btn-add-submit'>Submit</button>
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
                          </div>
                          <Table
                            columns={refuges}
                            dataSource={refuge}
                            pagination={
                              {
                                pageSize:5
                              }
                            }
                            >
                          </Table>
                          </div>
                        </div>
                      </div>
                      </div>
           </div>
           <div className='gallery-img-wrapper container '>
           <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                          <h3>Other Images</h3>
                          </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <div className='add-btn-wrapper mb-3'>
                          <button className='btn-add' onClick={()=>{ setOtherOpen(true)}}><MdAddCircleOutline className='add-icon'/></button>
                          <Modal
                              title="Add Your Image*"
                              centered
                              open={otherOpen}
                              onOk={() =>  setOtherOpen(false)}
                              onCancel={() =>  setOtherOpen(false)}
                              width={580}
                            >
                              <form onSubmit={handleOther}>
                              <div className='gallery-btn'>
                                <input type='file' value='' onChange={handleOtherimg} name='imgOther' className='inputffile' />  
                                  
                                <div className='addtrek-img-wrapper'>
                                <BsCameraFill className='camera-icon'/>
                                <img src={baseImg} className='pictImgg' /> 
                                <h5>UPLOAD FILES</h5>
                                </div>
                                </div>
                                  <button type='submit' className='btn-add-submit'>Submit</button>
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
                          </div>
                          <Table
                            columns={others}
                            dataSource={other}
                            pagination={
                              {
                                pageSize:5
                              }
                            }
                            >
                          </Table>
                          </div>
                        </div>
                      </div>
                      </div>
           </div>
           <div className='gallery-img-wrapper container '>
           <h3>Vedio</h3>
           <form onSubmit={handleVideoSubmit}>
           <div className='nname-div mb-3 mt-3'>
           <input className="form-control form-control-lg addinputtext" type="text" placeholder="Vedio link" name='videoLink' aria-label=".form-control-lg example"/>
           <div>
           <button type="submit" className="btn-join">Submit</button>
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
           </form>
           </div>
           <div className='gallery-img-wrapper container mt-4 mb-4'>

            <Table
            columns={columns}
            dataSource={data}
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

export default AdminAddGallery
