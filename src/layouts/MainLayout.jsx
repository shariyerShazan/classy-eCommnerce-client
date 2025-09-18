import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header/Header'
import Topper from '../components/Header/Topper'

const MainLayout = () => {
  return (
    <div>
        {/* Topper scroll kore chole jabe */}
        <Topper />

        {/* Header sticky thakbe */}
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        <Outlet />
    </div>
  )
}

export default MainLayout
