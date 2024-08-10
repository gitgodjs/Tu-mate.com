import { useState } from "react"
import ArmarCombo from "../Componentes/Productos/ArmarCombo"
import Productos from "../Componentes/Productos/Productos"

export default function ProductosPag(){
    const [verTodo, setVerTodo] = useState(true);

    function cambio(){
        setVerTodo(!verTodo)
    }

    return(
        <div className="flex flex-col justify-center m-1 p-1">

            <div className="grid text-center m-1">
                <button 
                className="rounded-md bg-blue-800 text-lg text-white p-1"
                onClick={cambio}
                >
                {verTodo == true ? "Armar tu propio combo" : "Ver todo"}
                </button>
            </div>

            {verTodo && (
                <Productos />
            )}

            {!verTodo && (
                <ArmarCombo/>
            )}

        </div>
    )
}