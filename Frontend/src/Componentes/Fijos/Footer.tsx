import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <div className="flex justify-between bg-gray-700 p-3 mt-1 text-white">
            <div className="flex flex-col">
                <h2 className="font-bold text-2xl mt-2">Tu Mate 🧉</h2>
                <p className="mt-2">Hola! Soy <span className="font-bold">Juan Martin Roman</span>, el programador de esta pagina. Si la estas disfrutando y deseas contactarme puedes enviarme un correo</p>
                <div className="mt-2">
                    <p><span className="font-bold">Contacto</span>: <span className="border-b border-white-400">juanmroman20@gmail.com</span></p>
                </div>
                <p className="mt-4">Si deseas ver mas de mis trabajos, puedes ver mis repositorios</p>
                <div className="flex items-center gap-2">
                    <a href="https://github.com/gitgodjs?tab=repositories" target="__blank" className="font-bold text-1xl">GitHub</a>
                    <i className="fa-brands fa-github text-2xl"></i>
                </div>

            </div>
            <div className="p-2 m-2">
                <ul className="flex flex-col">  
                    <li className="gap-2">
                        <Link className="nav-link" to="/">Inicio</Link>
                        <i className="fa-solid fa-house m-2"></i>
                    </li>
                    <li className="gap-2">
                        <Link className="nav-link" to="/Productos">Productos</Link>
                        <i className="fa-brands fa-dropbox m-2"></i>
                    </li>
                    <li className="gap-2">
                        <Link className="nav-link" to="/Envios">Envios</Link>
                        <i className="fa-solid fa-truck-fast m-2"></i>
                    </li>
                        <li className="gap-2">
                        <Link className="nav-link" to="/Carrito">Carrito</Link>
                        <i className="fa-solid fa-cart-shopping m-2"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}