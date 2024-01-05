import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PrivateRoute } from './privateRoute';
import { PublicRoute } from './publicRoute';

import { Layout } from './Layout/Layout.jsx';
import { refreshUserThunk } from '../redux/users/usersOperations.js';
import ResetPasswordPage from '../components/ResetPasswordPage.jsx'

ReactModal.setAppElement('#modal-root');

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('../pages/WellcomePage/WellcomePage.jsx')); // Corrected typo
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const ForgotPasswordPage = lazy(() => import('../components/ForgotPasswordPage.jsx'));
// const ResetPasswordPage = lazy(() => ('../components/ResetPasswordPage.jsx'))

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      dispatch(refreshUserThunk(storedToken));
    }
  }, [dispatch]);

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={!isLoggedIn ? <WelcomePage /> : <HomePage />}
          />
          <Route
            path="signin"
            element={
              <PublicRoute>
                <SignInPage />
              </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          />
          <Route
            path='forgot-password'
            element={
              <PublicRoute>
                <ForgotPasswordPage />
              </PublicRoute>
            } />
           <Route
          path='reset-password' // Додайте динамічний шлях для resetToken /:resetToken
          element={
            <PublicRoute>
              <ResetPasswordPage />
            </PublicRoute>
          }/>
          <Route
            path="/homepage"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};
