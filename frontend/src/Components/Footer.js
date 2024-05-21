import React from 'react'
import { Link } from 'react-router-dom'
import { MdMail } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import  {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <>
    <footer className='footer-wrapper'>
       <div className='container-xxl'>
              <div className='footer-inner-wrapper'>
                    <div className='d-flex flex-column algin-items-center gap-20'>
                        <h5>Adventor</h5>
                        <p>Going on an adventure is not about just fun, its all about yourself and entertaining yourself. Get the best out adventure activities in you and start living the moment.</p>
                        <div className='d-flex algin-items-center gap-30'>
                          <Link to=''><BsFacebook className='sm-icon'/></Link>
                          <Link to=''><AiFillTwitterCircle className='sm-twit-icon'/></Link>
                          <Link to=''><BsLinkedin className='sm-icon'/></Link>
                          <Link to=''><BsInstagram className='sm-icon'/></Link>
                        </div>
                    </div> 

                    <div className='d-flex flex-column algin-items-center gap-10'>
                    <h5>Useful Links</h5>
                    <Link to='/' onClick={scrollToTop}>Home</Link>
                    <Link to='/about' onClick={scrollToTop}>About</Link>
                    <Link to='/adventure' onClick={scrollToTop}>Adventures</Link>
                    <Link to='/blog' onClick={scrollToTop}>Blog</Link>
                    <Link to='/contact' onClick={scrollToTop}>Contact</Link>
                    </div> 

                    <div className='d-flex flex-column algin-items-center gap-10'>
                    <h5>Policy</h5>
                    <Link to='/privacy' onClick={scrollToTop}>Privacy Policy</Link>
                    <Link to='/terms' onClick={scrollToTop}>Terms & Conditions</Link>
                    <Link to='/payment' onClick={scrollToTop}>Payment Policy</Link>
                    <Link to='/cancellation' onClick={scrollToTop}>Cancellation Policy</Link>
                    </div> 

                    <div  className='d-flex flex-column algin-items-center'>
                    <h5>Reach Us</h5>
                    <div className='d-flex align-items-center mb-2'><MdMail className='iicon' /><p>someone@gmail.com</p></div>
                    <div className='d-flex  align-items-center mb-2'><MdCall className='iicon' /> <p>(334) 336 3346</p></div>
                    <div className='d-flex  align-items-center mb-2'><MdLocationOn className='iicon' /> <p>932 Galvin St. Pompano Beach, FL 33060</p> </div>
                    </div> 
              </div>
              <div className='footer-down-wrapper'>
                <p>&copy; {new Date().getFullYear()} Created by Laukik Palekar</p>
                <div className='footer-down-subwrapper'>
                    
                </div>

              </div>
       </div>
    </footer>
    </>
  )
}

export default Footer
