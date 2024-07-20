import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './Paginas/Inicio';
import Nosotros from './Paginas/Nosotros';
import Header from './Componentes/Fijos/Header';
import Footer from './Componentes/Fijos/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
