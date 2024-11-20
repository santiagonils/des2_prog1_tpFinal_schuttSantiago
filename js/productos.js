$(document).ready(function () {
    // Productos disponibles
    const productos = [
        { id: 1, nombre: "Mix Degustación", descripcion: "Cheesecake, Torta de Nuez, Lemon Pie, Torta Alaskita", precio: 13000, imagen: "images/Mix.jpeg" },
        { id: 2, nombre: "Torta Terreneitor", descripcion: "Base de nuez, cobertura dulce de leche y chantilly.", precio: 17000, imagen: "images/tortaTerreneitor.jpeg" },
        { id: 3, nombre: "Cheesecake", descripcion: "Dulce de leche o frutos rojos con crema chantilly.", precio: 18000, imagen: "images/Cheesecake.jpeg" },
        { id: 4, nombre: "Lemon Pie", descripcion: "Merengue clásico o crema chantilly.", precio: 15000, imagen: "images/lemonPie.jpeg" },
        { id: 5, nombre: "Torta Alaskita", descripcion: "Base brownie, dulce de leche, chantilly y frutos rojos.", precio: 18000, imagen: "images/tortaAlaskita.jpeg" },
        { id: 6, nombre: "Conitos Rellenos", descripcion: "Rellenos de dulce de leche, cubiertos con grana", precio: 700, imagen: "images/conitos-rellenos.jpeg" },
        { id: 7, nombre: "Gorritos", descripcion: "Colores: Azul, Rosa, Rojo, Plateado", precio: 1200, imagen: "images/gorritos.jpeg" },
        { id: 8, nombre: "Velas de Cumpleaños", descripcion: "Colores: Azul, Rojo, Rosa, Plateado", precio: 1500, imagen: "images/velas-cumpleaños.jpeg" },
        { id: 9, nombre: "Bengalas", descripcion: "Colores: Azul, Rojo, Plateado o Amarillo.", precio: 1400, imagen: "images/bengalas.jpeg" },
    ];

    // Contenedor de productos
    const contenedorProductos = $('#contenedor-productos');

    // Insertar productos en el contenedor
    productos.forEach(producto => {
        const productoHTML = `
      <div class="col-md-4 mb-4">
          <div class="sc-product-item card">
              <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top img-fluid" data-name="product_image">
              <div class="card-body">
                  <h5 class="card-title" data-name="product_name">${producto.nombre}</h5>
                  <p class="card-text" data-name="product_desc">${producto.descripcion}</p>
                  <input type="hidden" name="product_price" value="${producto.precio}">
                  <input type="hidden" name="product_id" value="${producto.id}">
                  <button class="btn btn-primary sc-add-to-cart">Agregar al carrito</button>
              </div>
          </div>
      </div>
      `;
        contenedorProductos.append(productoHTML);
    });

    $(document).ready(function () {
        // Inicializar SmartCart con botones personalizados
        $('#carrito').smartCart({
            cartItemTemplate: `
            <div class="d-flex align-items-center">
                <img class="img-fluid me-2" src="{product_image}" alt="{product_name}" style="width: 50px; height: 50px;">
                <div>
                    <h6 class="mb-1">{product_name}</h6>
                    <small class="text-muted">{product_desc}</small><br>
                    <small class="fw-bold">Precio: $ {product_price}</small>
                </div>
            </div>`,
            cartButtonsTemplate: `
            <button class="btn btn-info sc-cart-checkout" type="button">Checkout</button>
            <button class="btn btn-danger sc-cart-clear" type="button">Clear</button>`
        });
    
        // Monitorear cambios en el carrito
        $('#carrito').on('DOMSubtreeModified', function () {
            const totalProductos = $('.sc-cart-item-list .sc-cart-item').length;
            const botonCheckout = $('.sc-cart-checkout');
    
            if (totalProductos > 0) {
                botonCheckout.removeClass('disabled'); // Habilitar botón
            } else {
                botonCheckout.addClass('disabled'); // Deshabilitar botón si el carrito está vacío
            }
        });
    
        // Evento para el botón de checkout
        $(document).on('click', '.sc-cart-checkout', function (e) {
            if ($(this).hasClass('disabled')) {
                return; // Evitar clic en un botón deshabilitado
            }
    
            console.log('Botón de checkout clickeado'); // Verificar si el evento ocurre
    
            const mensaje = "¡Hola! Quiero realizar un pedido. Te envio el resumen de mi carrito.";
            const numeroWhatsapp = '+541157397623'; // Número de WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
            window.open(urlWhatsApp, '_blank'); // Abrir WhatsApp en nueva pestaña
        });
    });
    
});