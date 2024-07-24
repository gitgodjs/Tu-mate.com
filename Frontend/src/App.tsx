import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Paginas/Login';
import Inicio from './Paginas/Inicio';
import Nosotros from './Paginas/Nosotros';
import Header from './Componentes/Fijos/Header';
import Prueba from './Paginas/prueba';
import Footer from './Componentes/Fijos/Footer';
import ProductoUnico from './Paginas/Producto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Prueba" element={<Prueba />} />
          <Route path="/ProductoUnico" element={<ProductoUnico />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
