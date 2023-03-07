// import axios from "axios";

// const endpoint = "http://localhost:3001/api/product";

// // Función para obtener los productos
// const getProductos = async () => {
//   try {
//     const response = await axios.get(endpoint);
//     const productos = response.data;
//     return productos;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Función para mostrar los productos en una lista con iconos de edición
// const mostrarProductos = (productos) => {
//   const listaProductos = document.getElementById("lista-productos");
//   listaProductos.innerHTML = "";
//   productos.forEach((producto) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <span>${producto.nombre} - ${producto.precio}</span>
//       <span>
//         <i class="fas fa-edit" onclick="editarProducto(${producto.id})"></i>
//       </span>
//     `;
//     listaProductos.appendChild(li);
//   });
// };

// // Función para editar un producto
// const editarProducto = async (id) => {
//   const nombre = prompt("Ingrese el nuevo nombre del producto:");
//   const precio = prompt("Ingrese el nuevo precio del producto:");
//   const producto = { nombre, precio };
//   try {
//     const response = await axios.put(`${endpoint}/${id}`, producto);
//     const productos = await getProductos();
//     mostrarProductos(productos);
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Función para guardar los cambios en los productos
// const guardarCambios = async () => {
//   const productos = await getProductos();
//   try {
//     const response = await axios.put(endpoint, productos);
//     console.log("Cambios guardados correctamente");
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Obtener los productos y mostrarlos en la lista al cargar la página
// document.addEventListener("DOMContentLoaded", async () => {
//   const productos = await getProductos();
//   mostrarProductos(productos);
// });

// // Agregar un evento al botón de guardar para guardar los cambios
// const btnGuardar = document.getElementById("btn-guardar");
// btnGuardar.addEventListener("click", guardarCambios);