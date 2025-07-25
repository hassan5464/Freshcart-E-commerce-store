import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './assets/Componant/Layout';
import Home from "./assets/Componant/Home";
import Navbar from "./assets/Componant/Navbar";
import Register from "./assets/Componant/Register";
import Footer from "./assets/Componant/Footer";




const router = createBrowserRouter([
  
  {path: "/", element: <Layout/>, children:[
    {index: true , element: <Home/>},
    {path: "/register" , element: <Register />},
  ]}
  
  
],
{basename: "/Freshcart-E-commerce-store/"})

function App() {

  return <>

    <RouterProvider router={router}/>
    
    
  

    
  </>
}

export default App