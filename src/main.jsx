import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import AuthProviders from './providers/AuthProviders'
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto bg-[#212121] '>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProviders>
            <RouterProvider router={router}></RouterProvider>
          </AuthProviders>
        </QueryClientProvider>
      </HelmetProvider>
    </div>
  </React.StrictMode>,
)
