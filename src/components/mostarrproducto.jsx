const axios = require('axios');
const Swal = require('sweetalert2');


async function mostrarProductos() {
    try {
      const response = await axios.get('http://localhost:3001/api/product', {
        params: {
          fields: 'name,category,price,imgURL,company',
        },
      });
      const productos = response.data;
  
      // Crear una lista con los datos requeridos de cada producto
      const listaProductos = productos.map(
        (producto) => `- ${producto.name} (${producto.category}): ${producto.price} - ${producto.imgURL} - ${producto.company}`
      ).join('\n');
  
      // Mostrar un popup con la lista de productos
      await Swal.fire({
        title: 'Lista de Productos',
        text: listaProductos,
        icon: 'info',
        confirmButtonText: 'Cerrar',
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  
  
  module.exports = mostrarProductos();