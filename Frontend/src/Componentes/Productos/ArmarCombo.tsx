import { useState, useEffect } from "react"
import { Producto } from "../../Types/types";
import obtenerProductos from "./ObtenerProductos"

interface Nom_Producto {
    prod: string;
}

export default function ArmarCombo(){
    const [listaProductos, setListaProductos] = useState<Producto[]>([]);
    const [parteCombo, setParteCombo] = useState("Termos");

    const [termo, setTermo] = useState("");
    const [mate, setMate] = useState("");
    const [bombilla, setBombilla] = useState("");
    const [bolso, setBolso] = useState("");
    const [yerba, setYerba] = useState("");

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

    const filtrarPartes = listaProductos.filter(producto => producto.tipo == parteCombo);
    
    function agregarCombo(producto: Nom_Producto){
        console.log(producto)
    }

    // MODIFICAR LOGICA PARA QUE SE VAYA ARMANDO EL CODIGO

    return(
        <div className="grid grid-cols-1 gap-3 p-1">
            <section id="Armar Combo"
            className="grid grid-cols-5"
            >
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer" 
                onClick={(e) => {setParteCombo(e.target.nextSibling.textContent)}}>
                    <img src="https://img.icons8.com/?size=65&id=Gt1ywJsjLOQO&format=png&color=000000"/>
                    <span>Termos</span>
                </label>
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer"
                onClick={(e) => {setParteCombo(e.target.nextSibling.textContent)}}>
                    <img src="https://img.icons8.com/?size=65&id=41483&format=png&color=000000"/>
                    <span>Mates</span>
                </label>
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer"
                onClick={(e) => {setParteCombo(e.target.nextSibling.textContent)}}>
                    <img src="https://img.icons8.com/?size=65&id=Q6Ns02u6z7rD&format=png&color=000000"/>
                    <span>Bombillas</span>
                </label>
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer"
                onClick={(e) => {setParteCombo(e.target.nextSibling.textContent)}}>
                    <img src="https://img.icons8.com/?size=65&id=NaKkLLFlxMDe&format=png&color=000000"/>
                    <span>Bolsos Materos</span>
                </label>
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer"
                onClick={(e) => {setParteCombo(e.target.nextSibling.textContent)}}>
                    <img src="https://img.icons8.com/?size=65&id=ZTZYYl9xsFfB&format=png&color=000000"/>   
                    <span>Yerbas</span>
                </label>
            </section>
            <div id="Combo" className="grid grid-cols-1 gap-1">
                <div id="Objetos" className="flex gap-2">
                    <h3 className="text-xl font-bold items-center">Combo:</h3>
                    <span className="text-lg">
                        {termo} {mate} {bombilla} {bolso} {yerba} 
                    </span>
                </div>
                <div id="Precio y Boton" className="grid grid-cols-1 items-center gap-2">
                    <div>
                        <span className="text-center text-xl">Precio total: <span className="font-bold">$49493</span></span>
                    </div>
                    <div className="grid">
                        <button className="border-none text-white font-medium bg-blue-600 text-lg p-1 rounded-md cursor-pointer duration-1000 hover:bg-yellow-400 ">
                            Agregar combo al carrito
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5">
                {filtrarPartes.map((producto, key)=>(
                    <div key={key}>
                        <div className='grid grid-cols-1 bg-gray-100 rounded-md p-2 producto'>
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
                                <button className="border-none text-white font-medium bg-blue-600 text-xl p-2 rounded-md cursor-pointer duration-1000 hover:bg-yellow-400 "
                                onClick={() => agregarCombo(producto)}>
                                Agregar al combo
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}