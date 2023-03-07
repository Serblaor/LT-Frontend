import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CrearProductoForm() {
  const [producto, setProducto] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    imagen: '',
    empresa: ''
  });
  

  const handleChange = (event) => {
    setProducto({
      ...producto,
      [event.target.name]: event.target.value
    });
  }
 
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const nuevoProducto = {
      name: producto.nombre,
      category: producto.categoria,
      price: producto.precio,
      imgURL: producto.imagen,
      company: producto.empresa,
    };
    try {
      const response = await axios.post('http://localhost:3001/api/product', nuevoProducto);
      console.log(response);
      toast.success('Producto guardado correctamente');
    } catch (error) {
      console.error(error);
      toast.error('Error al guardar el producto');
    }
  };
  

  return (
    <> 
 

    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Producto</legend>
        <TextField
          label="Nombre"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          required
        />
        <TextField
          label="Categoría"
          name="categoria"
          value={producto.categoria}
          onChange={handleChange}
          required
        />
        <TextField
          label="Precio"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
          type="number"
          required
        />
        <TextField
          label="Imagen"
          name="imagen"
          value={producto.imagen}
          onChange={handleChange}
          required
        />
        <TextField
          label="Empresa"
          name="empresa"
          value={producto.empresa}
          onChange={handleChange}
          required
        />
      </fieldset>
      <Button type="submit" variant="contained" color="primary">
        Guardar
      </Button>
      <ToastContainer position="bottom-right" />
    </form>
    </>
   
  );
}

export default CrearProductoForm;