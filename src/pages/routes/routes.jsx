import { createBrowserRouter } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Applayout from "../../components/layout/Applayout";
import HomePages from './../HomePages';
import AboutPages from "../AboutPages";


const routes =createBrowserRouter([

    
  {
    path:"/",
    element: <Applayout />,
    children: [
      { path: "/", element: <HomePages /> },

      {
        path:"/about-us",
        element:<AboutPages/>
      },

    {

    path:"/login",
    element:<Login/>
    },

    {
      path:"/sign-up",
      element:<Register/>
    },

    

    ],

    
  },
  
  


])

export default routes