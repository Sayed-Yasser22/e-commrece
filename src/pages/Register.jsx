import React from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      // بنبعت الـ values مباشرة لأن مسمياتها في initialValues بقت مطابقة للـ API
      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/register", 
        values 
      );
      
      console.log("Success:", res.data);
      alert("Registration Successful!");
      navigate("/login");
    } catch (error) {
      console.log("Error details:", error.response?.data);
      // بنطلع رسالة الخطأ اللي جاية من السيرفر نفسه
      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  const registerSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8, "Password too short").required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required("Confirm your password"),
  });

  return (
    <div className="bg-white">
    <img className="w-full h-80 bg-center scale-x-[-1] " src="/public/533643aa8db82414f48d43a992d009dda3961386.png" alt=""/>
    <div className="h-screen  flex justify-center items-center p-4"> 
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => handleRegister(values)}
      >
        <Form className="p-6 shadow rounded-lg flex flex-col gap-3 bg-white w-full max-w-md text-black">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label>First Name</label>
              <Field name="first_name" className="border border-gray-300 rounded-lg p-3 w-full" />
              <ErrorMessage name="first_name" component="p" className="text-red-500 text-xs" />
            </div>
            <div>
              <label>Last Name</label>
              <Field name="last_name" className="border border-gray-300 rounded-lg p-3 w-full" />
              <ErrorMessage name="last_name" component="p" className="text-red-500 text-xs" />
            </div>
          </div>

          <label>Email</label>
          <Field name="email" type="email" className="border border-gray-300 rounded-lg p-3 w-full" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-xs" />

          <label>Password</label>
          <Field name="password" type="password" className="border border-gray-300 rounded-lg p-3 w-full" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-xs" />

          <label>Confirm Password</label>
          <Field name="password_confirmation" type="password" className="border border-gray-300 rounded-lg p-3 w-full" />
          <ErrorMessage name="password_confirmation" component="p" className="text-red-500 text-xs" />

          <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg mt-3 transition">
            Register
          </button>
        </Form>
      </Formik>
    </div>
    </div>
  );
}