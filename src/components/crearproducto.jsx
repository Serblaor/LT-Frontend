// const axios = require('axios');
// const Swal = require('sweetalert2');


// async function mostrarProductos() {
//   try {
//     const response = await axios.get('http://localhost:3001/api/product');
//     const productos = response.data;

//     // Crear una lista con los nombres de los productos
//     const listaProductos = productos.map((producto) => `- ${producto.nombre}`).join('\n');

//     // Mostrar un popup con la lista de productos
//     await Swal.fire({
//       title: 'Lista de Productos',
//       text: listaProductos,
//       icon: 'info',
//       confirmButtonText: 'Cerrar',
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// mostrarProductos();
