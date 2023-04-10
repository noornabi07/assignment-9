import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Banner from './components/Banner/Banner';
import Applied from './components/Applied/Applied';
import getData from '../src/fetchData'
import appliedData from './appliedData';
import JobDetail from './components/JobDetail/JobDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>,
        loader: getData
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied',
        element: <Applied></Applied>,
        loader: appliedData
      },
      {
        path: '/:id',
        element: <JobDetail></JobDetail>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
