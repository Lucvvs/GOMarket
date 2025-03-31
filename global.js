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
      
      { name: "Agua Mineral", section: "Bebidas" },
      { name: "Jugo Natural", section: "Bebidas" },
      { name: "Bebida Lata", section: "Bebidas" },

      { name: "Papas Fritas", section: "Snacks" },
      { name: "Galletas", section: "Snacks" },
      { name: "Doritos", section: "Snacks" },

      { name: "Jabón Líquido", section: "Aseo" },
      { name: "Desinfectante", section: "Aseo" },
      { name: "Limpiavidrios", section: "Aseo" },

      { name: "Alimento para Perros", section: "mascotas" },
      { name: "Alimento para Gatos", section: "Mascotas" },
      { name: "Juguete para Mascotas", section: "Mascotas" },


    
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