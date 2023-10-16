import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import AuthProviders from './providers/AuthProviders'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto bg-[#1B1921]'>
      <HelmetProvider>
        <AuthProviders>
          <RouterProvider router={router}></RouterProvider>
        </AuthProviders>
      </HelmetProvider>
    </div>
  </React.StrictMode>,
)
