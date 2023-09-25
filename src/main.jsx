import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componentes/Root/Root';
import Donation from './Componentes/Donation/Donation';
import Statistics from './Componentes/Statistics/Statistics';
import Home from './Componentes/Home/Home';
import CartDetails from './Componentes/CartDetails/CartDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/cartDetails/:id',
        element: <CartDetails></CartDetails>,
        loader: () => fetch('/api.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      }, {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/api.json')
      }
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
