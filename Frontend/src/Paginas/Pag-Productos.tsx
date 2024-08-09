import Filtros from "../Componentes/Productos/Filtros"
import Productos from "../Componentes/Productos/Productos"


export default function ProductosPag(){
    return(
        <div className="flex flex-col justify-center m-1 p-1">
            <Filtros />
            <Productos />
        </div>
    )
}