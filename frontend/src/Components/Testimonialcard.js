import React, { useEffect, useRef } from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import { Modal } from 'antd'
import {MdAddComment} from 'react-icons/md'
import { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {BsCameraFill} from 'react-icons/bs';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Testimonialcard = () => {
  
    const [imgData , setImgData] = useState();

    const [baseImg , setBaseImg] = useState();
   
    const [open, setOpen] = useState(false);

    const update = ()=> toast.success('Review Added Succesfully !');

    const formerror = () => toast.error('Something Went Wrong !');
  
    const [data ,setData] = useState([]);

    const [record , setRecord] = useState([]);

    const defaultImg = './Images/defaultprofile.png';


    useEffect(()=>{
      Aos.init({duration : 2000});
   },[])
   
   const mytestimonial=()=>{
    return data.slice(-1);
  }

  const mytestimonialdata=()=>{
    return data.slice(-5, -1);
  }


   useEffect (()=>{
    axios.get(`${process.env.REACT_APP_HOST_URL}/testimonial/getAllTestimonial`)
    .then((response)=>{
   // console.log(response.data.testimonial);
     setData(response.data.testimonial);
    })
    .catch((error)=>{
     console.log(error);
     
    })
  
  },[])


   

  //  const handleImageChange = async (e) => {

  //   if(e.target.files){

  //   // console.log(e.target.files); 
  //   // setImgData(URL.createObjectURL(e.target.files[0])); 

  //   const file = e.target.files[0];
  //   const base64 = await convertBase64(file);
  //   console.log(base64);
  //   }
  //    else{
  //     console.log(defaultImg); 
  //     setBaseImg(defaultImg);
  //    }

  //  } 


const handleImg = async(e) =>{

  // if(e.target.files){
    //  console.log(e.target.files);
     setImgData(e.target.files[0]);
     const file = e.target.files[0];
    const base64 = await convertBase64(file);
    //console.log(base64);
    setBaseImg(base64);
    
// }
// else{
//   console.log(defaultImg); 
//   setImgData(URL.createObjectURL(defaultImg));
//  }
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

const handleSubmit=(event)=>{
     event.preventDefault();

const fullName = event.target.fullName.value;
const category = event.target.category.value;
const comment = event.target.comment.value;
// const testimonialImage = event.target.testimonialImage.files;

const formData = new FormData();
    formData.append("avatar", imgData);
    formData.append("fullName",  fullName);
    formData.append("category", category);
    formData.append("comment", comment);
    

    axios.post(`${process.env.REACT_APP_HOST_URL}/testimonial/addTestimonial`, formData )
    .then((res) => {
      console.log(res.data.testimonial);
      // window.location.reload();
      update(); 
      setBaseImg('');
    })
    .catch((err) => {
      console.log(err);
      formerror();
    });


     
    event.target.reset();
    
}


  return (
   <>
      <section className='about-testimonial-wrapper'>
         <div className='testimonial-inner-wrapper'>
            <div className='d-flex flex-column justify-content-center align-items-center' data-aos="fade-down">
            <p>Client Testimonial</p>
            <h5>Adventure Talks</h5>
            <button className='btn-add-comment' onClick={()=>{setOpen(true)}}><MdAddComment className='add-comment-icon'/></button>
           <Modal
            title="Plz Submit Your Review"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={580}
           >
             <form onSubmit={handleSubmit}>
             <div className='img-div'>      
              <img src={baseImg}/>
              <BsCameraFill className='testimonial-camera-icon'/>
              <input type="file" name='avatar' onChange={handleImg} value='' className='profile-file-img' /> 
             <h5>UPLOAD FILES</h5>
               </div>
              <div className='name-div'>
               <input className="form-control form-control-lg inputtext" type="text" placeholder="Name" name='fullName' aria-label=".form-control-lg example"></input>
               </div>
               <div className='role-div'>
               <input className="form-control form-control-lg inputtext" type="text" placeholder="Category" name='category' aria-label=".form-control-lg example"></input>
               </div>
                <div className='message-div'>
                <textarea placeholder='Comment' className='form-control form-control-lg msg-textarea' name='comment' aria-label=".form-control-lg example" ></textarea>
                </div>
                <button type='submit' className='btn-modal'>Submit</button>
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
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
  {mytestimonial().map((data,i)=>(
    <div className="carousel-item active" key={i}>
        <div className='testimonial-details-wrapper'>
        <img src={`${process.env.REACT_APP_HOST_URL}/avatar/`+data.avatar} alt="profile1"/>
        <q>{data.comment}</q>
        <h3>{data.fullName}</h3>
        <h6>{data.category}</h6>
        </div>
    </div>
    ))}
    {mytestimonialdata().map((data,i)=>(
   <div className="carousel-item" key={i}>
    <div className='testimonial-details-wrapper'>
    <img src={`${process.env.REACT_APP_HOST_URL}/avatar/`+data.avatar} alt="profile1"/>
        <q>{data.comment}</q>
        <h3>{data.fullName}</h3>
        <h6>{data.category}</h6>
      </div>
    </div>
))}
    {/* <div className="carousel-item">
    <div className='testimonial-details-wrapper'>
      <img src="./Images/profile2.jpg" alt="profile2"/>
      <q>Et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</q>
      <h3>Vera Ferminga</h3>
      <h6>Adventure Journalist</h6>
      </div>
    </div>
    <div className="carousel-item">
    <div className='testimonial-details-wrapper'>
      <img src="./Images/profile3.jpg" alt="profile3"/>
      <q>Risus commodo viverra maecenas accumsan lacus vel facilisis.</q>
      <h3>Vera Ferminga</h3>
      <h6>Adventure Journalist</h6>
      </div>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <HiOutlineArrowNarrowLeft className='carousel-btn-icon' aria-hidden="true"/>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <HiOutlineArrowNarrowRight className='carousel-btn-icon' aria-hidden="true"/>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
   </section>
   </>
  )
}

export default Testimonialcard
