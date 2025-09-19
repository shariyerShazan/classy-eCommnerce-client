import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header/Header'
import Topper from '../components/Header/Topper'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
        {/* Topper scroll kore chole jabe */}
        <Topper />

        {/* Header sticky thakbe */}
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>

        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout
