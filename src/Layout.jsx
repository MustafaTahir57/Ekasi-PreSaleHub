import React, { useState } from 'react'
import { BrowserRouter, Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Landing/Navbar';
import Landing from './components/Landing/Landing';


const Layout = () => {
  const [language, setLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
  const { t, i18n } = useTranslation();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing setLanguage={setLanguage} language={language}  />,
    },
    {
      path: "/Home",
      element: <Home setLanguage={setLanguage} language={language} />,
    },
    {
      path: "/privacy-policy",
      element: <Privacy setLanguage={setLanguage} language={language} />,
    },
    {
      path: "/cookie-policy",
      element: <Cookies setLanguage={setLanguage} language={language} />,
    },
  ]);
  document.body.dir = i18n.dir();
  return (
    <div className="page-wrapper">
      
      <Navbar />
        <RouterProvider router={router} />
    </div>
  )
}

export default Layout