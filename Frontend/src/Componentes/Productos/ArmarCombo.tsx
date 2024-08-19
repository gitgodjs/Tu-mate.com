import { useState, useEffect } from "react"
import { Producto } from "../../Types/types";
import obtenerProductos from "./ObtenerProductos"
import Combo from "./Combo";

interface Nom_Producto {
    name: string;
    img: string;
    desc: string;
    precio: number;
}

export default function ArmarCombo(){
    const [listaProductos, setListaProductos] = useState<Producto[]>([]);
    const [parteCombo, setParteCombo] = useState("Termos");
    const [historialProductos, setHistorialProductos] = useState<Nom_Producto[]>([]);
    const [comboFinal, setComboFinal] = useState<Nom_Producto[]>([])

    const [termo, setTermo] = useState("");
    const [mate, setMate] = useState("");
    const [bombilla, setBombilla] = useState("");
    const [bolso, setBolso] = useState("");
    const [yerba, setYerba] = useState("");
    const [precioTotal, setPrecioTotal] = useState(0);

    const [showCombo, setShowCombo] = useState(false);

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
            setParte(prev => `${prev}${producto.name} | `);
            setPrecioTotal(prev => prev + producto.precio);
            setHistorialProductos(prev => {
                const nuevoHistorial = [...prev, producto]; 
                if (parteCombo !== "Yerbas") {
                    avanzarPaso(); 
                } else {
                    setComboFinal(nuevoHistorial)
                    setShowCombo(true)
                }
                return nuevoHistorial;
            });
        }
    }

    console.log(comboFinal)

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

        <div>
            {!showCombo &&(
                <div>
                   <Combo 
                        termo={termo}
                        mate={mate}
                        bombilla={bombilla}
                        bolso={bolso}
                        yerba={yerba}
                        precioTotal={precioTotal}
                        pasoAtrasCombo={pasoAtrasCombo}
                        reiniciarPasos={reiniciarPasos}
                    />
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
                                    onClick={() => agregarCombo({ name: producto.name, desc: producto.descripcion, img: producto.imageUrl, precio: producto.precio })}>
                                    Agregar al combo
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            )}

            

            {showCombo &&(
                <div className="flex flex-col">
                    <section className="grid grid-cols-2 gap-2 m-1 p-1 sm:grid-cols-4">
                        {comboFinal.map((producto, key)=>(
                            <div className='grid grid-cols-1 bg-gray-100 rounded-md p-2 producto' key={key}>
                                <div id="img" className='flex items-center justify-center h-64'>
                                    <img src={producto.img} alt={producto.name} 
                                    className='rounded-md w-full h-full object-cover'/>
                                </div>

                                <div id="text" className="flex flex-col justify-left m-1">
                                    <h2 className='text-left text-lg font-bold'>{producto.name}</h2>
                                    <p>{`${producto.desc.split(" ").slice(0, 9).join(" ")}...`}</p>
                                </div>
                            </div>
                        ))}   
                    </section>
                    
                    <div id="Boton" className="grid grid-cols-1 items-center justify-left m-1">
                        <button className="border-none text-white font-medium bg-blue-600 text-xl p-2 rounded-md cursor-pointer duration-1000 hover:bg-yellow-400 ">
                         Agregar al carrito
                        </button>
                    </div>
                </div>
            )}
        </div>
        
    )
}