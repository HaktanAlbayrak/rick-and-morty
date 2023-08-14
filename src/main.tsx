import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
