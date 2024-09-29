import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import { LoginPage } from './page/login.jsx';
import { ProductPage } from './page/product.jsx';
import { RegisterPage } from './page/register.jsx';
import { UserPage } from './page/user.jsx';
import './style/global.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/user",
    element: <UserPage/>
  },
  {
    path: "/product",
    element: <ProductPage/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
