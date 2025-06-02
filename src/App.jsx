import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Project from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

export default function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/projects",
        element: <Project/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]
  }
]
);

  return <RouterProvider router={router}/>;
}
