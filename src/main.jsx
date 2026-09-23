import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout';
import Home from './components/Home/Home';
import AllProducts from './components/AllProducts/AllProducts';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';
import MyProducts from './components/MyProducts/MyProducts';
import MyBids from './components/MyBids/MyBids';


const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'allProducts',
        Component:AllProducts
      },
      {
        path:'register',
        Component:Register
      },
      {
        path:'myProducts',
        element:<MyProducts></MyProducts>
      },
      {
        path:'myBids',
        Component:<MyBids></MyBids>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
