import React from 'react'
import {AiTwotoneCalendar} from 'react-icons/ai';
import {BiSolidBookmark, BiSolidUser} from 'react-icons/bi';
import {useNavigate } from 'react-router-dom';

const Cardpost = (props) => {

  const navigate = useNavigate();

const submitBloghandle=()=>{

  window.scrollTo({ top: 400, left: 0, behavior: 'smooth' });

  navigate('/singleblog',{
    state: {
       picc: `${props.picc}`,
       dd: `${props.dd}`,
       mon: `${props.mon}`,
       yyr: `${props.yyr}`,
       topic: `${props.topic}`,
       relate: `${props.relate}`,
       descst: `${props.descst}`,
       desclg: `${props.desclg}`
    }
  });
  console.log(props.descst);
}

  return (
   <>
   
   <div className='posttdiv shadow'> 
              <div className='post-img-div'>
                <img src={props.picc} alt='imagess'/>
                 <div className='date-wrap'>
                  <div className='date-wrap-cal'>
                    <h2>{props.dd}</h2>
                  </div>
                  <div className='date-wrap-cal-2'><h5>{props.mon} {props.yyr}</h5></div>
                 </div>
              </div>
              <div className='post-content-wrapper'>
                   <div className='post-content'>
                     <h4>{props.topic}</h4>
                   </div>
                   <div className='post-utils'>
                         <div className='utilss'>
                          <AiTwotoneCalendar className='naticon' />
                          <h6>{props.dd} {props.mon} {props.yyr}</h6>
                         </div>
                         <div className='utilss'>
                          <BiSolidBookmark className='naticon'  />
                           <h6>{props.relate}</h6>
                         </div>
                         <div className='utilss'>
                          <BiSolidUser  className='naticon' />
                          <h6>ADMIN</h6>
                         </div>
                   </div>
                   <div className='loremm'>
                          <p>{props.descst}</p>
                   </div>
                   <div className='btn-view-blog'>
                       <button className='btn-view' onClick={submitBloghandle}>Read More</button>
                   </div>
              </div>
              </div>
   </>
  )
}

export default Cardpost
