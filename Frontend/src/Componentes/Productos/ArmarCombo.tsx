import { useState, useEffect } from "react"
import { Producto } from "../../Types/types";
import obtenerProductos from "./ObtenerProductos"

interface Nom_Producto {
    text: string;
    precio: number;
}

export default function ArmarCombo(){
    const [listaProductos, setListaProductos] = useState<Producto[]>([]);
    const [parteCombo, setParteCombo] = useState("Termos");
    const [historialProductos, setHistorialProductos] = useState<Nom_Producto[]>([]);

    const [termo, setTermo] = useState("");
    const [mate, setMate] = useState("");
    const [bombilla, setBombilla] = useState("");
    const [bolso, setBolso] = useState("");
    const [yerba, setYerba] = useState("");
    const [precioTotal, setPrecioTotal] = useState(0);

    const setParteComboMap: { [key: string]: React.Dispatch<React.SetStateAction<string>> } = {
        "Termos": setTermo,
        "Mates": setMate,
        "Bombillas": setBombilla,
        "Bolsos": setBolso,
        "Yerbas": setYerba,
    };
   

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
     const setParte = setParteComboMap[parteCombo];
    function agregarCombo(producto: Nom_Producto) {
        if (setParte) {
            setParte(prev => `${prev}${producto.text} | `);
            setPrecioTotal(prev => prev + producto.precio);
            setHistorialProductos(prev => {
                const nuevoHistorial = [...prev, producto]; 
                if (parteCombo !== "Yerbas") {
                    avanzarPaso(); 
                } else {
                    console.log("productos listos: ", nuevoHistorial); 
                }
                return nuevoHistorial;
            });
        }
    }

    const partes = ["Termos", "Mates", "Bombillas", "Bolsos", "Yerbas"];
    function avanzarPaso() {
        const i = partes.indexOf(parteCombo);

        if (i >= 0 && i < partes.length - 1) {
            setParteCombo(partes[i + 1]);
        }
    }

    function pasoAtrasCombo() {
        const index = partes.indexOf(parteCombo);
    
        if (index > 0) {
            const parteAnterior = partes[index - 1]; 
    
            const nuevoHistorial = [...historialProductos];
            const ultimoProducto = nuevoHistorial.pop();
    
            if (ultimoProducto) {
                setPrecioTotal(prev => prev - ultimoProducto.precio);
                setHistorialProductos(nuevoHistorial); 
    
                setParteCombo(parteAnterior);
    
                const limpiarParte = setParteComboMap[parteAnterior];
                if (limpiarParte) {
                    limpiarParte(""); 
                }
            }
        }
    }

    function reiniciarPasos(){
        setParteCombo("Termos"); 
        setPrecioTotal(0); 
        setHistorialProductos([]); 

        setTermo("");
        setMate("");
        setBombilla("");
        setBolso("");
        setYerba("");
    }

    return(
        <div className="grid grid-cols-1 gap-3 p-1">
            <section id="Armar Combo"
            className="grid grid-cols-5"
            >
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer" >
                    <img src="https://img.icons8.com/?size=65&id=Gt1ywJsjLOQO&format=png&color=000000"/>
                    <span>Termos</span>
                </label>
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer">
                    <img src="https://img.icons8.com/?size=65&id=41483&format=png&color=000000"/>
                    <span>Mates</span>
                </label>
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer">
                    <img src="https://img.icons8.com/?size=65&id=Q6Ns02u6z7rD&format=png&color=000000"/>
                    <span>Bombillas</span>
                </label>
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer">
                    <img src="https://img.icons8.com/?size=65&id=NaKkLLFlxMDe&format=png&color=000000"/>
                    <span>Bolsos Materos</span>
                </label>
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer">
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
                        <span className="text-center text-xl">Precio total: ${precioTotal}</span>
                    </div>
                    <div id="botones" className="grid grid-cols-2 gap-5">
                        <button onClick={pasoAtrasCombo} className="bg-gray-200 rounded-md cursor pointer duration-1000 hover:bg-gray-400">Atras</button>
                        <button onClick={reiniciarPasos} className="bg-gray-200 rounded-md cursor pointer duration-1000 hover:bg-gray-400">Reiniciar</button>
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
                                onClick={() => agregarCombo({ text: producto.name, precio: producto.precio })}>
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