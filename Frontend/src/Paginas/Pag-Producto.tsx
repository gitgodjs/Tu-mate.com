import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../Auth/constants';
import { Producto } from '../Types/types';
import Productos from '../Componentes/Productos/Productos';

export default function ProductoUnico(){
    const {id} = useParams();
    const [producto, setProducto] = useState<Producto[]>([]);

    useEffect(() => {
      fetch(`${API_URL}/producto/${id}`)
        .then(response => {
          if (!response.ok) {
            console.log('Error al cargar el producto');
          }
          return response.json();
        })
        .then(data => {
          setProducto([data.producto]);
        })
        .catch(error => {
          console.error(error);
        });
    }, [id]);

    return(
        <div className="grid grid-cols-1 bg-gray-100 sm:grid-cols-2 shadow-2xl gap-2 borde m-3 p-3 w-auto h-auto rounded-md">
            {producto.map((prod, key)=>(
                <div key={key}>
                    <section>
                        <img src={prod.imageUrl} alt={prod.name} />
                    </section>
                    <section className="relative flex flex-col h-auto p-2">
                    <h2 className="text-3xl font-medium">{prod.name}</h2>
                    <p className="text-1xl mt-4 sm:text-2xl">{prod.descripcion}</p>
                    <div className="flex gap-2">
                        <p className="flex text-xl mt-5">Precio: ${prod.precio}</p>
                        <input className="flex" type="number" min={1} max={9}/>
                    </div>
                    
                    <div className="items-center mt-5  pointer text-white aling-center text-center bg-blue-600 p-2 font-medium text-xl rounded-md">
                        <button className="m-1">Agregar al carrito</button>
                    </div>
                </section>
                </div>
            ))}
            <Productos />
        </div>
        
    )
}