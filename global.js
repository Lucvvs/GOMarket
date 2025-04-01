document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const suggestionsBox = document.getElementById('suggestionsBox');
  
    // Lista de productos (puedes hacer esto dinámico si tienes muchos productos)
    const productList = [
      { name: "Manzanas", section: "frutas" },
      { name: "Plátanos", section: "frutas" },
      { name: "Naranjas", section: "frutas" },

      { name: "Lechuga", section: "verduras" },
      { name: "Zanahorias", section: "verduras" },
      { name: "Tomates", section: "verduras" }, 
      

      { name: "Leche Entera", section: "lacteos" },
      { name: "Queso Fresco", section: "lacteos" },
      { name: "Yogurt Natural", section: "lacteos" },

      { name: "Pollo Entero", section: "carnes" },
      { name: "Cerdo", section: "carnes" },
      { name: "Carne Vacuno", section: "carnes" },

      { name: "Pan Integral", section: "panaderia" },
      { name: "Croissant", section: "panaderia" },
      { name: "Baguette", section: "panaderia" },
      
      { name: "Agua Mineral", section: "bebestibles" },
      { name: "Jugo Natural", section: "bebestibles" },
      { name: "Bebida Lata", section: "bebestibles" },

      { name: "Papas Fritas", section: "snacks" },
      { name: "Galletas", section: "snacks" },
      { name: "Doritos", section: "snacks" },

      { name: "Jabón Líquido", section: "aseo" },
      { name: "Desinfectante", section: "aseo" },
      { name: "Limpiavidrios", section: "aseo" },

      { name: "Alimento para Perros", section: "mascotas" },
      { name: "Alimento para Gatos", section: "mascotas" },
      { name: "Juguete para Mascotas", section: "mascotas" },


    
      // Agrega más productos según tu catálogo
    ];
  
    // Filtrar productos y mostrar sugerencias
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      suggestionsBox.innerHTML = '';
  
      if (filter) {
        const filteredProducts = productList.filter(product => 
          product.name.toLowerCase().includes(filter)
        );
  
        filteredProducts.forEach(product => {
          const suggestion = document.createElement('div');
          suggestion.textContent = product.name;
          suggestion.addEventListener('click', () => {
            // Redirigir al producto en categorias.html
            window.location.href = `categorias.html#${product.section}`;
          });
          suggestionsBox.appendChild(suggestion);
        });
      }
    });
  
    // Ocultar sugerencias al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.innerHTML = '';
      }
    });
  });





  document.addEventListener('DOMContentLoaded', () => {
    const menuUsuario = document.getElementById('menuUsuario');
    const usuarioActivo = localStorage.getItem('usuarioActivo');

    if (menuUsuario && usuarioActivo) {
        menuUsuario.innerHTML = `
            <a href="index.html" class="text-white text-decoration-none">Home</a>
            <a href="acerca.html" class="text-white text-decoration-none">Acerca</a>
            <a href="contacto.html" class="text-white text-decoration-none">Contacto</a>
            <span class="text-white">¡Hola <span style="color: #ffae00e7;">${usuarioActivo}!</span></span>
            <button id="cerrarSesion" class="btn btn-outline-light btn-sm">Cerrar Sesión</button>
        `;

        const cerrarSesionBtn = document.getElementById('cerrarSesion');
        cerrarSesionBtn.addEventListener('click', () => {
            localStorage.removeItem('usuarioActivo');
            alert("🔒Sesión cerrada exitosamente!🔒");
            window.location.href = "index.html";
        });
    } else if (menuUsuario) {
        menuUsuario.innerHTML = `
        <div class="d-flex flex-wrap gap-2 justify-content-center justify-content-md-end align-items-center">
    <a href="index.html" class="text-white text-decoration-none">Home</a>
    <a href="acerca.html" class="text-white text-decoration-none">Acerca</a>
    <a href="contacto.html" class="text-white text-decoration-none">Contacto</a>
    <div class="d-flex gap-2 flex-shrink-0">
        <a href="login.html">
            <button class="btn btn-light btn-sm">Iniciar sesión</button>
        </a>
        <a href="registro.html">
            <button class="btn btn-outline-light btn-sm">Registro</button>
        </a>
    </div>
</div>
        `;
    }
});



function realizarPago() {
  // Mostrar el mensaje de pago realizado
  alert("💰✅Pago realizado con éxito💰✅");

  // Limpiar el carrito en sessionStorage
  sessionStorage.removeItem('cartItems');

  // Actualizar el contador del carrito a cero
  const contadorArt = document.getElementById('ContadorArt');
  if (contadorArt) contadorArt.textContent = '0';

  // Limpiar la tabla del carrito si está abierta
  const cartTableBody = document.getElementById('cartTableBody');
  if (cartTableBody) cartTableBody.innerHTML = '';

  // Actualizar el total a cero
  const cartTotal = document.getElementById('cartTotal');
  if (cartTotal) cartTotal.textContent = 'Total: $0.00';

  // Redirigir a la página de inicio
  window.location.href = "index.html";
}