import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../../shared/app-layout/AppLayout.tsx'
import { HomePage } from '../../pages/home/HomePage.tsx'
import { MainPage } from '../../pages/main/MainPage.tsx'
import { NotFoundView } from '../../pages/error/views/NotFoundView.tsx'

export const index = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'main', element: <MainPage /> },
    ],
  },
  { path: '*', element: <NotFoundView /> },
])
