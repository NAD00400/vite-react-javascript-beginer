import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import { TodoApp } from './Components/todo/TodoApp.jsx';
import { LoginPage } from './page/login.jsx';
import { ProductPage } from './page/book.jsx';
import { RegisterPage } from './page/register.jsx';
import { UserPage } from './page/user.jsx';
import './style/global.css';
import ErrorPage from './page/error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children :[
      {
        index: true,
        element: <TodoApp/>
      },
      {
        path: "/user",
        element: <UserPage/>
      },
      {
        path: "/product",
        element: <ProductPage/>
      }
    ] 
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
