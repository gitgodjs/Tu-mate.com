import { useEffect, useState } from "react";
import { API_URL } from "../../Auth/constants";
import { ApiResponse, Producto } from "../../Types/types";

export default function Productos() {
    const [listaProductos, setListaProductos] = useState<Producto[]>([]);

    async function obtenerProductos() {
        return new Promise<Producto[]>((resolve, reject) => {
            fetch(`${API_URL}/productos`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No pudimos obtener los productos');
                }
                return response.json();
            })
            .then((res: ApiResponse) => {
                resolve(res.data.productos);
            })
            .catch(error => {
                console.error(error);
                reject([]);
            });
        });
    }

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

    return (
        <div>
            <section className="grid grid-cols-1 gap-2 m-1 p-1 sm:grid-cols-4">
                {listaProductos.map((producto, key)=>(
                    
                    <div className='grid grid-cols-1 bg-gray-100 rounded-md p-2 producto' key={key}>
                        <div id="img" className='flex items-center justify-center h-64'>
                            <img src={producto.imageUrl} alt={producto.name} 
                            className='rounded-md w-full h-full object-cover'/>
                        </div>

                        <div id="text" className="flex flex-col justify-left m-1 ">
                            <h2 className='text-left text-lg font-bold'>{producto.name}</h2>
                            <p>{`${producto.descripcion.split(" ").slice(0, 9).join(" ")}...`}</p>
                            <span className="mb-10">Precio: {producto.precio}</span>
                        </div>

                        <div id="Boton" className="grid grid-cols-1 items-center justify-left m-1">
                            <button className="border-none text-white font-medium bg-blue-600 text-xl p-2 rounded-md cursor-pointer duration-1000 hover:bg-yellow-400 ">
                            Agregar al carrito
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
