document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
  
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();
    
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
    
            const storedUser = localStorage.getItem(username);
    
            if (storedUser) {
                const userData = JSON.parse(storedUser);
                if (userData.password === password) {
                    alert("🛒¡Bienvenido! A comprar!🛒");
                    loginMessage.style.display = "none";
    
                    // Guardar el nombre de usuario 
                    localStorage.setItem("usuarioActivo", username);
    
                    // Redirigir al home 
                    window.location.href = "index.html";
                } else {
                    loginMessage.textContent = "Contraseña incorrecta.";
                    loginMessage.style.display = "block";
                }
            } else {
                loginMessage.textContent = "Usuario no encontrado.";
                loginMessage.style.display = "block";
        }
      });
    }
  });