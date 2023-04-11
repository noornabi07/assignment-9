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
import JobApplied from './components/JobApplied/JobApplied';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: 'details',
        element: <JobDetail></JobDetail>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
