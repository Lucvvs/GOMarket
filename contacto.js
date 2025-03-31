document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {

        event.preventDefault();
        event.stopPropagation();
  

        if (contactForm.checkValidity()) {

 
          alert("Formulario enviado correctamente, serás contactado a la brevedad por uno de nuestros colaboradores!!!");
        
          contactForm.reset();
          contactForm.classList.remove('was-validated');
        } else {
    
          contactForm.classList.add('was-validated');
        }
      });
    }
  });