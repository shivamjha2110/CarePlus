import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    // Mobile par padding kam (px-6), Desktop par zyada (sm:px-14)
    <div className='bg-[#F8F9FD] mt-20 rounded-t-3xl pt-16 pb-8 px-6 sm:px-14 font-outfit'>
      
      {/* Mobile: 1 Column, Desktop: 4 Columns */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 text-sm mb-12'>

        {/* --- Column 1: Contact --- */}
        <div>
          <h3 className='font-bold text-lg text-gray-900 mb-6'>Contact</h3>
          <div className='flex flex-col gap-4 text-gray-600 font-medium'>
             
             <div className='flex items-start gap-3 group cursor-pointer'>
                <div className='w-5 mt-1 text-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                </div>
                <p>Cyber City, Tower B, <br />Gurgaon, India</p>
             </div>

             <div className='flex items-center gap-3 group cursor-pointer'>
                <div className='w-5 text-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </div>
                <p>+91 XXX-XXX-XXXX</p>
             </div>

             <div className='flex items-center gap-3 group cursor-pointer'>
                <div className='w-5 text-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                <p>contact@carepulse.in</p>
             </div>
          </div>
        </div>

        {/* --- Column 2: Services --- */}
        <div>
           <h3 className='font-bold text-lg text-gray-900 mb-6'>Services</h3>
           <ul className='flex flex-col gap-3 text-gray-600 font-medium'>
              <li onClick={()=>handleNavigate('/doctors')} className='hover:text-primary cursor-pointer w-fit'>Find Doctors</li>
              <li onClick={()=>handleNavigate('/my-appointments')} className='hover:text-primary cursor-pointer w-fit'>My Appointments</li>
              <li className='hover:text-primary cursor-pointer w-fit'>Video Consult</li>
              <li className='hover:text-primary cursor-pointer w-fit'>Lab Tests</li>
              <li className='hover:text-primary cursor-pointer w-fit'>Health Records</li>
           </ul>
        </div>

        {/* --- Column 3: Quick Links --- */}
        <div>
           <h3 className='font-bold text-lg text-gray-900 mb-6'>Quick Links</h3>
           <ul className='flex flex-col gap-3 text-gray-600 font-medium'>
              <li onClick={()=>handleNavigate('/')} className='hover:text-primary cursor-pointer w-fit'>Home</li>
              <li onClick={()=>handleNavigate('/about')} className='hover:text-primary cursor-pointer w-fit'>About us</li>
              <li onClick={()=>handleNavigate('/contact')} className='hover:text-primary cursor-pointer w-fit'>Contact</li>
              <li className='hover:text-primary cursor-pointer w-fit'>Privacy Policy</li>
              <li className='hover:text-primary cursor-pointer w-fit'>Terms & Conditions</li>
           </ul>
        </div>

        {/* --- Column 4: Newsletter --- */}
        <div className='md:col-span-1'>
           <h3 className='font-bold text-lg text-gray-900 mb-6'>Newsletter</h3>
           <p className='text-gray-600 mb-4 font-medium text-sm'>Subscribe and get latest health tips.</p>

           {/* --- RESPONSIVE NEWSLETTER BOX --- */}
           {/* Mobile: w-full (pura width lega), Desktop: max-w-[420px] (limit rahega) */}
           <div className="flex items-center gap-2 w-full max-w-[420px] h-11 border border-gray-300 rounded-full bg-white pl-3 pr-1.5 shadow-sm focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                
                <input 
                  type="email" 
                  placeholder="Enter Ur Email" 
                  className="w-full bg-transparent outline-none text-gray-700 text-sm placeholder:text-gray-400 min-w-0"
                />
                
                <button className="bg-primary text-white px-1 h-7 rounded-full text-xs font-bold shrink-0 hover:bg-indigo-600 transition-all">
                  Subscribe
                </button>
              
           </div>
           
           {/* --- Social Icons --- */}
           <div className='flex gap-4 mt-6'>
             {/* WhatsApp */}
             <div className='w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer shadow-sm border border-green-100 hover:-translate-y-1'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
             </div>

             {/* Instagram */}
             <div className='w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 cursor-pointer shadow-sm border border-pink-100 hover:-translate-y-1'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             </div>

             {/* LinkedIn */}
             <div className='w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer shadow-sm border border-blue-100 hover:-translate-y-1'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </div>
           </div>

        </div>

      </div>

      {/* --- Copyright --- */}
      <div className='border-t border-gray-200 pt-8 text-center'>
         <p className='text-gray-500 text-sm font-medium'>
            © Copyright 2025 powered by <span className='text-primary font-bold'>CarePulse</span>
         </p>
      </div>
    </div>
  )
}

export default Footer