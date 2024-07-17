import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [isChecked, setIsChecked] = useState(true);

    function fijarPantalla() {
        document.body.style.overflow = 'hidden';
    }

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
        if(isChecked) {
            fijarPantalla();
        } else {
            document.body.style.overflow = 'auto';
        }
        
    };

    return(
        <div>
            <header className="heder-responsive">
                <h1>LOGO</h1>

                <input 
                type="checkbox" 
                id="menu-toggle" 
                className="nav-responsive-button" 
                onChange={handleCheckboxChange}
                checked={isChecked}
                />
                <label htmlFor="menu-toggle" className="menu-hamburguesa-header">
                    <div></div>
                    <div></div>
                    <div></div>
                </label>

                <nav className="nav-header">
                    <h2>LOGO</h2>
                    <ul>    
                        <li>
                            <Link className="nav-link" to="/">Inicio</Link>
                            <i className="fa-solid fa-house icono-nav"></i>
                        </li>
                        <li>
                            <Link className="nav-link" to="/">Productos</Link>
                            <i className="fa-brands fa-dropbox icono-nav"></i>
                        </li>
                        <li>
                            <Link className="nav-link" to="/">Envios</Link>
                            <i className="fa-solid fa-truck-fast icono-nav"></i>
                        </li>
                            <li>
                            <Link className="nav-link" to="/">Carrito</Link>
                            <i className="fa-solid fa-cart-shopping icono-nav"></i>
                        </li>
                        <li>
                            <Link className="nav-link" to="/">Nosotros</Link>
                            <i className="fa-solid fa-users icono-nav"></i>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}