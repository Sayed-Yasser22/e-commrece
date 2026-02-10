import React from 'react'
import { FaCarSide } from 'react-icons/fa'
import { FcCustomerSupport } from 'react-icons/fc'
import { GiReticule } from 'react-icons/gi'
import { IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'
import { MdOutlineFacebook } from 'react-icons/md'
import { RiSecurePaymentLine, RiTwitterXLine } from 'react-icons/ri'
// import { useNavigate } from 'react-router-dom'

export default function HomePages() {

  

  //  const navigate = useNavigate();


  return (
      <> 

      
      
    <div className='bg-white relative min-h-screen flex items-center justify-center'>
     <img className=" absolute inset-0 w-full h-201 bg-center scale-x-[-1] " src="533643aa8db82414f48d43a992d009dda3961386.png" alt=""/>

     <div className='  z-10  absolute inset-0 bg-[#3B2F4A]/'></div>

     <div className="rflex items-center w-[90%] max-w-134 h-14.75 bg-white rounded-full pl-6 pr-2 shadow-2xl">
          <input
            type="text"
            placeholder="Search"
            className="  grow bg-transparent border-none outline-none text-gray-700 text-lg placeholder:text-gray-400"/>
            </div>
      
    </div>


      <section className="py-60 bg-[#f5f5f5] ">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="flex flex-col items-center text-justify gap-3">
        <span className="text-4xl pr-55 "><FaCarSide /></span>
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
 

 {/* Start section book */}

<section className='bg-[#3B2F4A] py-16 px-8 text-center text-white overflow-hidden'>

    <div className="max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4">Best Seller</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultrices elit. Aliquam in justo varius, sagittis neque ut, malesuada leo.
        </p>
      </div>

      <div className="flex flex-nowrap justify-center items-end gap-5 mb-12">
    
    {/* Book 1 */}
    <div className="w-32 md:w-40 transition-transform hover:scale-105">
      <img src="03e6a888f25ecc86e317e35c9f91c8c30c64b35e.jpg" alt="Rich Dad" className="rounded shadow-xl" />
    </div>
    
    {/* Book 2 */}
    <div className="w-32 md:w-40 transition-transform hover:scale-105">
      <img src="0d3a1ade0d5cf7e267b48d4ad0b355bac73a3db0.jpg" alt="Design of Everyday Things" className="rounded shadow-xl" />
    </div>

    {/* BOOk 3 */}

    <div className="w-32 md:w-40 transition-transform hover:scale-105">
      <img src="28aba63bdc086aa49f1169be9ff5208128b5a8af.jpg" alt="Design of Everyday Things" className="rounded shadow-xl" />
    </div>

    {/*Book 4 */}

    <div className="w-32 md:w-40 transition-transform hover:scale-105">
      <img src="e7a63dace18f214af63005731d2c8a3964cc30ae.png" alt="Design of Everyday Things" className="rounded shadow-xl" />
    </div>


    {/* Book 5 */}

    <div className="w-32 md:w-40 transition-transform hover:scale-105">
      <img src="6d9d091de0e9c20b618cba0b9f935885da4cdb82.jpg" alt="Design of Everyday Things" className="rounded shadow-xl" />
    </div>


    {/*Book 6 */}

    <div className="w-32 md:w-40 transition-transform hover:scale-105">
      <img src="71cd2100a54a321ee4e0f9170a9485f8f2d1f3d2.jpg" alt="Design of Everyday Things" className="rounded shadow-xl" />
    </div>

    {/*Book 7 */}

    <div className="w-32 md:w-40 transition-transform hover:scale-105">
      <img src="84c641b61f0b01a81c58e362400f0110095da7e8.png" alt="Design of Everyday Things" className="rounded shadow-xl" />
    </div>


    {/*Book 8 */}


    <div className="w-32 md:w-40 transition-transform hover:scale-105">
      <img src="/public/93e9747c9160601f7f3a7a57420103fe4025b18a.png" alt="Design of Everyday Things" className="rounded shadow-xl" />
    </div>



    
  </div>

    <button className="bg-[#D81B60] text-white px-10 py-2 rounded-md hover:bg-[#b0154e] transition-all">
    Shop now
  </button>
  
</section>


{/* End section book */}



{/*Start section Recommended For You */}


<section className="py-12 px-6 md:px-16 bg-[#F9F9F9]">
  <h2 className="text-2xl font-bold mb-8 text-gray-800">Recommended For You</h2>

  {/* الحاوية الأساسية بتقسيم عمودين في الشاشات الكبيرة */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    {/* الكارت الأول - Rich Dad Poor Dad */}
    <div className="bg-white p-5 flex gap-5 border border-gray-100 shadow-sm">
      {/* الصورة على الشمال */}
      <div className="w-35 shrink-0">
        <img src="93e9747c9160601f7f3a7a57420103fe4025b18a.png" alt="Rich Dad" className="w-full h-auto shadow-md" />
      </div>

      {/* تفاصيل الكتاب على اليمين */}
      <div className="flex flex-col justify-between grow">
        <div>
          <h3 className="text-lg font-bold text-gray-900 leading-tight">Rich Dad And Poor Dad</h3>
          <p className="text-[10px] text-gray-400 mt-1">Author: Robert T. Kiyosaki</p>
          <p className="text-xs text-gray-500 mt-3 leading-relaxed line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultrices elit. Aliquam in justo varius, sagittis neque ut, malesuada leo.
          </p>
          
          {/* التقييم والنجوم */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex text-yellow-400 text-xs">★★★★☆</div>
            <span className="text-[10px] text-gray-400">(180 Review)</span>
          </div>

          {/* السعر والتقييم الرقمي */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-xs font-semibold text-gray-500">Rate: 4.2</span>
            <span className="text-xl font-bold text-gray-900">$30.00</span>
          </div>
        </div>

        {/* الزراير */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-[#D81B60] text-white py-2 px-4 rounded-sm text-sm font-medium flex items-center justify-center gap-2">
            Add To Cart 🛒
          </button>
          <button className="p-2 border border-pink-100 rounded-sm text-[#D81B60] hover:bg-pink-50">
            ❤
          </button>
        </div>
      </div>
    </div>

    {/* الكارت الثاني - The Design Of Books */}
    <div className="bg-white p-5 flex gap-5 border border-gray-100 shadow-sm">
      <div className="w-35 shrink-0">
        <img src="28aba63bdc086aa49f1169be9ff5208128b5a8af.jpg" alt="Design Books" className="w-full h-auto shadow-md" />
      </div>

      <div className="flex flex-col justify-between grow">
        <div>
          <h3 className="text-lg font-bold text-gray-900 leading-tight">The Design Of Books</h3>
          <p className="text-[10px] text-gray-400 mt-1">Author: Debbie Berne</p>
          <p className="text-xs text-gray-500 mt-3 leading-relaxed line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultrices elit. Aliquam in justo varius, sagittis neque ut, malesuada leo.
          </p>
          
          <div className="flex items-center gap-2 mt-3">
            <div className="flex text-yellow-400 text-xs">★★★★☆</div>
            <span className="text-[10px] text-gray-400">(210 Review)</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-xs font-semibold text-gray-500">Rate: 4.2</span>
            <span className="text-xl font-bold text-gray-900">$40.00</span>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-[#D81B60] text-white py-2 px-4 rounded-sm text-sm font-medium flex items-center justify-center gap-2">
            Add To Cart 🛒
          </button>
          <button className="p-2 border border-pink-100 rounded-sm text-[#D81B60] hover:bg-pink-50">
            ❤
          </button>
        </div>
      </div>
    </div>

  </div>
</section>


{/*End Recommended For You*/}


{/* start */}



<section className="bg-[#F5F5F5] py-16 px-6 md:px-16 relative">
  {/* Header Section: Title & Timer */}
  <div className="flex justify-between items-start mb-10">
    <div className="max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Flash Sale</h2>
      <p className="text-xs text-gray-500 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultrices elit. Aliquam in justo varius, sagittis neque ut, malesuada leo.
      </p>
    </div>

    {/* Timer Circle - Static */}
    <div className="relative flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-pink-500 rounded-full flex items-center justify-center border-t-transparent -rotate-45">
        <span className="font-bold text-gray-800 rotate-45 text-sm">30:00:00</span>
      </div>
    </div>
  </div>

  {/* Cards Container */}
  <div className="flex justify-center gap-6 relative">
    
    {/* Navigation Arrows (Static) */}
    <button className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400">
      ‹
    </button>

    {/* Flash Sale Card 1 */}
    <div className="bg-[#3B2F4A] text-white p-4 rounded-xl flex gap-4 w-100 shrink-0">
      <img src="/public/93e9747c9160601f7f3a7a57420103fe4025b18a.png" alt="book" className="w-30 h-auto rounded-lg object-cover" />
      
      <div className="grow flex flex-col justify-between py-1">
        <div>
          <h3 className="text-sm font-bold">Rich Dad And Poor Dad</h3>
          <p className="text-[10px] text-gray-300">Author: Robert T. Kiyosaki</p>
          
          <div className="flex text-yellow-400 text-[10px] mt-2 italic">
            ★★★★☆ <span className="text-gray-400 ml-1">(180 Review)</span>
          </div>
          <p className="text-[10px] text-gray-300 mt-1">Rate: 4.2</p>
        </div>

        <div className="mt-4">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-gray-400 line-through text-xs">$45.00</span>
            <span className="text-lg font-bold text-white">$30.00</span>
          </div>
          
          {/* Progress Bar */}
          <p className="text-[9px] text-gray-300 mb-1">4 books left</p>
          <div className="w-full bg-gray-600 h-1.5 rounded-full overflow-hidden">
            <div className="bg-pink-500 h-full w-[40%]" />
          </div>
        </div>
      </div>

      {/* Cart Icon Button */}
      <div className="self-end">
        <button className="bg-[#D81B60] p-2 rounded-lg text-white">🛒</button>
      </div>
    </div>

    {/* Flash Sale Card 2 (Duplicate) */}
    <div className="bg-[#3B2F4A] text-white p-4 rounded-xl flex gap-4 w-100 shrink-0">
       <img src="/public/93e9747c9160601f7f3a7a57420103fe4025b18a.png" alt="book" className="w-30 h-auto rounded-lg object-cover" />
       <div className="grow flex flex-col justify-between py-1">
          <div>
            <h3 className="text-sm font-bold">Rich Dad And Poor Dad</h3>
            <p className="text-[10px] text-gray-300">Author: Robert T. Kiyosaki</p>
            <div className="flex text-yellow-400 text-[10px] mt-2">★★★★☆</div>
          </div>
          <div className="mt-4">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-gray-400 line-through text-xs">$45.00</span>
              <span className="text-lg font-bold text-white">$30.00</span>
            </div>
            <div className="w-full bg-gray-600 h-1.5 rounded-full overflow-hidden">
              <div className="bg-pink-500 h-full w-[40%]" />
            </div>
          </div>
       </div>
       <div className="self-end">
        <button className="bg-[#D81B60] p-2 rounded-lg text-white">🛒</button>
      </div>
    </div>

    <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400">
      ›
    </button>
  </div>
</section>


{/*End */}

{/* Start footer */}


{/* <footer className="bg-[#3B2F4A] text-white py-12 px-6 md:px-20">
  
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
</footer> */}


    </>

    
  )
}

