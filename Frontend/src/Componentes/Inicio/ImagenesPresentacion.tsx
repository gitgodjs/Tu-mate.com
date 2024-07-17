import { Link } from "react-router-dom"

export default function ImagenesPresentacion() {
    return(
        <div className="imagenes-presentacion">
            <div className="imagen-fondo"></div>
            
            <div className="presentacion">
                <h2>Bienvenido</h2>
                <h3>Tu mate online</h3>
                <p>Los mejores mates, con los mejores precios, ofertas y prenstaciones. Busca tu mate ideal y te lo llevamos!</p>
                <Link className="link-presentacion" to="/">Armate el tuyo</Link>
            </div>
        </div>
        
    )
}