export default function Nosotros(){
    return(
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-10 m-2" id="quienesSomos">
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-4xl">Quienes somos?</h3>
                    <p className="text-lg">Un grupo de amigos apasionados por el mate, igual que tú. Nos unió el amor por esta maravillosa tradición y la cultura que la rodea, y estamos emocionados de tenerte con nosotros.</p>
                    <p className="text-lg">Aquí no solo vendemos productos; compartimos una pasión que va más allá del simple acto de beber mate. Queremos que cada cliente sienta la misma calidez y entusiasmo que nosotros sentimos por cada sorbo.</p>
                    <p className="text-lg">Tu papel es fundamental para llevar esta pasión a cada rincón. Si alguna vez necesitas apoyo o tienes alguna pregunta, recuerda que estamos aquí como un equipo de amigos listos para ayudarte.</p>
                    <p className="text-lg">¡Gracias por ser parte de nuestra comunidad! Juntos, haremos que cada experiencia con el mate sea especial.</p>
                </div>
                <section className="flex w-auto h-96">
                    <img src="https://i.pinimg.com/564x/11/98/30/11983094ab6a45eb0b3ccb3d38c06bef.jpg" alt="Imagen1" className="imagenGaleria"/>
                    <img src="https://i.pinimg.com/564x/a2/76/af/a276af36294c1f45359be26152103f4c.jpg" alt="Imagen2" className="imagenGaleria"/>
                    <img src="https://i.pinimg.com/236x/18/29/e0/1829e0ea55df4b9186559d7832b96ffe.jpg" alt="Imagen3" className="imagenGaleria"/>
                    <img src="https://i.pinimg.com/474x/7a/91/fb/7a91fb66640cf49d4ce31ddb3c0f006e.jpg" alt="Imagen4" className="imagenGaleria"/>
                    <img src="https://i.pinimg.com/236x/a7/7c/eb/a77ceba7b79fe857147fd5af8d9745c3.jpg" alt="Imagen5" className="imagenGaleria"/>
                </section>
            </div>
        </div>
        
    )
}