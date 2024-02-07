import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AnimCursor from './Components/AnimCursor/AnimCursor'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimCursor />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
