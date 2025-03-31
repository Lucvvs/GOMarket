function iniciarContador(duracionSegundos) {
  // Verifica si ya se guardó la hora de inicio en sessionStorage.
  let startTime = sessionStorage.getItem('startTime');
  if (!startTime) {
    // Si no existe, la establece con la hora actual (en milisegundos).
    startTime = Date.now();
    sessionStorage.setItem('startTime', startTime);
  } else {
    startTime = parseInt(startTime, 10);
  }

  const horas = document.getElementById('horas');
  const minutos = document.getElementById('minutos');
  const segundos = document.getElementById('segundos');

  function actualizarContador() {
    // Calcula los segundos transcurridos desde que el usuario entró a la página.
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    // Calcula el tiempo restante restando lo transcurrido a la duración total.
    let tiempoRestante = duracionSegundos - elapsedSeconds;
    if (tiempoRestante < 0) {
      tiempoRestante = 0;
    }
    const h = Math.floor(tiempoRestante / 3600);
    const m = Math.floor((tiempoRestante % 3600) / 60);
    const s = tiempoRestante % 60;

    horas.textContent = String(h).padStart(2, '0');
    minutos.textContent = String(m).padStart(2, '0');
    segundos.textContent = String(s).padStart(2, '0');
  }

  actualizarContador();
  setInterval(actualizarContador, 1000);
}

// Inicia el contador con 3 horas (3 * 60 * 60 segundos)
iniciarContador(3 * 60 * 60);



  