import { ApiResponse, Producto } from "../../Types/types";
import { API_URL } from "../../Auth/constants";

export default async function obtenerProductos() {
    return new Promise<Producto[]>((resolve, reject) => {
        fetch(`${API_URL}/productos`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No pudimos obtener los productos');
            }
            return response.json();
        })
        .then((res: ApiResponse) => {
            resolve(res.data.productos);
        })
        .catch(error => {
            console.error(error);
            reject([]);
        });
    });
}
