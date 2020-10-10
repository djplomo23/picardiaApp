import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../img/LOGO-PICARDIA-NEGRO.png';
import SigninScreen from '../../screen/SigninScreen';
import SearchScreen from '../../screen/SearchScreen';



const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
    document.querySelector(".header").classList.add("button-ocurto");
    document.querySelector('body').classList.add("stop");
};


const Headerhome = () => {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    
    return (
        <header className="header" id="header">
            <div className="brand">
                <button id="btnMenu" onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/" ><img src={logo} alt="logo" /></Link>
            </div>
            
            <div className="header-links">
                <a href="cart.html">Cart</a>
                {
                    userInfo ? (<Link to="/profile">{userInfo.name}</Link>) :
                        (<Link to="/signin" >Sign-In</Link>)

                }


            </div>
        </header>
    )
}

export default Headerhome;