import ProductoUnico from "./Producto";
import Login from "./Login";
import { useAuth } from "../Auth/AuthProvider";

function ProtectedRoute(){
    const auth = useAuth();

    return auth.isAuthenticated ? <ProductoUnico/> : <Login/>
}


export default ProtectedRoute;