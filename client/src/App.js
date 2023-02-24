import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from './components/Home';
import Signup from './components/Signup';
import Login from "./components/Login";
import Verify from "./components/Verify";
import Generate from "./components/Generate";
import View from './components/View'
//import AppRouter from "./components/AppRouter";
import { createBrowserRouter, createRoutesFromElements,Route, Link, Outlet, RouterProvider } from "react-router-dom";
import Protected from "./components/Protected";



export default function App() {
  
    const router =createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element ={<Root />}>
            <Route element ={<Navbar />} />
            <Route index element ={<Home />} />
            <Route path='/Signup' element ={<Signup />} />
            <Route path='/Login' element ={<Login />} />
            <Route path='/Footer' element ={<Footer />} />
            <Route path='/Verify' element ={<Verify />} />
            <Route path='/Generate' element ={<Generate />} />
            {/* <Route path='/Protected' element ={<Protected Component={Generate} />} /> */}

            <Route path='/View' element ={<View />} />


          </Route>

        )
    )


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () =>{
  return(
  <>
    <div>
      
      <Navbar />
      {/* <Footer /> */}
    </div>

    <div>
      <Outlet />
    </div>
  </>) 
}