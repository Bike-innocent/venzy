// src/App.jsx
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import ProductDetail from './pages/product-detail/ProductDetail';
import Login from './pages/login/Login';
import NotFound from './pages/NotFound';
import Register from './pages/register/Register';
import Faq from './pages/faq/Faq';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import CheckOut from './pages/check-out/CheckOut';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop/>,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'product-detail',
        element: <ProductDetail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register/>,
      },
      {
        path: '/faq',
        element: <Faq/>,
      },
      {
        path: '/cart',
        element: <Cart/>,
      },
      {
        path: '/check-out',
        element: <CheckOut/>,
      },
    ],
  },
  {
        path: '*',
        element: <NotFound />,
      },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
