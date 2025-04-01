document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.btn-llevar-cat');
    
    botones.forEach(function(boton) {
      boton.addEventListener('click', function() {
        boton.classList.add('animate');
        
  
        setTimeout(function() {
          boton.classList.remove('animate');
        }, 400);
      });
    });
  });