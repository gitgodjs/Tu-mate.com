export default function Clientes(){
    return(
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-10 m-2" id="quienesSomos">
                <section className="flex w-auto h-96">
                    <img src="https://i.pinimg.com/564x/94/2a/02/942a027c9da50bed8e61adf7a5b5c099.jpg" alt="Imagen1" className="imagenGaleria"/>
                    <img src="https://i.pinimg.com/564x/39/ea/ce/39eaced01b40d7d5edab1e431b4cd5b4.jpg" alt="Imagen2" className="imagenGaleria"/>
                    <img src="https://i.pinimg.com/564x/0c/fa/7e/0cfa7e815aef1985bd4c56f38e1eb47b.jpg" alt="Imagen3" className="imagenGaleria"/>
                    <img src="https://i.pinimg.com/564x/f3/39/5b/f3395b0bc9b2f692109d72c754d1bae1.jpg" alt="Imagen4" className="imagenGaleria"/>
                    <img src="https://i.pinimg.com/564x/24/1c/d8/241cd8e36cbd0e6320ba6acfa2929226.jpg" alt="Imagen5" className="imagenGaleria"/>
                </section>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-4xl">Amigos de la casa!</h3>
                    <p className="text-lg">Un grupo de amigos apasionados por el mate, igual que tú. Nos unió el amor por esta maravillosa tradición y la cultura que la rodea, y estamos emocionados de tenerte con nosotros.</p>
                    <p className="text-lg">Aquí no solo vendemos productos; compartimos una pasión que va más allá del simple acto de beber mate. Queremos que cada cliente sienta la misma calidez y entusiasmo que nosotros sentimos por cada sorbo.</p>
                    <p className="text-lg">Tu papel es fundamental para llevar esta pasión a cada rincón. Si alguna vez necesitas apoyo o tienes alguna pregunta, recuerda que estamos aquí como un equipo de amigos listos para ayudarte.</p>
                    <p className="text-lg">¡Gracias por ser parte de nuestra comunidad! Juntos, haremos que cada experiencia con el mate sea especial.</p>
                </div>
            </div>
        </div>
        
    )
}