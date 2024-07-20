import { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import listaProductos from '../../Constantes temporales/listaProductos';

interface ProductoI {
    id: string,
    nombre: string,
    descripcion: string,
    precio: number,
    imagen: string,
}


export default function Productos(){
    const [buscando, setBuscando] = useState<string>('');
    const [productos, setProductos] = useState<ProductoI[]>([]);
    
    const mapProductos: ProductoI[] = listaProductos.map((producto: ProductoI) => producto);
    useEffect(() => {
        setProductos(mapProductos)
    },[])

    useEffect(() => {
        if(buscando === '') {
            setProductos(mapProductos)
        } else{
            const busqueda = productos.filter(producto => producto.nombre.toLowerCase().includes(buscando.toLowerCase()));
            setProductos(busqueda);
        }
    }, [buscando]); 

    
    return(
        <div className="mt-16">
            <h2 className="flex justify-center uppercase mb-14 font-bold text-4xl" >nuestros productos</h2>
            <div className="bg-gray-900 p-4 m-8 mx-3 rounded-md sm:flex-row gap-1">
                <div className='flex justify-center m-4'>
                    <div className="flex w-full items-center gap-2" id="buscador">
                        <input 
                            onChange={(e) => setBuscando(e.target.value)} 
                            className="w-full p-1 rounded-md text-xl outline-none" type="text" 
                            maxLength={20} placeholder="¿Qué buscas?"
                        />
                        <i className="fa-solid fa-magnifying-glass text-white"></i>
                    </div>
                </div>
                
                <div>
                   <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2 h-96 overflow-y-scroll scrollbar-custom'>
                    {productos.length === 0 ? (
                        <h2 className='text-center text-3xl text-white'>El producto que estas buscando no está disponible o no existe</h2>
                        ) : (
                            productos.map((producto, index) => (
                                <div className='bg-white rounded-md p-2 producto' key={index}>
                                    <div className='flex items-center justify-center h-64'>
                                        <img src={producto.imagen} alt='imagen producto' className='rounded-md w-full h-full object-cover'/>
                                    </div>
                                    <h2 className='text-lg font-medium mt-2'>{producto.nombre}</h2>
                                    <p>{producto.descripcion}</p>
                                    <div className="flex items-center justify-center m-2">
                                        <Link className='text-center bg-blue-600 text-white p-1 w-64 rounded-md text-lg' to='/ProductoUnico'>Ver más</Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </section>
                    <Link to='/Productos' className='flex justify-center p-2 m-2 bg-blue-600 font-medium text-white text-2xl rounded-md duration-500 hover:bg-yellow-400'>Todos los Productos</Link> 
                </div>
                
            </div>
        </div>
    )
}