import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    part:"/login",
    element: <div>login page</div>,
  },
  {
    part:"/register",
    element: <div>register page</div>,
  },
  {
    part:"/user",
    element: <div>user page</div>,
  },
  {
    part:"/product",
    element: <div>product page</div>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
