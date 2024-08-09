import ProductoUnico from "./Pag-Producto";
import LoginPag from "./Pag-Login";
import { useAuth } from "../Auth/AuthProvider";

function ProtectedRoute(){
    const auth = useAuth();

    return auth.isAuthenticated ? <ProductoUnico/> : <LoginPag />
}


export default ProtectedRoute;