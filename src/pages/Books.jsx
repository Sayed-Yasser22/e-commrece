import React from 'react'
import { FaStar, FaRegHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useAuthstore } from '../store';
import { Link } from 'react-router-dom';
const categories = [
  "Business",
  "Self Help",
  "History",
  "Romance",
  "Fantasy",
  "Art",
  "Kids",
  "Music",
  "Cooking",
];

const books = Array(3).fill({
  id: Math.random(),   // معرف فريد لكل كتاب
  title: "Rich Dad And Poor Dad",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
  author: "Robert T. Kiyosaki",
  year: "1997",
  price: "$40.00",
  rating: 4.2,
  reviews: 210,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
});

export default function BooksSection() {
  
  const addToCart = useAuthstore((state) => state.addToCart);

  return (
    <>
      <section className="bg-[#F5F5F5] py-30">
        <div className=" relative z-10  container mx-auto px-6 flex gap-6 ">

          {/* Filter Sidebar  */}
          <aside className="w-1/4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Filter</h3>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2 text-sm">
                {categories.map((cat, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input type="checkbox" />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 text-sm text-gray-500 cursor-pointer">
              Publisher
            </div>
            <div className="border-t pt-4 mt-2 text-sm text-gray-500 cursor-pointer">
              Year
            </div>
          </aside>

          {/* Books Content */}
          <div className="w-3/4">

            {/* Search & Sort */}
            <div className="relative w-full flex items-center gap-4 mb-6">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2  text-pink-500" />

              <input
                type="text"
                placeholder="Search"
                className="w-full border border-pink-500 rounded-lg py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <select className="border rounded-lg px-4 py-2">
                <option>Sort by</option>
              </select>
            </div>

            {/* Categories Tabs */}
            <div className="flex gap-3 mb-6 flex-wrap">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`px-4 py-1 rounded-full border text-sm ${
                    i === 0
                      ? "bg-pink-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Books List  */}
            <div className="space-y-6">
              {books.map((book, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 flex gap-5 shadow-sm">
                
                  {/* Image */}
                  <Link to={`/product/${book.id}`}>
                  
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-32 h-40 object-cover rounded-lg"
                  />
                  
                  </Link>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <Link to={`/product/${book.id}`}>
                      <h3 className="font-semibold text-lg">
                        {book.title}
                      </h3>
                      
                      </Link>
                      <span className="text-xs border border-yellow-400 text-yellow-600 px-2 py-1 rounded-full">
                        25% Discount code: NE212
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 mt-2">
                      {book.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-3 text-sm">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <span className="text-gray-500">
                        ({book.reviews} Review)
                      </span>
                    </div>

                    <div className="flex gap-6 text-xs text-gray-500 mt-3">
                      <span>
                        <b>Author:</b> {book.author}
                      </span>
                      <span>
                        <b>Year:</b> {book.year}
                      </span>
                    </div>
                  </div>

                  {/* Price & Actions */}
                  <div className="flex flex-col items-end justify-between">
                    <span className="font-semibold text-lg">
                      {book.price}
                    </span>

                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          if (addToCart) {
                            addToCart(book);
                          } else {
                            console.error("addToCart is still undefined. Check your Store");
                          }
                        }}
                        className="cursor-pointer bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-pink-700 transition-colors active:scale-95"
                      >
                        <FaShoppingCart />
                        Add To Cart
                      </button>
                      <button className="border border-pink-600 text-pink-600 p-2 rounded-lg hover:bg-pink-50 transition-colors">
                        <FaRegHeart />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}