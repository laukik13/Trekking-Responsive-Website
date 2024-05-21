import React, { useEffect } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import { Tab, Tabs } from 'react-bootstrap'
import Cardadventure from '../Components/Cardadventure'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navtab from '../Components/Navtab'
import Testimonialcard from '../Components/Testimonialcard'
import Subscribecard from '../Components/Subscribecard'
import axios from 'axios'
import { useState } from 'react'

const Adventure = () => {

const [data,setData] = useState([])

  useEffect(()=>{
    Aos.init({duration : 1500});
 },[])

 useEffect (()=>{
   axios.get(`${process.env.REACT_APP_HOST_URL}/trek/getAllTrek`)
   .then((response)=>{
    console.log(response.data.trek);
    setData(response.data.trek);
   })
   .catch((error)=>{
    console.log(error);

   })
 
 },[])

  return (
   <>
<div className='main-wrapper'>
<section className='adventure-wrapper'>
   <div className='adventure-inner-wrapper'>
    <Navtab/>
   <div className='adventure-head-wrapper'>
            <h3>Upcoming Events</h3>
            <Breadcrumb
            title='Upcoming Events'
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
   <section className='adventure-sub-wrapper'>
      <div className='container-xxl'>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="ALL">
      <div className='tab-grid'>

         {data.map((data,i)=>(
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
      </Tab>
      <Tab eventKey={2} title="HIKING">
      <div className='tab-grid' data-aos="fade-down">
      {data.map((data,i)=>(

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
      </Tab>
      <Tab eventKey={3} title="TREKKING">
      <div className='tab-grid' data-aos="fade-down">

      {data.map((data,i)=>(
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
      </Tab>
      <Tab eventKey={4} title="ADVENTURE">
      <div className='tab-grid' data-aos="fade-down">

      {data.map((data,i)=>(
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
      </Tab>
    </Tabs>
      </div>
   </section>
   <Testimonialcard/>
   <Subscribecard/>
</div>
   </>
  )
}

export default Adventure
