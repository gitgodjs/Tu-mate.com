import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../Auth/constants';

export default function Producto() {
  const {id} = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/producto/${id}`)
      .then(response => {
        if (!response.ok) {
          console.log('Error al cargar el producto');
        }
        return response.json();
      })
      .then(data => {
        setProducto(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    if (producto) {
      console.log(producto);
    }
  }, [producto]);

  return (
    <div>
        
    </div>
  );
}
