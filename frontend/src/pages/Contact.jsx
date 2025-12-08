import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='font-outfit max-w-7xl mx-auto'>

      {/* --- Page Header --- */}
      <div className='text-center pt-12 pb-14'>
        <h2 className='text-4xl font-extrabold text-gray-900'>
          Get in <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600'>Touch</span>
        </h2>
        <p className='text-gray-500 mt-4 text-base'>
          Have a question? We'd love to hear from you.
        </p>
      </div>

      {/* --- Main Content Layout --- */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-12 mb-28 text-sm px-4 md:px-10'>

        {/* --- Left Side: Framed Image --- */}
        <div className='md:w-1/2'>
            {/* Image Inside a Clean Frame */}
            <div className='bg-indigo-50 p-3 rounded-[30px] shadow-lg'>
                <img 
                    className='w-full h-full object-cover rounded-[20px] shadow-inner' 
                    src={assets.contact_image} 
                    alt="Contact Us" 
                />
            </div>
        </div>

        {/* --- Right Side: Details Cards --- */}
        <div className='flex flex-col justify-center gap-6 md:w-1/2 md:pl-10'>

          {/* 1. Office Card */}
          <div className='p-8 bg-white border border-gray-100 rounded-3xl shadow-soft hover:shadow-xl transition-all duration-300 group cursor-default'>
             <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 10-8 10s-8-4-8-10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <h3 className='font-bold text-xl text-gray-900'>Corporate Headquarters</h3>
             </div>
             <p className='text-gray-600 leading-7 text-base pl-16 -mt-2'>
               Cyber City, Tower B, 9th Floor,<br />
               DLF Phase 2, Sector 24,<br />
               <span className='font-semibold text-gray-800'>Gurgaon, Haryana - 122002</span>
             </p>
          </div>

          {/* 2. Contact Support Card */}
          <div className='p-8 bg-white border border-gray-100 rounded-3xl shadow-soft hover:shadow-xl transition-all duration-300 group cursor-default'>
             <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <h3 className='font-bold text-xl text-gray-900'>Support Channels</h3>
             </div>
             <div className='pl-16 -mt-2 space-y-2'>
                 <p className='text-gray-600 text-base'>Tel: <span className='font-bold text-gray-900'>+91 XXX-XXX-XXXX</span></p>
                 <p className='text-gray-600 text-base'>Email: <span className='font-bold text-gray-900'>support@carepulse.in</span></p>
             </div>
          </div>

          {/* 3. Careers CTA */}
          <div className='mt-6 p-4'>
            <p className='text-gray-600 mb-6 font-medium'>
                Interested in joining India's fastest growing health-tech team?
            </p>
            <button className='bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-primary hover:scale-105 transition-all duration-300 shadow-lg'>
                View Open Positions
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact