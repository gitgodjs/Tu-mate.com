import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './Auth/AuthProvider';
import Login from './Paginas/Login';
import Inicio from './Paginas/Inicio';
import Header from './Componentes/Fijos/Header';
import Prueba from './Paginas/prueba';
import Footer from './Componentes/Fijos/Footer';
import ProtectedRoute from './Paginas/Protegidas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AuthProvider>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Inicio />} />
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
