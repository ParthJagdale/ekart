import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './context/User.context';
import { CartProvider } from './context/cart.context';
import { CategoriesContext } from './context/categories.context';
import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesContext>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesContext>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);