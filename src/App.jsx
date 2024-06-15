// import { Outlet } from 'react-router-dom'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home.jsx'
import Store from './pages/Store.jsx'
import Contact from './pages/Contact.jsx'
import Deals from './pages/Deals.jsx'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import SingleProduct from "./pages/SingleProduct.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/deals" element={<Deals/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App