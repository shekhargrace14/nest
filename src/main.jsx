import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductProvider } from './context/productContext.jsx'

// import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import Home from './pages/Home.jsx'
// import Store from './pages/Store.jsx'
// import Contact from './pages/Contact.jsx'
// import Deals from './pages/Deals.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children : [
//       {
//         path:"/",
//         element: <Home/>
//       },
//       {
//         path: "/Store",
//         element : <Store/>
//       },
//       {
//         path: "/Deals",
//         element : <Deals/>
//       },
//       {
//         path: "/Contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
    {/* <RouterProvider router={router}/> */}
      <App/>  
    </ProductProvider>
  </React.StrictMode>,
)
