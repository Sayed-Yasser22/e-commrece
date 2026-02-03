
import { FaBook, FaGoogle } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handlelogin = async (values) => {
    try {
      // 👇 نفس اللي في Postman (form-data)
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);

      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/login",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const token = res.data.data.token;
      localStorage.setItem("userToken", token);

      console.log("Login Success:", res.data);

      navigate("/")
    

    } catch (error) {
      console.log("Login Error:", error.response?.data);
    }
  };

  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (

        <div className="bg-white">
        <img className="w-full h-80 bg-center scale-x-[-1] " src="/public/533643aa8db82414f48d43a992d009dda3961386.png" alt=""/>
        

    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handlelogin}
      >
        <Form className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm">

          <h2 className="text-center text-pink-600 font-medium mb-6">
            Welcome Back!
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>

            <Field
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <ErrorMessage   name="email" component={"p"} className="text-red-500 py-2 font-semibold"


            />
           
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <Field
              name="password"
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-red-500"
            />

          <ErrorMessage   name="password" component={"p"} className="text-red-500 py-2 font-semibold"/>


            <div className="flex items-center justify-between text-sm pt-5 mb-7">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-pink-600" />
                Remember me
              </label>

              <a href="#" className="text-pink-600 hover:underline">
                Forget password?
              </a>
            </div>
          </div>

          <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-lg
         hover:bg-pink-700 transition mb-4">Log in</button>
          
            

          <p className="text-center py-10">
            Don’t have an account? Signup
          </p>

          <p className="text-center mb-5 text-pink-600">or</p>

          <button
            type="button"
            className="w-full border border-gray-200 py-2 rounded-lg
                       flex items-center justify-center gap-2 mb-3 hover:bg-gray-50"
          >
            <FaGoogle className="text-red-500 text-3xl" />
            Login with Google
          </button>

          <button
            type="submit"
            className="w-full border border-gray-200 py-2 rounded-lg 
                       flex items-center justify-center gap-2 hover:bg-gray-50" 
          >
            <CiFacebook className="text-red-500 text-3xl" />
            Login with Facebook
          </button>

        </Form>
      </Formik>

    </div>
    </div>
  );
};

export default Login;









































// // import { useState } from 'react';
// import { FaGoogle } from "react-icons/fa";
// import { CiFacebook } from "react-icons/ci";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import axios from "axios";
// import { Navigate } from "react-router-dom"
// import * as Yup from "yup"

// const Login = () => {
 
//   const handlelogin = async (values) => {
//   try {
//     const res = await axios.post("https://bookstore.eraasoft.pro/api/login", values)

    

//     console.log(res)
    
    
//   } catch (error) {
//     console.log(error); // مهم
//   }
// };

// const lgoinSchema = Yup.object({
//   email: Yup.string().email("You must add a value").required("You need to write "),
//    password: Yup.string().required()
// })

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
      
//       <Formik initialValues={{email:"", password:""}} onSubmit={(values)=> handlelogin(values)} validationSchema={lgoinSchema} >
//         <Form className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm">
        
//         {/* Title */}
//         <h2 className="text-center text-pink-600 font-medium mb-6">
//           Welcome Back!
//         </h2>
    
       
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <Field name="email"
//             type="text"
//             id="email"
//             placeholder="example@gmail.com"
//             className="w-full px-4 py-2 border border-gray-200 rounded-lg
//                        focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//           <ErrorMessage name="email" component={"p"} className="text-red-500 py-2 font-semibold" />
//         </div>

//           <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             password
//           </label>
//           <Field name="password"
//             type="password"
//             id="password"
//             placeholder="Enter password"
//             className="w-full px-4 py-2 border border-gray-200 rounded-lg
//                        focus:outline-none focus:ring-2 focus:ring-red-500"/>
//            <ErrorMessage name="password" component={"p"} className="text-red-500 py-2 font-semibold" />

          
//            <div className="flex items-center justify-between text-sm pt-5 mb-7">
//           <label className="flex items-center gap-2 text-gray-600">
//             <input type="checkbox" className="accent-pink-600" />
//             Remember me
//           </label>

//           <a href="#" className="text-pink-600 hover:underline">
//             Forget password? 
//           </a>
//         </div>

//         </div>

//          <button type="submit"
//           className="w-full bg-pink-600 text-white py-2 rounded-lg
//                      hover:bg-pink-700 transition mb-4">
        
//           Log in
//         </button>

//         <p className='text-center py-10'>Don’t have an account?  Signup</p>

//        <p className='text-center mb-5 text-pink-600'>or</p>

//          <button
//           className="w-full border border-gray-200 py-2 rounded-lg
//                      flex items-center justify-center gap-2 mb-3 hover:bg-gray-50"
//         >
         
//           <FaGoogle className='text-red-500 text-3xl' /> Login with Google 
//         </button>

        

//         <button
//           className="w-full border border-gray-200 py-2 rounded-lg
//                      flex items-center justify-center gap-2 hover:bg-gray-50 "
//         >
//           <CiFacebook  className='text-red-500 text-3xl'/>
//             Login with Facebook
//         </button>

//       </Form>
//       </Formik>

//     </div>

    

//   );
// };

// export default Login;

