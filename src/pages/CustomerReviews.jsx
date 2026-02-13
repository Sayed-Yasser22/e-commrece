import React from 'react';
import { FaStar } from "react-icons/fa";

const reviewsData = [
  { 
    id: 1, 
    name: "John Smith", 
    date: "20/07/2024", 
    rating: 5, 
    comment: "Excellent Book! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.", 
    avatar: "https://i.pravatar.cc/150?u=john" 
  },
  { 
    id: 2, 
    name: "sayed yasser", 
    date: "18/07/2024", 
    rating: 4, 
    comment: "Very insightful, highly recommend it for beginners who want to understand the basics of finance.", 
    avatar: "https://i.pravatar.cc/150?u=sara" 
  },
  { 
    id: 3, 
    name: "Michael Roe", 
    date: "15/07/2024", 
    rating: 5, 
    comment: "A life-changing read. The layout and quality of the book are also great.", 
    avatar: "https://i.pravatar.cc/150?u=mike" 
  }
];

export default function CustomerReviews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
      {reviewsData.map((rev) => (
        <div key={rev.id} className="bg-[#F9F9F9] p-6 rounded-2xl border border-gray-100 shadow-sm transition-hover hover:shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={rev.avatar} 
              alt={rev.name} 
              className="w-12 h-12 rounded-full border-2 border-white shadow-sm" 
            />
            <div>
              <h4 className="font-bold text-gray-800 text-sm">{rev.name}</h4>
              <span className="text-[10px] text-gray-400 uppercase font-semibold">Verified Purchase</span>
            </div>
            <div className="ml-auto flex flex-col items-end">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={12} className={i < rev.rating ? "text-yellow-400" : "text-gray-200"} />
                    ))}
                </div>
                <span className="text-[10px] text-gray-400 mt-1">{rev.date}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed italic">
            "{rev.comment}"
          </p>
        </div>
      ))}
    </div>
  );
}