import React from 'react'
import { FaArrowRight, FaCarSide } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { FcCustomerSupport } from 'react-icons/fc'
import { GiReticule } from 'react-icons/gi'
import { MdOutlinePhoneInTalk, MdOutlineSms } from 'react-icons/md'
import { RiSecurePaymentLine } from 'react-icons/ri'

export default function AboutPages() {
  return (
    <>
   <div className="relative w-full h-201">
  
  <img
    className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
    src="533643aa8db82414f48d43a992d009dda3961386.png"
    alt=""
  />
  
  <div className="absolute inset-0 bg-black/70"></div>


<div className=' absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 '>

  <h2 className='text-4xl text-white font-bold  mb-5'>About Bookshop</h2>
  <p className='max-w-xl text-white text-2xl  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
</div>
</div>


<section className='bg-[#f5f5f5] py-30  '>
    
  <h2 className='text-3xl font-bold text-center'>Our Mission</h2>

    {/* الحاويه اللي هتشيل ال 3 عناصر */}

  <div className='grid grid-cols-3 gap-5 py-10 '>
     {/* او عنصر */}

    <div className='bg-white h-80.5 w-90.5  flex-col justify-center py-10 gap-5 border border-gray-100 shadow-sm    rounded-2xl mx-auto '>

          <h2 className='text-[20px] text-[#222222] px-5 '>Quality Selection</h2>


     <p className='text-[#22222280] px-5 py-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,</p>

    <span className='text-amber-600 flex items-center gap-3 p-5 '>View More <FaArrowRight/></span>
    </div>


    <div className='bg-white  h-80.5 w-90.5  flex-col justify-center py-10 gap-5 border border-gray-100 shadow-sm rounded-2xl mx-auto'>

          <h2 className='text-[20px] text-[#222222] px-5 '>Quality Selection</h2>


     <p className='text-[#22222280] px-5 py-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,</p>

    <span className='text-amber-600 flex items-center gap-3 p-5 '>View More <FaArrowRight/></span>
    </div>


    <div className='bg-white  h-80.5 w-90.5  flex-col justify-center py-10 gap-5 border border-gray-100 shadow-sm rounded-2xl mx-auto'>

          <h2 className='text-[20px] text-[#222222] px-5 '>Quality Selection</h2>


     <p className='text-[#22222280] px-5 py-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,</p>

    <span className='text-amber-600 flex items-center gap-3 p-5 '>Soon</span>
    </div>


  </div>
</section>

<main className='w-full relative h-200 '>

<img  className='absolute inset-0 w-full h-full object-cover ' src='d14d7655b7dfc0cacd1072cd70a68c579726248e.jpg' alt=''></img>


<div className="absolute inset-0 bg-black/70"></div>


  <div class=" container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    <div className='mx-auto py-30'>
      <h3 class="text-5xl font-semibold text-white mb-2">Have a Questions?</h3>
      <h2 class="text-5xl font-bold text-white mb-6">Get in Touch</h2>
      <p class="text-gray-300 mb-8 max-w-lg leading-relaxed text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
      </p>

      <form class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="relative">
            <i class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 far fa-user text-sm"></i>
            <input type="text" placeholder="Name" class="w-full bg-transparent border border-gray-500 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:border-pink-500 transition-all placeholder:text-gray-400"></input>
          </div>
          <div class="relative">
            <i class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 far fa-envelope text-sm"></i>
            <input type="email" placeholder="Email Address" class="w-full bg-transparent border border-gray-500 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:border-pink-500 transition-all placeholder:text-gray-400"></input>
          </div>
        </div>

        <div class="relative">
          <i class="absolute left-4 top-4 text-gray-400 fas fa-pen text-xs"></i>
          <textarea rows="5" placeholder="Your Message" class="w-full bg-transparent border border-gray-500 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:border-pink-500 transition-all placeholder:text-gray-400 resize-none"></textarea>
        </div>

        <button type="submit" class="bg-[#E91E63] hover:bg-[#d81b5c] text-white font-semibold py-3 px-10 rounded-md transition-all shadow-lg active:scale-95">
          Send Message
        </button>
      </form>
    </div>

    <div class="flex flex-col space-y-8 lg:pl-16">
      
      <div class="flex items-center space-x-4 group">
        <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#3B2F4A] transition-transform group-hover:scale-110">
          <i class="fas fa-phone-alt text-pink-600"><MdOutlinePhoneInTalk /></i>
        </div>
        <span class="text-lg font-medium text-white">01123456789</span>
      </div>

      <div class="flex items-center space-x-4 group">
        <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#3B2F4A] transition-transform group-hover:scale-110">
          <i class="fas fa-envelope text-pink-600 "><MdOutlineSms/></i>
        </div>
        <span class="text-lg font-medium text-white">Example@gmail.com</span>
      </div>

      <div class="flex items-start space-x-4 group">
        <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#3B2F4A] shrink-0 transition-transform group-hover:scale-110">
          <i class="fas fa-map-marker-alt text-pink-600"><FaLocationDot/></i>
        </div>
        <span class="text-lg font-medium leading-tight text-white">adipiscing elit. Mauris et ultricies est. Aliquam in justo varius.</span>
      </div>

    </div>
  </div>

</main>


<section className="py-60 bg-[#f5f5f5] ">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="flex flex-col items-center text-justify gap-3">
        <span className="text-4xl pr-55 "><FaCarSide/></span>
        <h3 className="text-xl font-semibold pr-11">Fast & Reliable Shipping</h3>
        <p className="text-gray-600 leading-snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          ultricies est. Aliquam in justo varius,
        sagittis neque ut, malesuada leo.
        </p>
      </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-justify gap-3">

      <span className="text-4xl pr-55"><RiSecurePaymentLine /></span>

      <h3 className="text-xl font-semibold pr-28">Secure Payment</h3>
      <p className="text-gray-600 leading-snug">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-justify gap-3">
      <span className="text-4xl pr-55"><GiReticule /></span>
      <h3 className="text-xl font-semibold pr-36">Easy Returns</h3>
      <p className="text-gray-600 leading-snug">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        ultricies est. Aliquam in justo varius,
        sagittis neque ut, malesuada leo.
      </p>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center text-justify gap-3">
      <span className="text-4xl pr-55"><FcCustomerSupport/></span>
      <h3 className="text-xl font-semibold pr-11">24/7 Customer Support</h3>
      <p className="text-gray-600 leading-snug">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        ultricies est. Aliquam in justo varius,
        sagittis neque ut, malesuada leo.
      </p>
    </div>

  </div>
</section>


    </>
  )
}
