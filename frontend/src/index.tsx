import React from 'react';
import './services/tailwindcss/output.css'
import ReactDOM from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignedOut from './views/layouts/SignedOut'
import Dashboard from './views/pages/Dashboard'
import Signin from './views/pages/Signin'
import Signup from './views/pages/Signup'
import NotFound from './views/pages/NotFound'
import Home from './views/pages/Home'
import Signout from './views/pages/Signout'
import { StateContextProvider } from './contexts/StateContextProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StateContextProvider>
    <RouterProvider router={createBrowserRouter([
      {
        path: '/', element: <SignedOut />, children: [
          { path: '/', element: <Home /> },
          { path: '/home', element: <Navigate to='/' /> },
          { path: '/dashboard', element: <Dashboard /> },
          { path: '/signin', element: <Signin /> },
          { path: '/signup', element: <Signup /> },
          { path: '/signout', element: <Signout /> },
          { path: '*', element: <NotFound /> }
        ]
      },

    ])} />
  </StateContextProvider>
);