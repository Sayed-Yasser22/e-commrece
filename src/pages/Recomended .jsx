import React from 'react';
import { FaStar } from "react-icons/fa";

const recommendedData = [
  { id: 101, title: "Think and Grow Rich", author: "Napoleon Hill", price: "$35.00", image: "https://m.media-amazon.com/images/I/71UypkUjStL._AC_UF1000,1000_QL80_.jpg" },
  { id: 102, title: "The Intelligent Investor", author: "Benjamin Graham", price: "$42.00", image: "https://m.media-amazon.com/images/I/919mmNCTaaL.jpg" },
  { id: 103, title: "Atomic Habits", author: "James Clear", price: "$38.00", image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" },
  { id: 104, title: "The Psychology of Money", author: "Morgan Housel", price: "$30.00", image: "/28aba63bdc086aa49f1169be9ff5208128b5a8af.jpg" },
];

export default function RecommendedBooks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
      {recommendedData.map((book) => (
        <div key={book.id} className="group cursor-pointer">
          <div className="bg-[#F9F9F9] p-4 rounded-2xl border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
            <img 
              src={book.image} 
              alt={book.title} 
              className="w-full h-48 object-contain rounded-lg mb-4" 
            />
            <h4 className="font-bold text-gray-800 text-sm truncate">{book.title}</h4>
            <p className="text-gray-400 text-xs mt-1">{book.author}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-pink-600 font-bold text-sm">{book.price}</span>
              <div className="flex text-yellow-400 text-[10px]">
                <FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}