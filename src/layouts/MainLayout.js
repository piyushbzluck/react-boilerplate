import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main className="layout row m-0">
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default MainLayout