import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import Store from './pages/Store.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/store",
        element : <Store/>
      },
      {
        path: "/contact",
        element : <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App/>   */}
  </React.StrictMode>,
)
