import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './assets/Components/Layout';
import Header from "./assets/Home/Header";
import Register from "./assets/Auth/Register";




const router = createBrowserRouter([
  
  {path: "/", element: <Layout/>, children:[
    {index: true , element: <Header/>},
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