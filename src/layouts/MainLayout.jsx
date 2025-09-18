import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header/Header'

const MainLayout = () => {
  return (
    <div>
        <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout
