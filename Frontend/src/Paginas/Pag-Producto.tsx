import Ofertas from "../Componentes/Inicio/Ofertas";

export default function ProductoUnico(){
    return(
        <div>
            <div className="grid grid-cols-1 bg-gray-100 sm:grid-cols-2 shadow-2xl gap-2 borde m-3 p-3 w-auto h-auto rounded-md">
                <section className="flex w-auto h-96">
                    <img src="https://i.pinimg.com/564x/7b/fa/45/7bfa456c6afc886a86f5b26de2669c8a.jpg" alt="Imagen1 Producto" className="imagenGaleria rounded-md" />
                    <img src="https://i.pinimg.com/564x/ab/1a/01/ab1a01f57820e84286c3dad0888466d8.jpg" alt="Imagen2 Producto" className="imagenGaleria rounded-md"/>
                    <img src="https://i.pinimg.com/236x/eb/7f/7d/eb7f7d3e9dbec0872d7a73585689e601.jpg" alt="Imagen3 Producto" className="imagenGaleria rounded-md"/>
                    <img src="https://i.pinimg.com/236x/1a/6f/17/1a6f178802057e300a9386ccc5c99634.jpg" alt="Imagen4 Producto" className="imagenGaleria rounded-md"/>
                    <img src="https://i.pinimg.com/236x/1a/6f/17/1a6f178802057e300a9386ccc5c99634.jpg" alt="Imagen4 Producto" className="imagenGaleria rounded-md"/>
                </section>
                <section className="relative flex flex-col h-auto p-2">
                    <h2 className="text-3xl font-medium">Nombre Producto</h2>
                    <p className="text-1xl mt-4 sm:text-2xl">(descripcion del producto )Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas, atque reprehenderit delectus aliquam accusantium sed repellat amet rerum, id consequatur? Ad beatae corporis neque inventore iste! Fuga, nulla cumque?</p>
                    <div className="flex gap-2">
                        <p className="flex text-xl mt-5">Precio: $200</p>
                        <input className="flex" type="number" min={1} max={9}/>
                    </div>
                    
                    <div className="items-center mt-5  pointer text-white aling-center text-center bg-blue-600 p-2 font-medium text-xl rounded-md">
                        <button className="m-1">Agregar al carrito</button>
                    </div>
                </section>
            </div>
            <div className="border-t border-t-1 border-t-gray-400 mt-10">
                <Ofertas texto={'otros productos'}/>
            </div>
        </div>
        
    )
}