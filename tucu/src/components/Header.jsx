import React from "react";
import './styles/Navbar.scss';
import logo from '@icons/logoTucu.png';
import buttonMenu from '@icons/nav-menu-icon.png';

const Header = () => {
    return (
        <nav className="navbar navbar-fixed-top">
            <div className="navbar-items">
                <div className="navbar-button-menu">
                    <a href="#">
                        <img src={buttonMenu} alt="" />
                    </a>
                </div>
                <div className="navbar-left">
                    <img src={logo} alt="logo" className="logo-img" />

                </div>


                <div className="navbar-center">

                    <ul>
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/">Rastrea tu pedido</a>
                        </li>
                        <li>
                            <a href="/">¡Quienes somos?</a>
                        </li>
                    </ul>

                </div>

                <div className="navbar-right">
                    <ul>
                        <li className="navbar-shopping-cart">
                            <a href="/login">
                                <button type="button" className="primary-button login-button">Iniciar Sesion</button>
                            </a>

                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Header;