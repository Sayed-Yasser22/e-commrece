import React from 'react'
import { IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'
import { MdOutlineFacebook } from 'react-icons/md'
import { RiTwitterXLine } from 'react-icons/ri'

export default function Footer() {
  return (
    <>
    
     <footer className="bg-[#3B2F4A] text-white py-12 px-6 md:px-20">
       
       <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-8 gap-6">
         
        
         <div className="flex items-center gap-2">
           <div className="bg-white p-1 rounded-sm">
             
             <svg className="w-5 h-5 text-[#3B2F4A]" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 21l-8-4.5v-9L12 3l8 4.5v9l-8 4.5zM12 5.3L6 8.7v6.6l6 3.4 6-3.4V8.7l-6-3.4z" />
             </svg>
           </div>
           <span className="font-bold text-lg tracking-tight">Bookshop</span>
         </div>
     
         
         <nav className="flex gap-8 text-sm font-medium">
           <a href="#" className="text-pink-500 hover:text-pink-400">Home</a>
           <a href="#" className="hover:text-pink-500 transition-colors">Books</a>
           <a href="#" className="hover:text-pink-500 transition-colors">About Us</a>
         </nav>
     
         
         <div className="flex gap-5">
           <a href="#" className="hover:scale-110 transition-transform"><span className="text-xl text-gray-300 hover:text-white"><MdOutlineFacebook /></span></a>
     
           <a href="#" className="hover:scale-110 transition-transform"><span className="text-xl text-gray-300 hover:text-white"><IoLogoInstagram /></span></a>
     
           <a href="#" className="hover:scale-110 transition-transform"><span className="text-xl text-gray-300 hover:text-white"> <IoLogoYoutube /></span></a>
      
           <a href="#" className="hover:scale-110 transition-transform"><span className="text-xl text-gray-300 hover:text-white"><RiTwitterXLine /></span></a>
         </div>
       </div>
     
      
       <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-[11px] text-gray-400 gap-4">
         <p>&lt;Developed By&gt; EraaSoft &lt;All Copy Rights Reserved @2024</p>
         
         <div className="flex items-center gap-4">
          
           <div className="flex items-center gap-1">
             <span>🌐</span>
           </div>
           
           
           <div className="border border-gray-500 px-3 py-1 rounded flex items-center gap-2 cursor-pointer hover:bg-gray-700">
             <span>English</span>
             <span className="text-[8px]">▼</span>
           </div>
         </div>
       </div>
     </footer>
    </>
  )
}
