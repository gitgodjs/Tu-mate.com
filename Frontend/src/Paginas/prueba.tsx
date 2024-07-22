import { useState } from "react"
export default function Prueba(){
    const [id, setId] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('')

    async function handleSubmit(e){
        e.preventDefault();
        const data = {
            id, 
            imageUrl, 
            name, 
            descripcion, 
            precio
        };
        try {
            const respuesta = await fetch('http://localhost:4000/api/subirProd', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if(!respuesta.ok){
                throw new Error('Problema al enviar el producto'); 
            }
            const resServer = respuesta.json();
        
            console.log(resServer);
        } catch (error) {
            console.log('Error: ', error);
        };
    };


    return(
        <div>
            <form className="bg-gray-400" onSubmit={handleSubmit} encType="multipart/form-data">
                    <h2>Add Prod</h2>
                    
                    <div>

                        <div className="organizado_textos">

                            <label htmlFor="imageUrl">Imagen:</label>
                            <input
                                    className="input_imagen"
                                    type="text"
                                    id="imageUrl"
                                    onChange={(e) => setImageUrl(e.target.value)}
                            />

                            <label htmlFor="name">Nombre:</label>
                            <input 
                                type="text"
                                id="name" 
                                className="name"
                                placeholder="Ejemplo: Juan"
                                required 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <label htmlFor="descripcion">Desc</label>
                            <input
                                type="descripcion" 
                                id="descripcion"
                                className="mail"
                                placeholder="Ejemplo: carlos@gmail.com"
                                required 
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            /> 
                            
                            <label htmlFor="precio">Precio</label>
                            <input 
                                type="number" 
                                id="precio"
                                placeholder="Ejemplo: PEPE123"
                                required 
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                            /> 
                            
                            <label htmlFor="id" className="text-red-600">ID Prod</label>
                            <input
                                type="text" 
                                id="id"
                                className="text-red"
                                placeholder="Ejemplo: carlos@gmail.com"
                                required 
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            /> 
                        </div>
                    </div>
                    <div className="boton_registro">
                        <button type="submit">Subir producto</button>
                    </div>
                    
                </form>
        </div>
    )
}