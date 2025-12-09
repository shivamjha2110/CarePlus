import React, { useContext } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 font-outfit'>
      
      {/* --- Logo & Role Section --- */}
      <div onClick={() => navigate('/')} className='flex items-center gap-3 cursor-pointer group'>
         
         {/* 1. Dynamic Logo Icon (Gradient Fix) */}
         <div className='w-10 h-10 bg-gradient-to-br from-primary to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
         </div>

         {/* 2. Brand Name & Role Badge */}
         <div className='flex flex-col'>
            {/* Text Gradient Fix */}
            <p className='text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary to-indigo-800 leading-tight'>
                CarePulse
            </p>
            
            {/* Role Badge */}
            <p className='text-[10px] font-bold uppercase tracking-wider text-gray-500 border border-gray-200 px-2.5 py-0.5 rounded-full bg-gray-50 w-fit mt-0.5 shadow-sm'>
                {aToken ? 'Admin Panel' : 'Doctor Panel'}
            </p>
         </div>
      </div>

      {/* --- Logout Button --- */}
      <button 
        onClick={() => logout()} 
        className='bg-primary text-white text-sm px-8 py-2.5 rounded-full font-bold shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 transform active:scale-95'
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar