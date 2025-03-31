document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.btn-llevar-cat');
    
    botones.forEach(function(boton) {
      boton.addEventListener('click', function() {
        boton.classList.add('animate');
        
        // Remueve la clase después de la duración de la animación (0.4s)
        setTimeout(function() {
          boton.classList.remove('animate');
        }, 400);
      });
    });
  });