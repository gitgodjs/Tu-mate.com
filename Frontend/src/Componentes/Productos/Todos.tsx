import { Link } from "react-router-dom"
import { Producto } from "../../Types/types"
  
  export default function TodosProds({ prod_filtrados }: Producto[]){
    return(
        <section id="Productos sueltos" className="grid grid-cols-2 gap-2 m-1 p-1 sm:grid-cols-4">
            {prod_filtrados.map((producto, key)=>(
                
                <div className='grid grid-cols-1 bg-gray-100 rounded-md p-2 producto' key={key}>
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
                        <Link to={`/Productos/${producto._id}`}
                        className="border-none text-center text-white font-medium bg-blue-600 text-xl p-2 rounded-md cursor-pointer duration-1000 hover:bg-yellow-400 ">
                            Ver más
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    )
}