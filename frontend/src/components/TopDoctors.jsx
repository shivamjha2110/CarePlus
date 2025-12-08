import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-4 my-8 text-[#262626] md:mx-10'>
            <h1 className='text-2xl font-bold'>Top Doctors in India</h1>
            
            <div className='w-full grid grid-cols-auto gap-5 pt-4 gap-y-6 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div 
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                        className='bg-white border border-indigo-50 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group' 
                        key={index}
                    >
                        {/* Image Container - FIXED */}
                        <div className="relative bg-[#F0F2FF] h-52 flex justify-center items-center">
                            {/* object-contain: Poori image dikhegi bina kate */}
                            {/* mix-blend-multiply: Background ke saath ache se blend karega */}
                            <img className='w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500' src={item.image} alt="" />
                            
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] text-gray-700 font-bold shadow-sm flex items-center gap-1">
                                4.9 <span className='text-yellow-400'>★</span>
                            </div>
                        </div>

                        <div className='p-4'>
                            <div className={`flex items-center gap-2 text-xs ${item.available ? 'text-green-600' : "text-gray-500"} mb-2`}>
                                <span className={`relative flex h-2 w-2`}>
                                {item.available && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
                                <span className={`relative inline-flex rounded-full h-2 w-2 ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></span>
                                </span>
                                <p className="font-semibold">{item.available ? 'Available' : "Not Available"}</p>
                            </div>
                            
                            <p className='text-gray-900 text-lg font-bold mb-0.5'>{item.name}</p>
                            <p className='text-primary text-xs font-medium'>{item.speciality}</p>

                            <div className='mt-3 flex items-center justify-between text-[11px] text-gray-500'>
                                <p>📍 {item.address?.line2 ? item.address.line2.split(',')[0] : 'India'}</p>
                                <p className='font-bold text-gray-800'>₹{item.fees}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-primary/5 text-primary px-10 py-3 rounded-full mt-6 hover:bg-primary hover:text-white transition-all duration-300 font-bold text-sm'>
                View All Doctors
            </button>
        </div>
    )
}

export default TopDoctors