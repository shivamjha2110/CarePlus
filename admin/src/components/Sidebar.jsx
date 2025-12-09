import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'

const Sidebar = () => {

  const { dToken } = useContext(DoctorContext)
  const { aToken } = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white border-r border-gray-200 w-16 md:w-72 transition-all duration-300'>
      {aToken && <ul className='text-[#515151] mt-5 flex flex-col gap-1'>

        <NavLink to={'/admin-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-8 cursor-pointer transition-all duration-200 ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`}>
          <img className='min-w-6 w-6' src={assets.home_icon} alt='' />
          <p className='hidden md:block'>Dashboard</p>
        </NavLink>

        <NavLink to={'/all-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-8 cursor-pointer transition-all duration-200 ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`}>
          <img className='min-w-6 w-6' src={assets.appointment_icon} alt='' />
          <p className='hidden md:block'>Appointments</p>
        </NavLink>

        <NavLink to={'/add-doctor'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-8 cursor-pointer transition-all duration-200 ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`}>
          <img className='min-w-6 w-6' src={assets.add_icon} alt='' />
          <p className='hidden md:block'>Add Doctor</p>
        </NavLink>

        <NavLink to={'/doctor-list'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-8 cursor-pointer transition-all duration-200 ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`}>
          <img className='min-w-6 w-6' src={assets.people_icon} alt='' />
          <p className='hidden md:block'>Doctors List</p>
        </NavLink>
      </ul>}

      {dToken && <ul className='text-[#515151] mt-5 flex flex-col gap-1'>
        <NavLink to={'/doctor-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-8 cursor-pointer transition-all duration-200 ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`}>
          <img className='min-w-6 w-6' src={assets.home_icon} alt='' />
          <p className='hidden md:block'>Dashboard</p>
        </NavLink>

        <NavLink to={'/doctor-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-8 cursor-pointer transition-all duration-200 ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`}>
          <img className='min-w-6 w-6' src={assets.appointment_icon} alt='' />
          <p className='hidden md:block'>Appointments</p>
        </NavLink>

        <NavLink to={'/doctor-profile'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-8 cursor-pointer transition-all duration-200 ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50'}`}>
          <img className='min-w-6 w-6' src={assets.people_icon} alt='' />
          <p className='hidden md:block'>Profile</p>
        </NavLink>
      </ul>}
    </div>
  )
}

export default Sidebar