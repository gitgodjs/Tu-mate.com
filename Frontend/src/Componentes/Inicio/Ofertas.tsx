import React from "react";
import listaOfertas from "../../Constantes temporales/listaOfertas";

interface OfertasProps {
  texto: string;
}

const Ofertas: React.FC<OfertasProps> = ({ texto }) => {
  return (
    <div className="mt-16" id="ofertas">
      <h2 className="flex justify-center uppercase font-bold text-4xl mb-14">{texto}</h2>
      <div className="bg-gray-900 m-8 mx-3 rounded-md w-auto h-auto">
        <div className="flex gap-5 p-4 overflow-x-auto scrollbar-custom">
          {listaOfertas.map((objeto, index) => (
            <div className="flex flex-none h-auto bg-white p-4 rounded-md w-auto" key={index}>
              <div className="flex flex-col p-4 text-xl gap-1 font-sans relative">
                <h2 className="text-3xl font-bold">{objeto.titulo}</h2>
                <p>{objeto.descripcion[0]}</p>
                <p>{objeto.descripcion[1]}</p>
                <p>{objeto.descripcion[2]}</p>
                <span className="mb-10">Precio: {objeto.precio}</span>
                <button className="absolute left-4 bottom-0 m-0 border-none text-white font-medium bg-blue-600 text-xl p-2 rounded-md cursor-pointer duration-1000 hover:bg-yellow-400 hover:rounded-md">
                  Agregar al carrito
                </button>
              </div>
              <div>
                <img className="w-auto h-48" src={objeto.imagen} alt="imagen oferta" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ofertas;
