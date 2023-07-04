import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Outlet,Link} from 'react-router-dom';
import { BrowserRouter,Routes,Route
 } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import reportWebVitals from './reportWebVitals';


import Layout from './component/customer/Layout';
import Account from './component/customer/account';
import Blog from './component/customer/blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
         <Routes>
         <Route path="/" element={<Layout />}></Route>
         <Route path="/Blog" element={<Blog />}></Route>
         <Route path="/Account" element={<Account />}></Route>
         
         
         </Routes>
  </BrowserRouter> 
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
