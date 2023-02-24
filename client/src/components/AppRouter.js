import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/Home';
import Signup from './components/Signup';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/home' element = {<Home />} />
            <Route path='/footer' element = {<Footer />} />
            <Route path='/signup' element = {<Signup />} />
            <Route path='/nav' element = {<Navbar />} />

        </Routes>
    </BrowserRouter>
  )
}


