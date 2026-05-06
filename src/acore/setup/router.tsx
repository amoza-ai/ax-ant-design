import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from './shared/app-layout/AppLayout'
import { AuthLayout } from './shared/auth-layout/AuthLayout'
import { HomeView } from './pages/home/views/HomeView'
import { MainView } from './pages/main/views/MainView'
import { NotFoundView } from './pages/error/views/NotFoundView'
import { SigninView } from './auth/signin/views/SigninView'
import { SignupView } from './auth/signup/views/SignupView'
import { ResetView } from './auth/reset/views/ResetView'
import { VerifyView } from './auth/verify/views/VerifyView'

export const router = createBrowserRouter([
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
