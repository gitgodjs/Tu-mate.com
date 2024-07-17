import listaOfertas from "../../Constantes temporales/listaOfertas"

export default function Ofertas() {
    return(
        <div className="cartel-ofertas">
            <div className="contenido-oferta">
              {listaOfertas.map((objeto, index) => (
                <div className="oferta" key={index}>
                    <div className="oferta-descripcion">
                        <h2>{objeto.titulo}</h2>
                        <p>{objeto.descripcion[0]}</p>
                        <p>{objeto.descripcion[1]}</p>
                        <p>{objeto.descripcion[2]}</p>
                        <span>Precio: {objeto.precio}</span>
                        <button>Agregar al carrito</button>
                    </div>
                    <div className="oferta-imagen">
                        <img src={objeto.imagen} alt="imagen oferta" />
                    </div>
                </div>
              ))}
            </div>
            <div>
                <p className="uppercase bg-red-500">tailwind</p>
            </div>
        </div>
    )
}