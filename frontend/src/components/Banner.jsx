import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='flex bg-gradient-to-br from-gray-900 via-indigo-950 to-primary rounded-2xl px-6 sm:px-10 md:px-12 my-10 md:mx-10 relative overflow-hidden shadow-lg'>
            
            {/* Background Texture */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary opacity-20 blur-3xl mix-blend-screen"></div>

            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 lg:py-16 relative z-10'>
                <div className='text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight'>
                    <p>Book Appointment</p>
                    <p className='mt-1 text-indigo-200'>With 100+ Trusted Doctors</p>
                </div>
                <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-white text-sm text-primary px-8 py-3 rounded-full mt-6 font-bold shadow-md hover:scale-105 transition-all duration-300'>
                    Create Account
                </button>
            </div>

            {/* ------- Right Side - FIXED IMAGE ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[320px] relative z-10'>
                {/* object-contain ensure karta hai ki image na kate */}
                <img className='w-full h-full object-contain absolute bottom-0 right-0 hover:scale-105 transition-transform duration-500 drop-shadow-xl max-w-sm' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner