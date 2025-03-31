document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            const inputs = registrationForm.querySelectorAll('.form-control');
            let formValido = true;

            inputs.forEach(input => {
                const errorMessage = input.nextElementSibling;
                if (input.checkValidity()) {
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                    if (errorMessage) {
                        errorMessage.textContent = "✓";
                        errorMessage.style.color = "green";
                    }
                } else {
                    input.classList.remove('is-valid');
                    input.classList.add('is-invalid');
                    formValido = false;

                    const mensaje = input.validationMessage || "Campo inválido";
                    if (errorMessage) {
                        errorMessage.textContent = mensaje;
                        errorMessage.style.color = "red";
                    }
                }
            });

            if (formValido) {
                // Obtener los datos del formulario
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
            
                // Crear un objeto con los datos del usuario
                const userData = {
                    username: username,
                    password: password
                };
            
                // Guardar en localStorage usando el nombre de usuario como clave
                localStorage.setItem(username, JSON.stringify(userData));
            
                alert("✅¡Registro exitoso! Ahora puedes iniciar sesión en MarketGO✅");
                registrationForm.reset();
                inputs.forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                    const errorMessage = input.nextElementSibling;
                    if (errorMessage) {
                        errorMessage.textContent = "";
                    }
                });
                window.location.href = "login.html";
            }
        });
    }
});