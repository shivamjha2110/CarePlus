import React, { useState, useRef, useEffect } from 'react'
import { assets } from '../assets/assets' // Ensure you have an icon or use SVG below
import { useNavigate } from 'react-router-dom'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hi! I am CarePulse Assistant. How can I help you today?", isBot: true }
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef(null)
  const navigate = useNavigate()

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    // 1. Add User Message
    const userMessage = { text: input, isBot: false }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // 2. Simulate Bot Thinking (Delay)
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage.text)
      setMessages((prev) => [...prev, { text: botResponse.text, isBot: true, action: botResponse.action }])
    }, 1000)
  }

  // --- SIMPLE AI LOGIC (Rule Based) ---
  const getBotResponse = (text) => {
    const lowerText = text.toLowerCase()

    if (lowerText.includes("hello") || lowerText.includes("hi")) {
      return { text: "Hello! Would you like to book an appointment?" }
    }
    if (lowerText.includes("book") || lowerText.includes("appointment")) {
      return { text: "You can book an appointment by selecting a doctor from our list. Would you like to see all doctors?", action: '/doctors' }
    }
    if (lowerText.includes("price") || lowerText.includes("fee") || lowerText.includes("cost")) {
      return { text: "Consultation fees vary by doctor, usually starting from ₹500. Check specific doctor profiles for details." }
    }
    if (lowerText.includes("location") || lowerText.includes("address")) {
      return { text: "We are located at Cyber City, Gurgaon. You can check the Contact page for more info.", action: '/contact' }
    }
    if (lowerText.includes("login") || lowerText.includes("sign up")) {
        return { text: "You can login or create an account here.", action: '/login' }
    }
    if (lowerText.includes("contact") || lowerText.includes("support")) {
        return { text: "You can reach our support team at +91 98765-43210 or email support@carepulse.in", action: '/contact' }
    }
    
    return { text: "I'm not sure about that. Try asking about 'appointments', 'fees', or 'location'." }
  }

  const handleAction = (path) => {
      if(path) {
          navigate(path)
          setIsOpen(false)
          window.scrollTo(0,0)
      }
  }

  return (
    <div className='font-outfit z-50 fixed bottom-6 right-6 sm:bottom-10 sm:right-10 flex flex-col items-end gap-4'>
      
      {/* --- Chat Window --- */}
      {isOpen && (
        <div className='w-[90vw] sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-fadeIn'>
            
            {/* Header */}
            <div className='bg-primary p-4 flex justify-between items-center text-white'>
                <div className='flex items-center gap-2'>
                    <div className='bg-white/20 p-1.5 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <p className='font-bold'>CarePulse Support</p>
                </div>
                <button onClick={() => setIsOpen(false)} className='hover:bg-white/20 rounded-full p-1 transition-colors'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>

            {/* Messages Area */}
            <div className='h-80 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3'>
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.isBot ? 'bg-white text-gray-700 border border-gray-100 rounded-tl-none' : 'bg-primary text-white rounded-tr-none'}`}>
                            <p>{msg.text}</p>
                            {/* Action Button inside Chat */}
                            {msg.action && (
                                <button 
                                    onClick={() => handleAction(msg.action)} 
                                    className='mt-2 text-xs bg-black/5 hover:bg-black/10 text-primary font-bold px-3 py-1.5 rounded-md transition-colors w-full text-left flex items-center gap-1'
                                >
                                    Go to Page ➜
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className='p-3 bg-white border-t border-gray-100 flex gap-2'>
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your query..." 
                    className='flex-1 bg-gray-50 text-sm px-4 py-2.5 rounded-full outline-none border border-transparent focus:border-primary/30 focus:bg-white transition-all'
                />
                <button 
                    onClick={handleSend}
                    className='bg-primary text-white p-2.5 rounded-full shadow-md hover:bg-indigo-600 transition-transform active:scale-95'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
        </div>
      )}

      {/* --- Floating Toggle Button --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className='bg-primary text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300 group'
      >
        {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
            <svg className='group-hover:animate-pulse' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </button>

    </div>
  )
}

export default ChatBot