import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import Cardfeature from '../Components/Cardfeature'
import Cardoffer from '../Components/Cardoffer'
import Cardactivites from '../Components/Cardactivites'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navtab from '../Components/Navtab'
import Cardadventure from '../Components/Cardadventure'
import { Carousel, Modal } from 'antd'
import {MdAddComment} from 'react-icons/md'
import Subscribecard from '../Components/Subscribecard'
import Testimonialcard from '../Components/Testimonialcard'
import axios from 'axios'

const Home = () => {

  const [imgData , setImgData] = useState();

  const [open, setOpen] = useState(false);

  const [data,setData] = useState([]);

  const [record,setRecord] = useState([]);

  useEffect(()=>{
     Aos.init({duration : 2000});
  },[])

  const handleImageChange = (e) => {
    console.log(e.target.files); 
    setImgData(URL.createObjectURL(e.target.files[0]));   
   } 

   const scrollToTop = () => {
    window.scrollTo({ top: 1200, left: 0, behavior: 'smooth' });
  };

  useEffect (()=>{
    axios.get(`${process.env.REACT_APP_HOST_URL}/trek/getAllTrek`)
    .then((response)=>{
   //  console.log(response.data.trek);
     setData(response.data.trek);

    })
    .catch((error)=>{
     console.log(error);
 
    })
  
  },[])

  const myfunction=()=>{
    return data.slice(-2);
  }

  const myfunction2=()=>{
    return data.slice(-4,-2);
  }

  const myfunction3=()=>{
    return data.slice(-6,-4);
  }


  // console.log(myfunction());

  return (
    <>
 <div className='main-wrapper'>
 <section className='home-wrapper'>  
       <div className='home-inner-wrapper'>
       <Navtab/>
         <div className='home-head-wrapper'>
            <div data-aos="fade-up">
            <img src='./Images/sliderdecor.png' alt='sliderdecor'/>
            </div>
         <h5>Discover the</h5>
          <h3>Adventure Travel</h3> 
          <p>Your best Adventure Deals with nature.</p>
          <Link to='/adventure' className='btn-adventure'>View Adventures</Link> 
         </div>
            <div className='img-slider-wrapper'>   
                <img src='./Images/slidermask.png' alt='slidermask'/>
           </div>    
       </div>
   </section>
   <section className='latest-wrapper'>
     <div className='container-xxl'>
          <div className='latest-inner-wrapper' data-aos="fade-up">
               <div className='latest-left-grid'>
               <Carousel>
               <div className='latest-card-wrapper py-3'>
               {myfunction().map((data,i)=>(
                <Cardadventure
                key={i}
                bgsrc={data.trekImg}
                price={data.price}
                days={data.days}
                groupsize={data.size}
                level={data.difficulty}
                title={data.title}
                desc={data.descp}
                city={data.location}
                />
                  ))}
                    </div>
                    <div className='latest-card-wrapper py-3'>
                    {myfunction2().map((data,i)=>(
                <Cardadventure
                key={i}
                bgsrc={data.trekImg}
                price={data.price}
                days={data.days}
                groupsize={data.size}
                level={data.difficulty}
                title={data.title}
                desc={data.descp}
                city={data.location}
                />
                  ))}
                  </div>
                  <div className='latest-card-wrapper py-3'>
                  {myfunction3().map((data,i)=>(
                <Cardadventure
                key={i}
                bgsrc={data.trekImg}
                price={data.price}
                days={data.days}
                groupsize={data.size}
                level={data.difficulty}
                title={data.title}
                desc={data.descp}
                city={data.location}
                />
                  ))}
                  </div>
               </Carousel>
               </div>
               <div className='latest-right-grid'>
                    <div className='text-center'>
                    <p>LATEST TRIPS</p>
                    <h5>Explore the unexplored world</h5>
                    </div>

                    <div className='latest-detail-wrapper'>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quiso.</p>
                      </div> 
                      <Link to='/contact' onClick={scrollToTop} className='btn-join'>Join Us</Link>
               </div>
          </div>
     </div>
   </section>
   <Testimonialcard/>
   <Subscribecard/>
 </div>
    </>
  )
}

export default Home
