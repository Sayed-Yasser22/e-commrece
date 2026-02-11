import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBook } from 'react-icons/fa'
import { useAuthstore } from '../../store'
import { MdFavoriteBorder } from 'react-icons/md'
import { SlBasket } from 'react-icons/sl'
import { IoChevronDown } from "react-icons/io5"



export default function Navbar() {


   const isAuthenticated = useAuthstore((state) => state.isAuthenticated)
   const cart = useAuthstore((state) => state.cart)
   const logout = useAuthstore((state) => state.logout)

    const navigate = useNavigate();

    const userprofile = JSON.parse(localStorage.getItem("profile"))

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef()


useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)
  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [])
   


  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 border-b border-white/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* logo + links مع يعض */}
        <div className="flex items-center gap-8">

        <Link to="/" className="flex items-center gap-1 text-lg font-semibold">
          <FaBook className="text-xl" />
          <span>Bookshop</span>
        </Link>

       
        <ul className="flex items-center gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-pink-300 rounded-2xl px-3 py-1" : ""
            }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? "bg-pink-300 rounded-2xl px-3 py-1" : ""
            }
            >
              Books
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "bg-pink-300 rounded-2xl px-3 py-1" : ""
            }
            >
              About
            </NavLink>
          </li>
        </ul>

      </div>

        {/* sign up login لوحدهم  */}


       <ul className="flex items-center gap-4">

  {isAuthenticated ? (
  <li className="relative" ref={dropdownRef}>
    
    <div
      onClick={() => setOpen(!open)}
      className="profile flex items-center gap-8 cursor-pointer"
    >
     <div className="icons flex items-center gap-4">
  <MdFavoriteBorder size="30px" className="cursor-pointer" />
  
  {/* الجزء الجديد الخاص ب السلة */}
  <div className="relative cursor-pointer">
    <SlBasket size="30px" />
    
    {cart.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#1a1a1a]">
        {cart.length}
      </span>
    )}
  </div>
</div>

      <div className="profile_details flex items-center gap-2">
        <img
          className="w-12 h-12 rounded-full"
          src="7098886df02b2521176bde95e31347ff1428d87f.jpg"
          alt=""
        />

        <div className="info">
          <div className="name">
            {userprofile?.first_name} {userprofile?.last_name}
          </div>
          <div className="email text-sm opacity-70">
            {userprofile?.email}
          </div>
        </div>

        <IoChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </div>
    </div>

    {/* Dropdown */}
    {open && (
      <div className="absolute right-0 mt-4 w-56 bg-white text-black rounded-xl shadow-lg p-3 z-50">

        <button
          onClick={() => {
            navigate("/profile")
            setOpen(false)
          }}
          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg"
        >
          Profile
        </button>

        <button
          onClick={() => {
            navigate("/orders")
            setOpen(false)
          }}
          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg"
        >
          Order History
        </button>

        <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
          Address
        </button>

        <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
          Help
        </button>

        <hr className="my-2" />

        <button
          onClick={() => {
            logout()
            navigate("/login")
          }}
          className="w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100 rounded-lg"
        >
          Log Out
        </button>

      </div>
    )}
  </li>
) : (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/sign-up">Sign up</Link>
      </li>
    </>
  )}
  </ul>

      </div>
    </header>
  )
}

               