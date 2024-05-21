import React, { useEffect, useState } from 'react'
import Navtab from '../Components/Navtab'
import Breadcrumb from '../Components/Breadcrumb'
import Cardphoto from '../Components/Cardphoto'
import { Carousel } from 'antd'
import 'video-react/dist/video-react.css';
import axios from 'axios'

const Gallery = () => {
  

  const [data, setData] = useState([]);

  const myfunction = () =>{
    return data.slice(-3);
  }
  
  const myfunction2 = () =>{
    return data.slice(-6,-3);
  }
  
  const myfunction3 = () =>{
    return data.slice(-9,-6);
  }

  console.log(myfunction());

  useEffect (()=>{

    axios.get(`${process.env.REACT_APP_HOST_URL}/video/getAllVideo`)
    .then((response)=>{
    console.log(response.data);
     setData(response.data.video);
    })
    .catch((error)=>{
     console.log(error);
    })
  
  },[])


  return (
    <>
     <div className='main-wrapper'>
<section className='gallery-wrapper'>
   <div className='gallery-inner-wrapper'>
    <Navtab/>
   <div className='gallery-head-wrapper'>
            <h3>Gallery</h3>
            <Breadcrumb
            title='Gallery'
            />
         </div>
         <div className='img-forest-wrapper'>   
                <img src='./Images/pineforest.png' alt='pineforest'/>
           </div>
            <div className='img-slider-wrapper'>   
                <img src='./Images/slidermask.png' alt='slidermask'/>
           </div>     
   </div>
</section>
<section className='gallery-photo-wrapper'>
 <div className='container-xxl'>
          <div className='gallery-main'>
            
            <Cardphoto pict="../Images/adventure2.jpg" str="PEOPLE" urll="/people" />
            <Cardphoto pict="../Images/adventure1.jpg" str="SIGHTS" urll="/sight" />
            <Cardphoto pict="../Images/adventure3.jpg" str="TREKS" urll="/trek" />
            <Cardphoto pict="../Images/adventure4.jpg" str="NATURE" urll="/nature" />
            <Cardphoto pict="../Images/adventure5.jpg" str="REFUGES" urll="/refuge" />
            <Cardphoto pict="../Images/adventure6.jpg" str="OTHER" urll="/other" />
          </div>
 </div>
</section>
<section className='gallery-video-wrapper'>
<div className='container-xxl'>
    <div className='video-inner-wrapper'>
      <div className='text-center'>      
        <p>VIDEOS</p>
        <h5>We live for the nature</h5>
      </div>
      <div>
        <Carousel>
        <div className='carousel-inner-wrapper'>
        {myfunction().map((data,i)=>(
          <div className='video-card-wrapper' key={i}>
          <iframe width="280" height="200" src={data.videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        ))}
      </div>
      <div className='carousel-inner-wrapper'>
        {myfunction2().map((data,i)=>(
          <div className='video-card-wrapper' key={i}>
          <iframe width="280" height="200" src={data.videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        ))}
      </div>
      <div className='carousel-inner-wrapper'>
        {myfunction3().map((data,i)=>(
          <div className='video-card-wrapper' key={i}>
          <iframe width="280" height="200" src={data.videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        ))}
      </div>
        </Carousel>
      </div>
    </div>
</div>
</section>
</div>
    </>
  )
}

export default Gallery
