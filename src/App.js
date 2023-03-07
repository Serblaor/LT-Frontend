import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductosTable from './components/tablaproductos';
import CompanyList from './components/Listadeempresas'
import Formulario from "./components/Formulario"
import styles from './App.module.scss'
import Home from "./components/home";
import CrearProductoForm from "./components/crearP"
const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productostable" element={<ProductosTable />}/>
          <Route path="/CrearProductoForm" element={<CrearProductoForm />}/>
          <Route path="/CompanyList" element={<CompanyList />}/>
          <Route path="/FormularioEmpresas" element={<Formulario />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
