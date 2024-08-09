import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './Auth/AuthProvider';
import LoginPag from './Paginas/Pag-Login';
import Inicio from './Paginas/Pag-Inicio';
import ProductosPag from './Paginas/Pag-Productos';
import Header from './Componentes/Fijos/Header';
import Prueba from './Paginas/Pag-prueba';
import Footer from './Componentes/Fijos/Footer';
import ProtectedRoute from './Paginas/Protegidas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AuthProvider>
        <Routes>
          <Route path="/Login" element={<LoginPag />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos" element={<ProductosPag />} />
          <Route path="/Prueba" element={<Prueba />} />
          <Route path="/ProductoUnico" element={<ProtectedRoute/>} />
        </Routes>
        </AuthProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
