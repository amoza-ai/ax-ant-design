import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '../../shared/app-layout/AppLayout.tsx'
import { AuthLayout } from '../../shared/auth-layout/AuthLayout.tsx'
import { HomeView } from '../../pages/home/views/HomeView.tsx'
import { MainView } from '../../pages/main/views/MainView.tsx'
import { NotFoundView } from '../../pages/error/views/NotFoundView.tsx'
import { SigninView } from '../../auth/signin/views/SigninView.tsx'
import { SignupView } from '../../auth/signup/views/SignupView.tsx'
import { ResetView } from '../../auth/reset/views/ResetView.tsx'
import { VerifyView } from '../../auth/verify/views/VerifyView.tsx'

export const index = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomeView /> },
      { path: 'main', element: <MainView /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="signin" replace /> },
      { path: 'signin', element: <SigninView /> },
      { path: 'signup', element: <SignupView /> },
      { path: 'reset', element: <ResetView /> },
      { path: 'verify', element: <VerifyView /> },
    ],
  },
  { path: '*', element: <NotFoundView /> },
])
