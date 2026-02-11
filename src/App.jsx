import { Route, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import routes from "./pages/routes/routes";

export default function App() {
  return <div> 
    {/* <Login/> */}

    <RouterProvider router={routes} />
    
  </div>;
}
