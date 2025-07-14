const productos = [
  {
    nombre: "Lenceria Hospitalaria",
    precio: 25.00,
    descripcion: "Blusa y pantalon de enfermera impermeable"
  },
  {
    nombre: "Indumentaria de trabajo",
    precio: 45.00,
    descripcion: "Pantalon y camisa de trabajo jeans con bolsillos y reflectivos"
  },
  {
    nombre: "Uniformes deportivos",
    precio: 15.00,
    descripcion: "Camiseta y pantaloneta deportiva de algodón sublimado personalizado"
  },
  {
    nombre: "Uniformes escolares",
    precio: 38.00,
    descripcion: "Camiseta,pantaloneta, chompa y medias deportivo de algodón, camisa y pantalon de parada"
  }
];

function renderizarProductos() {
  const lista = document.getElementById("productos de la lista");
  lista.innerHTML = ""; 

  productos.forEach((producto) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${producto.nombre}</strong><br>
      Precio: $${producto.precio.toFixed(2)}<br>
      <em>${producto.descripcion}</em>
    `;
    lista.appendChild(item);
  });
}

function agregarProducto() {
  const nuevoProducto = {
    nombre: "Nuevo Producto",
    precio: 0.0,
    descripcion: "Descripción del nuevo producto"
  };
  productos.push(nuevoProducto);
  renderizarProductos();
}


document.getElementById("add-product-btn").addEventListener("click", agregarProducto);


document.addEventListener("DOMContentLoaded", renderizarProductos);