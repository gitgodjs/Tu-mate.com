import { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import listaProductos from '../../Constantes temporales/listaProductos';

export default function Productos() {
    const [buscando, setBuscando] = useState('');
    const listaProdFiltr = ['Todos', 'Mate', 'Bombilla', 'Termo', 'Extra'];

    const busquedaOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBuscando(e.target.value); 
    }
    
    useEffect(() => {
        //Futura logica de busqueda
    }, [buscando]); 

    
    return(
        <div className="mt-16">
            <h2 className="flex justify-center uppercase mb-14 font-bold text-4xl" >nuestros productos</h2>
            <div className="bg-blue-500 p-4 m-8 mx-3 rounded-md sm:flex-row gap-1">
                <div className='flex justify-between'>
                    <div className="flex items-center gap-2" id="buscador">
                        <input 
                            onChange={busquedaOnChange} 
                            value={buscando} 
                            className="w-auto p-1 rounded-md text-xl outline-none" type="text" 
                            maxLength={20} placeholder="¿Qué buscas?"
                        />
                        <i className="fa-solid fa-magnifying-glass text-white"></i>
                    </div>
                    
                    <select className="bg-custom-yellow w-auto p-2 outline-none rounded-md" name="filtrobusqueda" id="filtro">
                        {listaProdFiltr.map((producto, index) => (
                            <option className="bg-white-400 text-gray-800" key={index} value={index}>{producto}</option>
                        ))}
                    </select>
                </div>
                
                <div>
                   <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2'>
                        {listaProductos.map((producto, index) => (
                            <div className='bg-white rounded-md p-2 producto' key={index}>
                                <div className='flex items-center justify-center h-64'>
                                    <img src={producto.imagen} alt='imagen producto' className='rounded-md w-full h-full object-cover'/>
                                </div>
                                <h2 className='text-lg font-medium mt-2'>{producto.nombre}</h2>
                                <p>{producto.descripcion}</p>
                                <div className="flex items-center justify-center m-2">
                                    <Link className='text-center bg-yellow-500 p-1 w-64 rounded-md text-lg' to='/a'>Ver mas</Link>
                                </div>
                            </div>
                        ))}
                    </section> 
                </div>
                
            </div>
        </div>
    )
}