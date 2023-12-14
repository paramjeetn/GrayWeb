import  Login  from "./pages/login/Login";
import "./App.css"
import {createBrowserRouter,Outlet,RouterProvider,} from "react-router-dom";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import RightBar from "./Components/rightbar/RightBar";
import LeftBar from "./Components/leftBar/LeftBar";
import Navbar from "./Components/navbar/Navbar";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App(){ 

  const {darkMode}=useContext(DarkModeContext)
const Layout=()=>{
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div style={{display:"flex"}}>
       <LeftBar />
       <div style={{flex:6}}>
       <Outlet />
       </div>
       
       <RightBar />
      </div>
    </div>
  )
}

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/profile/:id",
          element:<Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}


export default App;