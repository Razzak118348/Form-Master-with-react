import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router =createBrowserRouter([

//   {

//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    {/* <RouterProvider router={router}>

    </RouterProvider> */}
  </React.StrictMode>,
)
