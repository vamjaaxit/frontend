import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Propsapp from './componant/propsapp';
import reportWebVitals from './reportWebVitals';
import Propsapp1 from './componant/classprops';
import Enjoy from './componant/function';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Propsapp name="Axit" />
    <Propsapp1 name="Dev"/>
    <Enjoy/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
