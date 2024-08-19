// Define la estructura de un usuario
export interface User {
  name: string;
  email: string;
}

// Define la estructura de la respuesta de autenticación
export interface AuthResponse {
  body: {
    name: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  }
}

// Define la estructura de la respuesta de error de autenticación
export interface AuthResponseError {
  body: {
    error: string;
  };
}

// Define la estructura de la respuesta del token de acceso
export interface AccessTokenResponse {
  statusCode: number;
  body: {
    accessToken: string;
  };
  error: string;
}

export interface Producto {
  _id: string;
  id: string; 
  tipo: string;
  name: string;
  descripcion: string;
  imageUrl: string;
  precio: number;
}

export interface ApiResponse {
  data: {
      productos: Producto[];
  };
}