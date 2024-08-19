import { useEffect, useState } from "react";
import obtenerProductos from "./ObtenerProductos";
import { Producto } from "../../Types/types";
import Filtros from "./Filtros";
import TodosProds from "./Todos";

export default function Productos() {
    const [listaProductos, setListaProductos] = useState<Producto[]>([]);
    const [filtro, setFiltro] = useState('Todos')
    const [orden, setOrden] = useState(0);

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
    
    const productosOrdenados = orden === 2
    ? [...listaProductos].sort((a, b) => b.precio - a.precio)
    : orden === 1
    ? [...listaProductos].sort((a, b) => a.precio - b.precio) 
    : listaProductos; 

    const prod_filtrados = filtro !== "Todos"
      ? productosOrdenados.filter((producto) => producto.tipo === filtro)
      : productosOrdenados;
    

    return (
        <div>
            <Filtros filtro={setFiltro} orden={setOrden}/>
            <TodosProds prod_filtrados={prod_filtrados} />
        </div>
    );
}
