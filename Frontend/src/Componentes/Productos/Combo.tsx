interface ComboProps {
    termo: string;
    mate: string;
    bombilla: string;
    bolso: string;
    yerba: string;
    precioTotal: number;
    pasoAtrasCombo: () => void;
    reiniciarPasos: () => void;
}

export default function Combo({
    termo,
    mate,
    bombilla,
    bolso,
    yerba,
    precioTotal,
    pasoAtrasCombo,
    reiniciarPasos
}: ComboProps) {
    
    return (
        <div className="grid grid-cols-1 gap-3 p-1">
            <section id="Armar Combo"
            className="grid grid-cols-5"
            >
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer" >
                    <img src="https://img.icons8.com/?size=65&id=Gt1ywJsjLOQO&format=png&color=000000"/>
                    <span>Termos</span>
                </label>
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer">
                    <img src="https://img.icons8.com/?size=65&id=41483&format=png&color=000000"/>
                    <span>Mates</span>
                </label>
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer">
                    <img src="https://img.icons8.com/?size=65&id=Q6Ns02u6z7rD&format=png&color=000000"/>
                    <span>Bombillas</span>
                </label>
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer">
                    <img src="https://img.icons8.com/?size=65&id=NaKkLLFlxMDe&format=png&color=000000"/>
                    <span>Bolsos Materos</span>
                </label>
                <label className="grid grid-cols-1 justify-items-center text-center cursor-pointer">
                    <img src="https://img.icons8.com/?size=65&id=ZTZYYl9xsFfB&format=png&color=000000"/>   
                    <span>Yerbas</span>
                </label>
            </section>
            <div id="Combo" className="grid grid-cols-1 gap-1">
                <div id="Objetos" className="flex gap-2">
                    <h3 className="text-xl font-bold items-center">Combo:</h3>
                    <span className="text-lg">
                        {termo} {mate} {bombilla} {bolso} {yerba} 
                    </span>
                </div>
                <div id="Precio y Boton" className="grid grid-cols-1 items-center gap-2">
                    <div>
                        <span className="text-center text-xl">Precio total: ${precioTotal}</span>
                    </div>
                    <div id="botones" className="grid grid-cols-2 gap-5">
                        <button onClick={pasoAtrasCombo} className="bg-gray-200 rounded-md cursor pointer duration-1000 hover:bg-gray-400">Atras</button>
                        <button onClick={reiniciarPasos} className="bg-gray-200 rounded-md cursor pointer duration-1000 hover:bg-gray-400">Reiniciar</button>
                    </div>
                    <div className="grid">
                        <button className="border-none text-white font-medium bg-blue-600 text-lg p-1 rounded-md cursor-pointer duration-1000 hover:bg-yellow-400 ">
                            Agregar combo al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}