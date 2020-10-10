import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import DashboardScreen from './screen/DashbhoardScreen';
import AppLayout from './layout/paginaPrincipal/App.layout';






function App() {


    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
        document.querySelector(".header").classList.remove("button-ocurto");
        document.querySelector('body').classList.remove("stop");
    };

    return (
        <BrowserRouter>
           <AppLayout/>
           
           
        </BrowserRouter>
    );

}

export default App;
