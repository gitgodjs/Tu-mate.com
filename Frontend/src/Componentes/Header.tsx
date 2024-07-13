import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div>
            <header className="logo">
                <p>Aqui va el nombre y logo</p>
            </header>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Inicio</Link>
                    </li>
                    <li>
                    <Link to="/">Productos</Link>
                    </li>
                    <li>
                    <Link to="/">Sistema de Compras</Link>
                    </li>
                    <li>
                    <Link to="/">Carrito</Link>
                    </li>
                    <li>
                    <Link to="/">Sobre Nosotros</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}