import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false) // Mobile ke liye Toggle
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  // Filter Logic: URL parameter ke hisaab se filter karega
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  // Specialist Categories List
  const specialities = [
    'General Physician', 
    'Gynecologist', 
    'Dermatologist', 
    'Pediatrician', 
    'Neurologist', 
    'Gastroenterologist'
  ]

  return (
    <div className='font-outfit'>
      <p className='text-gray-600 text-sm md:text-base font-medium mt-10'>Browse through the doctors specialist.</p>
      
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        
        {/* --- LEFT SIDE: SPECIALIST SIDEBAR --- */}
        <div className='flex-col gap-4 text-sm text-gray-600 min-w-52 w-full sm:w-auto'>
            
            {/* Mobile Toggle Button */}
            <button 
                onClick={() => setShowFilter(!showFilter)} 
                className={`py-2 px-4 border rounded text-sm transition-all sm:hidden w-fit mb-4 ${showFilter ? 'bg-primary text-white' : 'bg-white text-gray-600'}`}
            >
                {showFilter ? 'Close Filters' : 'Show Filters'}
            </button>
            
            {/* Categories List */}
            <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
                {specialities.map((spec, index) => (
                    <p 
                        key={index}
                        onClick={() => {
                            // Agar same filter par click kiya toh 'All Doctors' par le jao, nahi toh filter lagao
                            if (speciality === spec) {
                                navigate('/doctors')
                            } else {
                                navigate(`/doctors/${spec}`)
                            }
                            setShowFilter(false) // Mobile par click ke baad close karo
                        }}
                        className={`w-full pl-4 py-2.5 border border-gray-300 rounded transition-all cursor-pointer hover:bg-indigo-50 hover:text-black hover:border-primary/50 ${speciality === spec ? "bg-indigo-50 text-black border-primary font-medium shadow-sm" : ""}`}
                    >
                        {spec}
                    </p>
                ))}
            </div>
        </div>

        {/* --- RIGHT SIDE: DOCTORS GRID --- */}
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div 
                onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                className='border border-indigo-200 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group bg-white' 
                key={index}
            >
                {/* Image */}
                <div className="overflow-hidden relative bg-[#F0F2FF] h-52 flex justify-center items-end">
                    <img className='w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500' src={item.image} alt="" />
                </div>

                {/* Info */}
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
                </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Doctors