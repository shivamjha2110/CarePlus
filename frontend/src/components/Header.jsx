import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-indigo-50 rounded-b-[30px] md:rounded-[30px] px-6 md:px-10 lg:px-20 overflow-hidden relative shadow-sm mb-6'>
            
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-primary/20 to-purple-200/30 blur-3xl mix-blend-multiply"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-blue-100 to-primary/20 blur-3xl mix-blend-multiply"></div>
            </div>

            {/* Header Left */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[6vw] relative z-10'>
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-gray-700 font-medium shadow-sm mb-1">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Trusted by 10k+ Patients
                </div>

                <h1 className='text-3xl md:text-4xl lg:text-5xl text-gray-900 font-extrabold leading-tight font-outfit'>
                    Find Your Doctor, <br /> 
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600'>Book Your Health.</span>
                </h1>
                
                <p className='text-gray-600 text-sm font-medium leading-relaxed'>
                    Instant access to verified specialists. Your journey to better health starts here.
                </p>
                
                <a href='#speciality' className='mt-2 flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300'>
                    Find a Doctor <img className='w-3 invert' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* Header Right - FIXED IMAGE SCALING */}
            <div className='md:w-1/2 relative z-10 flex items-end justify-end'>
                {/* 'object-contain' ensures the full image is shown without cropping */}
                <img className='w-full md:w-[90%] lg:w-[80%] h-auto max-h-[500px] object-contain drop-shadow-2xl' src={assets.header_img} alt="Doctors" />
            </div>
        </div>
    )
}

export default Header