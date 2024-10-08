import React, { useState, useEffect } from "react";
import { API_URL } from "../Auth/constants";

interface Producto {
    id: string; 
    name: string;
    descripcion: string;
    imageUrl: string;
    precio: number;
}

interface ApiResponse {
    data: {
        productos: Producto[];
    };
}

export default function Prueba(){
    const [id, setId] = useState('');
    const [tipo, setTipo] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('')
    const [listaProd, setListaProductos] = useState<Producto[]>([]);

    // Obtener un producto
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

    // Subir un producto
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const data = {
            id,
            tipo, 
            imageUrl, 
            name, 
            descripcion, 
            precio
        };
        try {
            const respuesta = await fetch(`${API_URL}/productos`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if(!respuesta.ok){
                console.log(respuesta.json()); 
            }
            
            const respuestaServidor = await respuesta.json();
            console.log(respuestaServidor.data.message);
            

        } catch (error) {
            console.log('Error: ', error);
        };
    };

    useEffect(()=>{
        console.log(tipo)
    },[tipo])

    return(
        <div className="p-4">
            <form className="bg-gray-400" onSubmit={handleSubmit} encType="multipart/form-data">
                    <h2>Add Prod</h2>
                    
                    <div>

                        <div className="organizado_textos">

                            <label htmlFor="imageUrl">Imagen:</label>
                            <input
                                    className="input_imagen"
                                    type="text"
                                    id="imageUrl"
                                    onChange={(e) => setImageUrl(e.target.value)}
                            />

                            <label htmlFor="name">Nombre:</label>
                            <input 
                                type="text"
                                id="name" 
                                className="name"
                                placeholder="Ejemplo: Juan"
                                required 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <label htmlFor="descripcion">Desc</label>
                            <input
                                type="descripcion" 
                                id="descripcion"
                                className="mail"
                                placeholder="Ejemplo: carlos@gmail.com"
                                required 
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            /> 
                            
                            <label htmlFor="precio">Precio</label>
                            <input 
                                type="number" 
                                id="precio"
                                placeholder="Ejemplo: PEPE123"
                                required 
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                            /> 
                            
                            <label htmlFor="id" className="text-red-600">ID Prod</label>
                            <input
                                type="text" 
                                id="id"
                                className="text-red"
                                placeholder="Ejemplo: carlos@gmail.com"
                                required 
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            /> 
                            <label htmlFor="id" className="text-red-600">ID Prod</label>
                            <select name="" id="" onChange={(e) => setTipo(e.target.value)}>
                                <option value="Termos">Termos</option>
                                <option value="Mates">Mates</option>
                                <option value="Bombillas">Bombillas</option>
                                <option value="Bolsos">Bolsos</option>
                                <option value="Yerbas">Yerbas</option>
                            </select>
                        </div>
                    </div>
                    <div className="boton_registro">
                        <button type="submit">Subir producto</button>
                    </div>
                    
                </form>

                <div>
                    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2 h-96 overflow-y-scroll scrollbar-custom'>
                       {
                        listaProd.map((producto) => (
                            <div className='bg-white rounded-md p-2 producto' key={producto.id}>
                                <div className='flex items-center justify-center h-64'>
                                    <img src={producto.imageUrl} alt='imagen producto' className='rounded-md w-full h-full object-cover'/>
                                </div>
                                <h2 className='text-lg font-medium mt-2'>{producto.name}</h2>
                                <p>{producto.descripcion}</p>
                            </div>
                        ))
                        } 
                    </section>
                </div>
        </div>
    )
}