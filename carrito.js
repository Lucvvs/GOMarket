document.addEventListener('DOMContentLoaded', () => {

  let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || {};
  

  const floatingCart = document.getElementById('floatingCart');
  const cartSubmenu = document.getElementById('cartSubmenu');
  const closeBtn = document.querySelector('.cart-content .close');
  const cartTableBody = document.getElementById('cartTableBody');
  const contadorArt = document.getElementById('ContadorArt');

  // Función para actualizar el contador globa
  function updateGlobalCount() {
    const totalCount = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
    contadorArt.textContent = totalCount;
  }

  // Función para actualizar la tabla del carrito.
  function updateCartTable() {
    cartTableBody.innerHTML = '';

    Object.keys(cartItems).forEach(key => {
      const item = cartItems[key];
      const row = document.createElement('tr');

   
      const nameCell = document.createElement('td');
      nameCell.textContent = item.name;

 
      const priceCell = document.createElement('td');
      priceCell.textContent = item.price;


      const quantityCell = document.createElement('td');
      quantityCell.className = 'quantity-cell';

      const minusButton = document.createElement('button');
      minusButton.className = 'MenosArtCarrito';
      minusButton.textContent = '';

      const quantitySpan = document.createElement('span');
      quantitySpan.className = 'quantity';
      quantitySpan.textContent = item.quantity;

      const plusButton = document.createElement('button');
      plusButton.className = 'MasArtCarrito';
      plusButton.textContent = '';

      quantityCell.appendChild(minusButton);
      quantityCell.appendChild(quantitySpan);
      quantityCell.appendChild(plusButton);

      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(quantityCell);

      cartTableBody.appendChild(row);

      plusButton.addEventListener('click', (e) => {
        e.stopPropagation();
        cartItems[item.name].quantity += 1;
        updateCartTable();
        updateGlobalCount();
      });

      minusButton.addEventListener('click', (e) => {
        e.stopPropagation();
        cartItems[item.name].quantity = Math.max(0, cartItems[item.name].quantity - 1);
        if (cartItems[item.name].quantity === 0) {
          delete cartItems[item.name];
        }
        updateCartTable();
        updateGlobalCount();
      });
    });

    updateTotalPrice();
    updateGlobalCount();


    // Guarda el estado en sessionStorag
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // Función para actualizar el total 
  function updateTotalPrice() {
    let total = 0;
    Object.keys(cartItems).forEach(key => {
      const item = cartItems[key];
      const priceNum = parseInt(item.price.replace(/[^0-9]+/g, ''), 10) || 0;
      total += priceNum * item.quantity;
    });
    
    const formatter = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    });
    document.getElementById('cartTotal').textContent = "Total: " + formatter.format(total);
  }


  floatingCart.addEventListener('click', (e) => {
    e.preventDefault();
    cartSubmenu.style.display = 'block';
    updateCartTable();
  });


  closeBtn.addEventListener('click', () => {
    cartSubmenu.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === cartSubmenu) {
      cartSubmenu.style.display = 'none';
    }
  });

  // Evento para agregar producto 
  const addButtons = document.querySelectorAll('.btn-llevar-cat, .btn-llevar');
addButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    
    const container = button.closest('.card-body') || button.closest('.oferta-card');
    if (container) {
      
      const productNameElem = container.querySelector('.card-title') || container.querySelector('h6');
    
      const priceElem = container.querySelector('.precio') || container.querySelector('.fw-bold.text-success');
      if (productNameElem && priceElem) {
        const productName = productNameElem.textContent.trim();
        const productPrice = priceElem.textContent.trim();
   
        if (cartItems[productName]) {
          cartItems[productName].quantity += 1;
        } else {
          cartItems[productName] = {
            name: productName,
            price: productPrice,
            quantity: 1
            };
          }
          updateGlobalCount();
          sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
      }
    });
  });


  updateGlobalCount();
});