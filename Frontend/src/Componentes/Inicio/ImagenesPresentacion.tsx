import { Link } from "react-router-dom"

export default function ImagenesPresentacion() {
    const scrollToSection = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return(
        <div className="imagenes-presentacion">
            <div className="imagen-fondo"></div>
            
            <div className="presentacion">
                <h2>Bienvenido</h2>
                <h3 className="text-yellow-500">Tu mate online</h3>
                <p>Los mejores mates, con los mejores precios, ofertas y prenstaciones. Busca tu mate ideal y te lo llevamos!</p>
                <Link className="link-presentacion" to="/">Armate el tuyo</Link>
                <i onClick={() => scrollToSection('ofertas')} className="absolute bottom-5 text-xl text-white fa-solid fa-chevron-down animate-bounce cursor-pointer"></i>
            </div>
        </div>
        
    )
}