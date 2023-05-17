import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/kino.css';
import Kino from './routes/Kino';
import Generator from './routes/Generator';
import DataProvider from './context/DataProvider';

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
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);