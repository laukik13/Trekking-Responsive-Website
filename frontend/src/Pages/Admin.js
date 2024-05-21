import React, { useEffect, useState } from 'react'
import AdminCardCounter from '../Components/AdminCardCounter'
import {TbTrekking} from 'react-icons/tb'
import {TbMailFilled} from 'react-icons/tb'
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import axios from 'axios'

const Admin = () => {

      const [dataSource, setDataSource] = useState([])

      const columns = [
        {
          key: '1',
          title: 'Full Name',
          dataIndex: 'fullName'
        },
        {
          key: '2',
          title: 'Email',
          dataIndex: 'email'
        },
        {
          key: '3',
          title: 'Phone Number',
          dataIndex:'phone'
        },
        {
          key: '4',
          title: 'Message',
          dataIndex:'message'
        }
      ]

      useEffect (()=>{
  
        axios.get(`${process.env.REACT_APP_HOST_URL}/contact/getAllContact`)
        .then((response)=>{
         console.log(response.data);
         setDataSource(response.data.contact);
        })
        .catch((error)=>{
         console.log(error);
        })
    
     },[])
    
      
      const myfunction = () =>{
        return dataSource.slice(-5);
       }

      const [trekData, setTrekData] = useState([])


      useEffect (()=>{
  
        axios.get(`${process.env.REACT_APP_HOST_URL}/trek/getAllTrek`)
        .then((response)=>{
         console.log(response.data);
         setTrekData(response.data.trek);
        })
        .catch((error)=>{
         console.log(error);
        })
    
     },[])


      const trek = [
        // {
        //   key: '1',
        //   title: 'ID',
        //   dataIndex: 'id'
        // },
        {
          key: '2',
          title: 'Treks',
          dataIndex: 'title'
        },
        {
          key: '3',
          title: 'Date',
          dataIndex: 'date'
        }
      ]
   

      const trekList = () =>{
        return trekData.slice(-10);
       }

  return (
    <>
    <div className='admin-main-wrapper'>
    <section className='admin-dashboard-wrapper'>
           <div className='dashboard-head-wrapper'>
            <h5>Hello, Admin!</h5>
            <p>Ready to jump back in!</p>
           </div>

         <div className='dashboard-counter-wrapper'> 
                <AdminCardCounter
                icons= {<TbTrekking className='icons-counter'/>}
                no='15'
                title='No of Trek'
                />
                <AdminCardCounter
                icons= {<BsFillCalendarCheckFill className='icons-counter'/>}
                no='20'
                title='No of Booking'
                />
                 <AdminCardCounter
                icons= {<AiFillEye className='icons-counter'/>}
                no='07'
                title='No of Views'
                />
                 <AdminCardCounter  
                icons= {<TbMailFilled className='icons-counter'/>}          
                no='30'
                title='No of Inbox'
                />
         </div>
         <div className='dashboard-details-wrapper'>
             <div className='recentcontact-wrapper'>
              <div className='d-flex justify-content-between align-items-center'>
              <h5 className='mb-3'>Recent Contact's</h5>
              <Link to='/admin/contactlist'>View <BsArrowRight/></Link>
              </div>
                <div>
                <Table
            columns={columns}
            dataSource={myfunction()}
            >
            </Table>
                </div>
             </div>
             <div className='recenttrek-wrapper'>
            <div className='d-flex justify-content-between align-items-center'>
            <h5 className='mb-3'>Recent Trek's</h5>
            <Link to='/admin/treklist'>View <BsArrowRight/></Link>
            </div>
             <div>
                <Table
            columns={trek}
            dataSource={trekList()}
            >
            </Table>
                </div>
             </div>
         </div>
    </section>
    </div>
    </>
  )
}

export default Admin
