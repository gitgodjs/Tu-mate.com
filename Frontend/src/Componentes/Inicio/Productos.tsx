import { useState, useEffect, ChangeEvent } from 'react';
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
            <div className="flex flex-col justify-between bg-blue-500 p-4 m-8 mx-3 rounded-md sm:flex-row gap-1">
                <div className="flex items-center gap-4" id="buscador">
                    <input 
                        onChange={busquedaOnChange} 
                        value={buscando} 
                        className="w-96 p-1 rounded-md text-xl outline-none" type="text" 
                        maxLength={20} placeholder="¿Qué buscas?"
                    />
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </div>
                
                <select className="bg-custom-yellow w-auto p-2 outline-none rounded-md font-bold" name="filtrobusqueda" id="filtro">
                    {listaProdFiltr.map((producto, index) => (
                        <option className="bg-white-400" key={index} value={index}>{producto}</option>
                    ))}
                </select>

                <section>
                    {listaProductos.map((producto, index)=>(
                        <div className='bg-white-400 producto' key={index}>
                            <img src={producto.imagen} alt='imagen producto' />
                            <h2>{producto.nombre}</h2>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}