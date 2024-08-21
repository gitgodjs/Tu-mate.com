import { useEffect, useState } from "react";
import obtenerProductos from "./ObtenerProductos";
import { Producto } from "../../Types/types";
import Filtros from "./Filtros";
import { Link } from "react-router-dom";

export default function Productos() {
    const [listaProductos, setListaProductos] = useState<Producto[]>([]);
    const [filtro, setFiltro] = useState('Todos')
    const [orden, setOrden] = useState(0);

    useEffect(() => {
        obtenerProductos()
            .then(productos => {
                setListaProductos(productos);
            })
            .catch(error => {
                console.error("Error al obtener productos: ", error);
                setListaProductos([]); 
            });
    }, []);
    
    const productosOrdenados = orden === 2
    ? [...listaProductos].sort((a, b) => b.precio - a.precio)
    : orden === 1
    ? [...listaProductos].sort((a, b) => a.precio - b.precio) 
    : listaProductos; 

    const prod_filtrados = filtro !== "Todos"
      ? productosOrdenados.filter((producto) => producto.tipo === filtro)
      : productosOrdenados;
    

    return (
        <div>
            <Filtros filtro={setFiltro} orden={setOrden}/>
            <section id="Productos sueltos" className="grid grid-cols-2 gap-2 m-1 p-1 sm:grid-cols-4">
            {prod_filtrados.map((producto, key)=>(
                
                <div className='grid grid-cols-1 bg-gray-100 rounded-md p-2 producto' key={key}>
                    <div id="img" className='flex items-center justify-center h-64'>
                        <img src={producto.imageUrl} alt={producto.name} 
                        className='rounded-md w-full h-full object-cover'/>
                    </div>
                    <div id="text" className="flex flex-col justify-left m-1">
                        <h2 className='text-left text-lg font-bold'>{producto.name}</h2>
                        <p>{`${producto.descripcion.split(" ").slice(0, 9).join(" ")}...`}</p>
                        <span>Precio: {producto.precio}</span>
                    </div>
                    <div id="Boton" className="grid grid-cols-1 items-center justify-left m-1">
                        <Link to={`/Productos/${producto._id}`}
                        className="border-none text-center text-white font-medium bg-blue-600 text-xl p-2 rounded-md cursor-pointer duration-1000 hover:bg-yellow-400 ">
                            Ver más
                        </Link>
                    </div>
                </div>
            ))}
            </section>
        </div>
    );
}
