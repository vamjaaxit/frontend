import React from "react";
import ReactDOM  from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import '../src/style.css';
import HeaderApp from './Componant/Header';
import TopbarApp from "./Componant/topbar";
import Navbar from "./Componant/Navbar";



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import Slider from "./Componant/slider";
import Responsive from "../src/Componant/stick-slider";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const root=ReactDOM.createRoot(document.getElementById("boostrap-demo"));
root.render(
    <>
    <TopbarApp/>
    <HeaderApp/>
    <Navbar/>
    <Slider/>
    <Responsive/>
    </>
);
reportWebVitals();