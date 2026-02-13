import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaRegHeart, FaShoppingCart, FaShareAlt } from "react-icons/fa";
import { useAuthstore } from '../store';
import CustomerReviews from './CustomerReviews';
import RecommendedBooks from './Recomended ';


const dummyBook = {
  title: "Rich Dad And Poor Dad",
  author: "Robert T. Kiyosaki",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Sed non elit at nisl.",
  price: "$40.00",
  rating: 4.8,
  reviews: 210,
  image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
  publisher: "Warner Books",
  year: "1997",
  language: "English",
  pages: "336"
};

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState('details'); 
  const { id } = useParams();
  const addToCart = useAuthstore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-25">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-75 shrink-0">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <img 
                src={dummyBook.image} 
                alt={dummyBook.title} 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="flex gap-2 mt-4">
                {[1, 2, 3].map((_, i) => (
                  <img key={i} src={dummyBook.image} alt="preview" className="w-16 h-20 object-cover rounded border cursor-pointer hover:border-pink-500" />
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm self-stretch">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{dummyBook.title}</h1>
                <p className="text-gray-500 mt-1">By {dummyBook.author}</p>
              </div>
              <div className="flex gap-3 text-gray-400">
                <FaShareAlt className="cursor-pointer hover:text-pink-600" />
                <FaRegHeart className="cursor-pointer hover:text-pink-600" />
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
              </div>
              <span className="text-sm text-gray-400">4.2 ({dummyBook.reviews} Review)</span>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">In Stock</span>
            </div>

            <p className="text-gray-600 mt-6 text-sm leading-relaxed max-w-2xl">
              {dummyBook.description}
            </p>

            <div className="text-2xl font-bold text-gray-900 mt-8">
              {dummyBook.price} <span className="text-gray-400 text-lg line-through ml-2">$45.00</span>
            </div>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 gap-4">
                <button onClick={decrement} className="text-gray-500 hover:text-pink-600 font-bold">-</button>
                <span className="font-bold w-4 text-center">{quantity}</span>
                <button onClick={increment} className="text-gray-500 hover:text-pink-600 font-bold">+</button>
              </div>

              <button 
                onClick={() => addToCart({ ...dummyBook, id, quantity })}
                className="bg-pink-600 text-white px-10 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-pink-700 transition-all active:scale-95 shadow-md shadow-pink-100"
              >
                <FaShoppingCart size={18} /> Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-100 bg-[#FAFAFA]">
            <button 
              onClick={() => setActiveTab('details')}
              className={`px-8 py-4 font-bold transition-all ${activeTab === 'details' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Product Details
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`px-8 py-4 font-bold transition-all ${activeTab === 'reviews' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Customer Reviews
            </button>
            <button 
              onClick={() => setActiveTab('recommended')}
              className={`px-8 py-4 font-bold transition-all ${activeTab === 'recommended' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Recommended For You
            </button>
          </div>
          
          {/* منطقة عرض المحتوى (Content Area) */}
          <div className="p-8">
            {activeTab === 'details' && (
              <div className="text-sm text-gray-600 space-y-2 animate-fadeIn">
                <p><strong>Book Title:</strong> {dummyBook.title}</p>
                <p><strong>Author:</strong> {dummyBook.author}</p>
                <p><strong>Publication Date:</strong> {dummyBook.year}</p>
                <p><strong>Pages:</strong> {dummyBook.pages}</p>
                <p><strong>Language:</strong> {dummyBook.language}</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="animate-fadeIn">
                <CustomerReviews />
              </div>
            )}

            {activeTab === 'recommended' && (
              <div className="animate-fadeIn text-center py-10 text-gray-400 italic">
                <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-bold text-gray-800">Books You May Like</h3>
      <button className="text-pink-600 text-sm font-semibold hover:underline">View All</button>
    </div>
    <RecommendedBooks />
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}