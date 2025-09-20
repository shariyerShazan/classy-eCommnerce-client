import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header/Header'
import Topper from '../components/Header/Topper'
import Footer from '../components/Footer/Footer'
import FooterTopForHome from '../components/Footer/FooterTopForHome'

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
        <FooterTopForHome />
        <Footer />
    </div>
  )
}

export default MainLayout
