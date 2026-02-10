import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBook } from 'react-icons/fa'
import { useAuthstore } from '../../store'
import { MdFavoriteBorder } from 'react-icons/md'
import { SlBasket } from 'react-icons/sl'


export default function Navbar() {

   const isAuthenticated = useAuthstore((state) => state.isAuthenticated)
   const logout = useAuthstore((state) => state.logout)

    const navigate = useNavigate();

    const userprofile = JSON.parse(localStorage.getItem("profile"))


    


   

  //  console.log(isAuthenticated )

  
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


        <ul className=" btn_btn flex items-center gap-4">



          { <li>
            <NavLink
              to="/login"
              className="" onClick={isAuthenticated ? logout : () => {
                navigate("/login")
              }}>
          
            {
              isAuthenticated ? (
                <>
                <div className='profile flex items-center gap-8 '>
                  <div className='icons flex items-center gap-4 '>

                    <MdFavoriteBorder size={"30px"}/>
                    <SlBasket size={"30px"} />

                  </div>
                  <div className='profile_details flex items-center gap-2'>
                <img className='w-12.5 h-12.5 rounded-full' src='7098886df02b2521176bde95e31347ff1428d87f.jpg' alt=''></img>
                <div className='info'>
                <div className='name'>{userprofile?.first_name} {userprofile?.last_name} </div>
                <div className='email'> {userprofile?.email} </div>
                </div>
                  </div>

                </div>
              </>
              ) :(
                <>
                <Link className='px-4 py-2.75 mx-3 bg-pink-500 text-white rounded-2xl' to={"/login"}>login</Link>
                <Link className='px-4 py-2.75 bg-white text-pink-500 border border-pink-500 rounded-2xl' to={"/sign-up"}>sign-up</Link>
                </>
              ) 
            }
             
            </NavLink>
            
          </li> }

        

          {/* {<li>
            <NavLink
              to="/sign-up"
              className="bg-pink-950 px-4 py-2 rounded-2xl"
            >
              Sign Up
            </NavLink>
          </li> } */}
        </ul>

      </div>
    </header>
  )
}

               