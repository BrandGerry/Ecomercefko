import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Carrito from "../Componentes/Carrito/Carrito"

//Styles
import "./Header.styles.css";

const Header = () => {

    const location = useLocation();

    return (
        <header>
            <Link to="/">
                <img src="https://marvin.com.mx/wp-content/uploads/2019/08/funko-pop-mas-exclusivos-costosos-del-mundo.jpg" alt="Logo Funko" className="logo"/>
            </Link>

            {   location.pathname === "/" ? <Carrito /> : null}
        </header>
    )
}

export default Header
