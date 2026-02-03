import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBook } from 'react-icons/fa'

export default function Navbar() {
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
          <li>
            <NavLink
              to="/login"
              className="bg-[#D9176C] px-4 py-2 rounded-2xl"
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/sign-up"
              className="bg-pink-950 px-4 py-2 rounded-2xl"
            >
              Sign Up
            </NavLink>
          </li>
        </ul>

      </div>
    </header>
  )
}
