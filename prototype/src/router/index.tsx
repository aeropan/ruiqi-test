import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
