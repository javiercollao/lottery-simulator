import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/kino.css';
import Kino from './routes/Kino';
import Generator from './routes/Generator';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Kino />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/generator",
    element: <Generator />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);