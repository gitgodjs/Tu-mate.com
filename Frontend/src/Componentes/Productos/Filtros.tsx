interface FiltrosProps {
    filtro: (filter: string) => void;
    orden: (orden: number) => void;
}

export default function Filtros( { filtro, orden }:FiltrosProps ) {
  const Prod_list = ["Todos", "Mates", "Bombillas", "Termos", "Bolsos", "Yerbas"];
  const Orden = ["Cualquiera", "Menos a mayor", "Mayor a menor"];

  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-2 justify-center gap-2">
        <select
          name="Productos"
          id="Productos"
          className="text-lg p-1 m-1 bg-gray-200"
          onChange={(e) => { filtro(e.target.value) }}
        >
          {Prod_list.map((prod, key) => (
            <option value={prod} key={key}>
              {prod}
            </option>
          ))}
        </select>
        <select
          name="Orden"
          id="Orden"
          className="text-lg p-1 m-1 bg-gray-200"
          onChange={(e) => { orden (Number(e.target.value)) }}
        >
          {Orden.map((orden, key) => (
            <option value={key} key={key}>
              {orden}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}