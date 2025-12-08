import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const { token, setToken, userData } = useContext(AppContext)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        setToken(false)
        navigate('/login')
    }

    return (
        <div className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-lg shadow-sm border-b border-white/20' : 'bg-transparent'}`}>
            <div className='flex items-center justify-between text-sm py-3 mx-4 sm:mx-[10%]'>
                
                {/* --- LOGO WITH GRADIENT TEXT --- */}
                <div onClick={() => navigate('/')} className='flex items-center gap-2 cursor-pointer group'>
                    <div className='w-10 h-10 bg-gradient-to-br from-primary to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                        </svg>
                    </div>
                    <div>
                        <p className='text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary to-indigo-600'>
                            CarePulse
                        </p>
                        <p className='text-[10px] font-semibold text-gray-500 tracking-widest uppercase -mt-1 ml-0.5'>Healthcare</p>
                    </div>
                </div>

                {/* --- DESKTOP MENU (Pill Shape Design) --- */}
                <ul className='md:flex items-center gap-1 font-medium hidden bg-gray-50/50 p-1 rounded-full border border-gray-100'>
                    {['HOME', 'ALL DOCTORS', 'ABOUT', 'CONTACT'].map((item, index) => (
                        <NavLink key={index} to={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}>
                            {({ isActive }) => (
                                <li className={`px-5 py-2 rounded-full transition-all duration-300 text-xs font-bold tracking-wide ${isActive ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}`}>
                                    {item}
                                </li>
                            )}
                        </NavLink>
                    ))}
                </ul>

                {/* --- USER PROFILE / LOGIN --- */}
                <div className='flex items-center gap-4'>
                    {
                        token && userData
                            ? <div className='flex items-center gap-3 cursor-pointer group relative'>
                                <div className='text-right hidden sm:block'>
                                    <p className='text-sm font-bold text-gray-800'>{userData.name || "User"}</p>
                                    <p className='text-xs text-gray-500 font-medium'>Patient</p>
                                </div>
                                <img className='w-10 h-10 rounded-full object-cover border-2 border-white shadow-md group-hover:shadow-primary/50 transition-all' src={userData.image} alt="" />
                                
                                {/* Dropdown */}
                                <div className='absolute top-0 right-0 pt-16 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                    <div className='min-w-48 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-2 border border-gray-100 ring-1 ring-black/5'>
                                        <p onClick={() => navigate('/my-profile')} className='hover:bg-indigo-50 hover:text-primary rounded-lg px-4 py-2 cursor-pointer transition-all'>My Profile</p>
                                        <p onClick={() => navigate('/my-appointments')} className='hover:bg-indigo-50 hover:text-primary rounded-lg px-4 py-2 cursor-pointer transition-all'>My Appointments</p>
                                        <hr className='my-1 border-gray-200'/>
                                        <p onClick={logout} className='hover:bg-red-50 hover:text-red-500 rounded-lg px-4 py-2 cursor-pointer transition-all'>Logout</p>
                                    </div>
                                </div>
                            </div>
                            : <button onClick={() => navigate('/login')} className='bg-gray-900 text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:bg-primary transition-all duration-300 transform hover:-translate-y-0.5 hidden md:block'>
                                Get Started
                              </button>
                    }
                    <img onClick={() => setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt="" />

                    {/* --- MOBILE MENU --- */}
                    <div className={`md:hidden fixed top-0 right-0 bottom-0 z-50 bg-white/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${showMenu ? 'w-full' : 'w-0'} overflow-hidden`}>
                        <div className='flex items-center justify-between px-5 py-6 border-b'>
                            <div className='flex items-center gap-2'>
                                <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                                </div>
                                <p className='text-xl font-bold text-gray-800'>CarePulse</p>
                            </div>
                            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7 cursor-pointer' alt="" />
                        </div>
                        <ul className='flex flex-col items-center gap-6 mt-10 text-lg font-bold text-gray-600'>
                            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-6 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all'>HOME</p></NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-6 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all'>ALL DOCTORS</p></NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-6 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all'>ABOUT</p></NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-6 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all'>CONTACT</p></NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar