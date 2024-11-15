$(document).ready(function () {
  // Productos disponibles
  const productos = [
      { id: 1, nombre: "Mix Degustación", descripcion: "Cheesecake, Torta de Nuez, Lemon Pie, Torta Alaskita", precio: 13000, imagen: "/images/Mix.jpeg" },
      { id: 2, nombre: "Torta Terreneitor", descripcion: "Base de nuez, cobertura dulce de leche y chantilly.", precio: 17000, imagen: "/images/tortaTerreneitor.jpeg" },
      { id: 3, nombre: "Cheesecake", descripcion: "Dulce de leche o frutos rojos con crema chantilly.", precio: 18000, imagen: "/images/Cheesecake.jpeg" },
      { id: 4, nombre: "Lemon Pie", descripcion: "Merengue clásico o crema chantilly.", precio: 15000, imagen: "/images/lemonPie.jpeg" },
      { id: 5, nombre: "Torta Alaskita", descripcion: "Base brownie, dulce de leche, chantilly y frutos rojos.", precio: 18000, imagen: "/images/tortaAlaskita.jpeg" },
      { id: 6, nombre: "Conitos Rellenos", descripcion: "Rellenos de dulce de leche, cubiertos con grana", precio: 700, imagen: "/images/conitos-rellenos.jpeg" },
      { id: 7, nombre: "Gorritos", descripcion: "Colores: Azul, Rosa, Rojo, Plateado", precio: 1200, imagen: "/images/gorritos.jpeg" },
      { id: 8, nombre: "Velas de Cumpleaños", descripcion: "Colores: Azul, Rojo, Rosa, Plateado", precio: 1500, imagen: "/images/velas-cumpleaños.jpeg" },
      { id: 9, nombre: "Bengalas", descripcion: "Colores: Azul, Rojo, Plateado o Amarillo.", precio: 1400, imagen: "/images/bengalas.jpeg" },
  ];

  // Contenedor de productos
  const contenedorProductos = $('#contenedor-productos');

  // Insertar productos en el contenedor
  productos.forEach(producto => {
    const productoHTML = `
    <div class="col-md-3">
        <div class="menu-entry">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid">
            <div class="text text-center pt-4">
                <h3><a href="#">${producto.nombre}</a></h3>
                <p>${producto.descripcion}</p>
                <p class="price"><span>$${producto.precio}</span></p>
                <p><a href="#" class="btn btn-primary" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}" data-imagen="${producto.imagen}">Agregar al Carrito</a></p>
            </div>
        </div>
    </div>
    `;
    
      contenedorProductos.append(productoHTML);
  });

  
});
