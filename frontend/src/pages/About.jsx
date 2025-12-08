import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='md:mx-10 my-10 font-outfit'>

      {/* --- Page Header --- */}
      <div className='text-center pt-8 pb-14'>
        <h2 className='text-4xl font-extrabold text-gray-900'>
          About <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600'>CarePulse</span>
        </h2>
        <p className='mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base'>
          Empowering Indian families with accessible, transparent, and verified healthcare solutions.
        </p>
      </div>

      {/* --- Hero Section --- */}
      <div className='flex flex-col md:flex-row gap-12 items-center mb-20'>
        
        {/* --- Left: Image (Clean Look) --- */}
        <div className='w-full md:w-5/12'>
            {/* Simple, clean image with rounded corners and shadow */}
            <img 
                className='w-full rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500 object-cover' 
                src={assets.about_image} 
                alt="About CarePulse" 
            />
        </div>

        {/* --- Right: Content --- */}
        <div className='flex flex-col justify-center gap-6 md:w-6/12 text-gray-600'>
          <p className='text-lg leading-relaxed'>
            Welcome to <b className='text-gray-900'>CarePulse</b>. We noticed a gap in the Indian healthcare system—the difficulty in finding verified specialists quickly. We built CarePulse to bridge this gap.
          </p>
          <p className='text-base leading-relaxed'>
            Whether you are looking for a <b className='text-gray-800'>Cardiologist in Mumbai</b> or a <b className='text-gray-800'>Pediatrician in Bangalore</b>, our platform connects you with trusted doctors from top institutes. We verify every doctor's MCI (Medical Council of India) registration to ensure your safety.
          </p>
          
          <div className='bg-gradient-to-r from-indigo-50 to-white p-6 rounded-xl border-l-4 border-primary shadow-sm'>
            <h3 className='font-bold text-gray-900 mb-2'>Our Mission</h3>
            <p className='text-sm text-gray-700 font-medium'>
              "To ensure every Indian citizen has access to quality medical advice within 15 minutes, regardless of their location."
            </p>
          </div>
        </div>
      </div>

      {/* --- Stats Row --- */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 px-4'>
        {[
            { num: '50+', label: 'Cities Covered' },
            { num: '10k+', label: 'Verified Doctors' },
            { num: '1M+', label: 'Appointments Booked' },
            { num: '4.8/5', label: 'User Rating' }
        ].map((stat, index) => (
            <div key={index} className='bg-white p-8 rounded-2xl shadow-soft text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
                <p className='text-4xl font-extrabold text-primary mb-2'>{stat.num}</p>
                <p className='text-gray-500 text-sm font-bold uppercase tracking-wide'>{stat.label}</p>
            </div>
        ))}
      </div>

      {/* --- Why Choose Us --- */}
      <div className='mb-20'>
        <h3 className='text-2xl font-bold text-gray-900 mb-10 text-center sm:text-left'>
            Why Patients Trust <span className='text-primary'>CarePulse?</span>
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Card 1 */}
            <div className='border border-gray-200 px-8 py-12 rounded-[24px] shadow-sm hover:bg-primary hover:text-white transition-all duration-500 group cursor-pointer'>
                <b className='text-xl block mb-4'>100% Verified Doctors</b>
                <p className='text-gray-600 text-sm leading-7 group-hover:text-indigo-100 font-medium'>
                    We strictly verify every doctor's MCI registration.
                </p>
            </div>
            {/* Card 2 */}
            <div className='border border-gray-200 px-8 py-12 rounded-[24px] shadow-sm hover:bg-primary hover:text-white transition-all duration-500 group cursor-pointer'>
                <b className='text-xl block mb-4'>Instant Booking</b>
                <p className='text-gray-600 text-sm leading-7 group-hover:text-indigo-100 font-medium'>
                    Book confirmed slots in seconds. No waiting queues.
                </p>
            </div>
            {/* Card 3 */}
            <div className='border border-gray-200 px-8 py-12 rounded-[24px] shadow-sm hover:bg-primary hover:text-white transition-all duration-500 group cursor-pointer'>
                <b className='text-xl block mb-4'>Digital Records</b>
                <p className='text-gray-600 text-sm leading-7 group-hover:text-indigo-100 font-medium'>
                    All prescriptions stored securely in one place.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About