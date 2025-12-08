import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot' // Added ChatBot

// Page Imports
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Verify from './pages/Verify'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    // 'font-outfit' ensures the new typography applies globally
    <div className='font-outfit bg-white min-h-screen'>
      
      <ToastContainer />
      
      {/* 1. Navbar Full Width (Screen Edge-to-Edge) */}
      <Navbar />
      
      {/* 2. Main Content Container - Responsive Padding */}
      {/* Mobile: px-4 | Tablet: px-7 | Desktop: px-10% */}
      <div className='px-4 sm:px-[5%] md:px-[7%] lg:px-[10%]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/doctors/:speciality' element={<Doctors />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/appointment/:docId' element={<Appointment />} />
          <Route path='/my-appointments' element={<MyAppointments />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/verify' element={<Verify />} />
        </Routes>
        
        <Footer />
      </div>

      {/* 3. Floating ChatBot (Visible on all pages) */}
      <ChatBot />
      
    </div>
  )
}

export default App