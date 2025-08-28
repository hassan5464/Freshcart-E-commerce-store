import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './assets/Components/Layout';
import Home from "./assets/Home/Home";
import Register from "./assets/Auth/Register";




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