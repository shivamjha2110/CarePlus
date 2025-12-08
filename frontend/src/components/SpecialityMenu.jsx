import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-8 text-gray-800'>
            <h1 className='text-2xl font-bold'>Find by Speciality</h1>
            
            <div className='flex sm:justify-center gap-6 pt-4 w-full overflow-scroll pb-4 scrollbar-hide'>
                {specialityData.map((item, index) => (
                    <Link 
                        onClick={() => scrollTo(0, 0)} 
                        key={index} 
                        to={`/doctors/${item.speciality}`} 
                        className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-5px] transition-all duration-300 group'
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-50 flex items-center justify-center mb-2 shadow-sm group-hover:shadow-md group-hover:bg-primary/10 transition-all border border-transparent group-hover:border-primary/20">
                             <img className='w-8 sm:w-10 object-contain' src={item.image} alt="" />
                        </div>
                        <p className="font-semibold text-gray-600 group-hover:text-primary text-[11px] sm:text-xs">{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu