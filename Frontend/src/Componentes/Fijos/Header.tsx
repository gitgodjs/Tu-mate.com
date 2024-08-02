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
            <header className="heder-responsive bg-gray-900">
                <h1 className="font-bold text-3xl">LOGO 🧉</h1>

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

                <nav className="nav-header aling-center">
                    <p className="font-bold text-3xl text-white">Tu Mate 🧉</p>
                    <ul>    
                        <li>
                            <Link className="nav-link" to="/">Inicio</Link>
                            <i className="fa-solid fa-house icono-nav"></i>
                        </li>
                        <li>
                            <Link className="nav-link" to="/Productos">Productos</Link>
                            <i className="fa-brands fa-dropbox icono-nav"></i>
                        </li>
                        <li>
                            <Link className="nav-link" to="/Envios">Envios</Link>
                            <i className="fa-solid fa-truck-fast icono-nav"></i>
                        </li>
                            <li>
                            <Link className="nav-link" to="/Carrito">Carrito</Link>
                            <i className="fa-solid fa-cart-shopping icono-nav"></i>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}