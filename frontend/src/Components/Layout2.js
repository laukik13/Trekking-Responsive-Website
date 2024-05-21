import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Layout2 = () => {

  const location = useLocation();

  const [data,setData] = useState(location.state)

  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>
    <Outlet/>
    <AdminFooter/>
    </>
  )
}

export default Layout2
