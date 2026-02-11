import React from 'react'

export default function Profile() {
  return (
    <>
     <div className="min-h-screen bg-[#F5F5F5] pb-10">
      
      {/* 1. الخلفية (Hero Background) */}
      <div 
        className="h-62.5 w-full bg-cover bg-center relative">
    
        <img className='h-62.5 w-full bg-cover bg-center relative' src='/public/533643aa8db82414f48d43a992d009dda3961386.png'></img>
        {/* لو حابب تضيف أي نص فوق الصورة ممكن هنا */}
      </div>

      {/* حاوية المحتوى اللي في النص */}
      <div className="max-w-150 mx-auto px-4">
        
        {/* 2. الصورة الشخصية (Avatar) */}
        <div className="relative -mt-16 mb-8 flex justify-center">
          <div className="relative group">
            <img 
              src="/public/7098886df02b2521176bde95e31347ff1428d87f.jpg" 
              alt="Profile avatar" 
              className="w-32 h-32 rounded-full border-[5px] border-white object-cover shadow-md"
            />
            {/* زرار التعديل الصغير */}
            <button className="absolute bottom-1 right-1 bg-[#D81B60] text-white p-2 rounded-full border-2 border-white shadow-sm hover:bg-[#b0134d] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3. بوكس البيانات (Information Card) */}
        <div className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] p-8 md:p-10">
          <h2 className="text-center text-gray-700 text-lg font-semibold mb-8">General Information</h2>
          
          <form className="space-y-5">
            {/* صف الاسم الأول والأخير */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-gray-400 font-medium ml-1">First Name</label>
                <input 
                  type="text" 
                  defaultValue="John" 
                  className="w-full bg-[#F9FAFB] border border-gray-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-[#D81B60] transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400 font-medium ml-1">Last Name</label>
                <input 
                  type="text" 
                  defaultValue="Smith" 
                  className="w-full bg-[#F9FAFB] border border-gray-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-[#D81B60] transition-all"
                />
              </div>
            </div>

            {/* الإيميل */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-medium ml-1">Email</label>
              <input 
                type="email" 
                defaultValue="John.smith@gmail.com" 
                className="w-full bg-[#F9FAFB] border border-gray-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-[#D81B60] transition-all"
              />
            </div>

            {/* رقم الهاتف */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-medium ml-1">Phone number</label>
              <input 
                type="text" 
                defaultValue="123456789" 
                className="w-full bg-[#F9FAFB] border border-gray-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-[#D81B60] transition-all"
              />
            </div>

            {/* العنوان */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-medium ml-1">Address</label>
              <input 
                type="text" 
                defaultValue="Maadi, Cairo, Egypt" 
                className="w-full bg-[#F9FAFB] border border-gray-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-[#D81B60] transition-all"
              />
            </div>

            {/* زر التحديث */}
            <div className="flex justify-center pt-6">
              <button 
                type="submit" 
                className="bg-[#D81B60] text-white px-12 py-3 rounded-xl font-semibold text-sm hover:bg-[#ad1457] hover:shadow-lg transition-all active:scale-95"
              >
                Update Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ;

    </>
  )
}
