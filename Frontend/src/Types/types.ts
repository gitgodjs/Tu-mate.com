// Define la estructura de un usuario
export interface User {
  _id: string;
  name: string;
  email: string;
}

// Define la estructura de la respuesta de autenticación
export interface AuthResponse {
  body: {
    name: User;
    accessToken: string;
    refreshToken: string;
  };
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
