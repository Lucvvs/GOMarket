function iniciarContador(duracionSegundos) {
 
  let startTime = sessionStorage.getItem('startTime');
  if (!startTime) {

    startTime = Date.now();
    sessionStorage.setItem('startTime', startTime);
  } else {
    startTime = parseInt(startTime, 10);
  }

  const horas = document.getElementById('horas');
  const minutos = document.getElementById('minutos');
  const segundos = document.getElementById('segundos');

  function actualizarContador() {
    // Calcula los segundos transcurridos 
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

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

// Inicia el contador  con3 horas
iniciarContador(3 * 60 * 60);






  