import axios from 'axios';
import React, { useState } from 'react'
import {BsCameraFill} from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminNewTrek = () => {

  const [pict, setPict] = useState();

  const [baseImg , setBaseImg] = useState();

  const defaultImg = './Images/defaultbanner.png';

  const submit = () => toast.success('Data Submit Succesfully !');

  const formerror = () => toast.error('Something Went Wrong !');


  const handleImg = async(e) =>{

    // if(e.target.files){
       console.log(e.target.files);
       setPict((e.target.files[0]));
       const file = e.target.files[0];
       const base64 = await convertBase64(file);
       //console.log(base64);
       setBaseImg(base64);
  // }
  // else{
  //   console.log(defaultImg); 
  //   setPict((defaultImg));
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

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const title = event.target.title.value;
    const location = event.target.location.value;
    const difficulty = event.target.difficulty.value;
    const price = event.target.price.value;
    const descp = event.target.descp.value;
    const days = event.target.days.value;
    const size = event.target.size.value;
    const date = event.target.date.value;

    const formData = new FormData();
    formData.append("trekImg", pict);
    formData.append("title",   title);
    formData.append("location", location);
    formData.append("difficulty", difficulty);
    formData.append("price", price);
    formData.append("descp",   descp);
    formData.append("days", days);
    formData.append("size", size);
    formData.append("date", date);
    
  
    axios.post(`${process.env.REACT_APP_HOST_URL}/trek/addTrek`,formData)
    .then(response =>{
       console.log(response.data);
       submit();
       setBaseImg('');
    })
    .catch(error => {
       console.log(error);
       formerror();
    })
    
    event.target.reset();
    }


  return (
   <>
       <div className='admin-main-wrapper'>
       <div className='admintrek-head-wrapper'>
            <h5>Add New Trek</h5>
            <p>Ready to jump back in!</p>
           </div>
        <form className='addtrek-form-wrapper' onSubmit={handleSubmit}>
        <div className="container p-4 my-4 detaildiv">
         <div className='mb-3'>
         <h3>Trek Information</h3>
         </div>
                    
         <div className='nname-div mb-3'>
               <input className="form-control form-control-lg addinputtext" type="text" placeholder="Trek Name" name='title' aria-label=".form-control-lg example"/>
               <input className="form-control form-control-lg addinputtext" type="text" placeholder="Location" name='location' aria-label=".form-control-lg example"/>
         </div>
 
         <div className='nname-div mb-3'>

         <select className="form-select form-select-lg  addinputtext" name='difficulty' aria-label=".form-select-lg example">
                  <option defaultValue>Difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
               </select>

               <input className="form-control form-control-lg addinputtext" type="number" placeholder="Price" name='price' aria-label=".form-control-lg example"/>
         </div>
     
         <div className='mmessage-div'>
                <textarea placeholder='Description ' className='form-control form-control-lg mmsg-textarea' name='descp' aria-label=".form-control-lg example" />
         </div>
        </div>
        <div className='container p-4 my-4 groupdiv '>
          <div className='mb-3'>
          <h3>Additional</h3>
          </div>
            <div className='nname-div'>
               <input className="form-control form-control-lg addinputtext" type="number" placeholder="Days" name='days' aria-label=".form-control-lg example"/>
                    
               <input className="form-control form-control-lg addinputtext" type="number" placeholder="Group Size" name='size' aria-label=".form-control-lg example"/>                                     

               <input className="form-control form-control-lg addinputtext" type="date" placeholder="Date" name='date' aria-label=".form-control-lg example"/>
            </div>
        </div>
        <div className="container pictimgdiv ">
        <div className='mb-3'>
        <h3>Trek Banner</h3>
        </div>
             <div className='gallery-img-div'>
             <div className='gallery-btn'>
              <input type='file' name='trekImg' value='' onChange={handleImg} className='inputffile'/>  
            <div className='addtrek-img-wrapper'>
            <BsCameraFill className='camera-icon'/>
            <img src={baseImg} className='pictImgg' /> 
            <h5>UPLOAD FILES</h5>
            </div>
             </div>
             <div>
             <button type="submit" className="btn-join">Submit</button>
             <ToastContainer
               position="top-center"
               autoClose={5000}
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

        </div>
        </form>
       </div>
   </>
  )
}

export default AdminNewTrek
