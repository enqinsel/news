// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import routes from "./routes";
import "./assets/index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)