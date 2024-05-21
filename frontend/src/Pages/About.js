import React, { useEffect } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navtab from '../Components/Navtab'
import Testimonialcard from '../Components/Testimonialcard'
import Subscribecard from '../Components/Subscribecard'

const About = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(()=>{
    Aos.init({duration : 2000});
 },[])

  return (
    <>
   <div className='main-wrapper'>
  <section className='about-wrapper'>
   <div className='about-inner-wrapper'>
    <Navtab/>
   <div className='about-head-wrapper'>
            <h3>About</h3>
            <Breadcrumb
            title='About'
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
   <section className='about-detail-wrapper'>
    <div data-aos="fade-down">
    <p>Soulful adventure</p>
      <h5>Making the Adventure Happen</h5>
    </div>
      <div className='about-detail-inner-wrapper'>
          <div className='about-left-grid'>
             <h5 data-aos="fade-right">Embarking on a Journey of Adventure and Discovery</h5>
   <div className='horizontal-line' data-aos="fade-right">
   </div>
    <p data-aos="fade-right"> Once upon a time, nestled amidst majestic mountains and pristine landscapes, a group of passionate outdoor enthusiasts came together with a shared dream – to inspire and empower people to embrace the beauty of nature through trekking adventures. This marked the humble beginnings of
    The story of our trekking startup began with a vision to create meaningful and unforgettable experiences for fellow adventurers from all walks of life.</p>
 
    <p data-aos="fade-right">Driven by a deep love for nature and a desire to share its wonders with the world, our founders set out on a journey to create a trekking company like no other.
    </p>
    <p data-aos="fade-right">
    Every step of the way, we held firm to our core values: Safety, Sustainability, and Sensibility. We recognized that the mountains we trekked and the trails we traversed were not merely landscapes but homes to unique ecosystems and communities. Thus, we vowed to tread responsibly, leaving behind nothing but footprints and memories.
    </p>
    <p data-aos="fade-right">
    With each passing day, our team of seasoned trekkers and nature enthusiasts grew, united by the common purpose of making the great outdoors accessible to all. Our treks catered to different levels of experience, from beginners seeking thrilling escapades to seasoned adventurers yearning for challenging peaks.
    </p>

      <Link to='/adventure' onClick={scrollToTop} className='btn-about-adventure mt-3'>View Adventures</Link>

      <p data-aos="fade-right">

      </p>
          </div>
          <div className='about-right-grid gap-10'>  
            <img src='./Images/aboutimg-1.jpg' alt='aboutimg-1'/>
            <img src='./Images/aboutimg-2.jpg' alt='aboutimg-2'/>
            <img src='./Images/aboutimg-3.png' alt='aboutimg-3'/>
            <h5 data-aos="fade-left">A Vision Created For The<br/> Activities To Make Sure You<br/> Enjoy & Get Thrilled.</h5>
            <p data-aos="fade-left">
            Word spread like wildfire, and soon our trekking company began welcoming participants from far and wide, all eager to immerse themselves in the beauty of nature. From the snow-capped Himalayas to the lush jungles of Southeast Asia, we embraced diversity, forging unforgettable connections with trekkers from different cultures and backgrounds.
            </p>
            <p data-aos="fade-left">
            As we grew, so did our commitment to sustainability. With every trek, we engaged local communities, supporting their livelihoods and contributing to the preservation of the natural environment. We planted trees, organized cleanup drives, and promoted responsible trekking practices, striving to leave a positive impact on the places we touched.
            </p>
            <p  data-aos="fade-left">
            Through triumphs and challenges, our journey continued, fuelled by the unwavering passion of our team and the boundless enthusiasm of our trekkers. Each trek brought new stories of triumph, self-discovery, and camaraderie, as trekkers conquered their fears and reveled in the beauty of the great outdoors.Our story is still unfolding, an ever-evolving tapestry of adventures waiting to be discovered. With each passing day, we strive to enhance our offerings, explore new trails, and ignite the spirit of adventure in the hearts of more wanderers.
            </p>
            <p  data-aos="fade-left">
            At, we believe that every trek is more than just a journey it's a tale of growth, connection, and wonder. So, come, join us as we continue to create new chapters in the chronicles of exploration, one trek at a time. Together, let's create stories that will be etched in our memories forever.
            </p>
          </div>
      </div>
   </section>
   <Testimonialcard/>
   <Subscribecard/>
   </div>
   </>
  )
}

export default About
