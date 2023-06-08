import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './ComponentFile/router'
import ThimProvider from './ComponentFile/ThimProviderFile/ThimProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThimProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThimProvider>
  </React.StrictMode>,
)
