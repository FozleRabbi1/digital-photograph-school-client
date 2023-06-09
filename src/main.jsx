import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './ComponentFile/router'
import ThimProvider from './ComponentFile/ThimProviderFile/ThimProvider'
import AuthProvider from './ComponentFile/AuthProviderFile/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThimProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThimProvider>
    </AuthProvider>
  </React.StrictMode>,
)
