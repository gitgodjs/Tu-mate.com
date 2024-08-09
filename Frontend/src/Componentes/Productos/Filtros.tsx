import { Link } from "react-router-dom";


export default function Filtros(){
    const Prod_list = ["Todos", "Mates", "Bombillas", "Termos", "Bolsos", "Yerbas"];
    const Orden = ["Cualquiera", "Menos a mayor", "Mayor a menor"]

    return(
        <div className="grid grid-cols-1">
            <div className="grid grid-cols-2 justify-center gap-2">
               <select name="Productos" id="Productos" className="text-lg p-1 m-1 bg-gray-200">
                {Prod_list.map((prod, key)=>(
                    <option value={key} key={key}>{prod}</option>
                    ))
                }
                </select> 
                <select name="Orden" id="Orden" className="text-lg p-1 m-1 bg-gray-200">
                {Orden.map((orden, key)=>(
                    <option value={key} key={key}>{orden}</option>
                    ))
                }
                </select> 
            </div>
            <div className="grid text-center m-1">
                <Link to="/ProductoUnico" 
                className="rounded-md bg-blue-800 text-lg text-white p-1">
                Arma tu propio combo
                </Link>
            </div>
        </div>
    )
}