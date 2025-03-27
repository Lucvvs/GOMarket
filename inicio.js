function iniciarContador(duracionSegundos) {
    let tiempoRestante = duracionSegundos;
  
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');
  
    function actualizarContador() {
      const h = Math.floor(tiempoRestante / 3600);
      const m = Math.floor((tiempoRestante % 3600) / 60);
      const s = tiempoRestante % 60;
  
      horas.textContent = String(h).padStart(2, '0');
      minutos.textContent = String(m).padStart(2, '0');
      segundos.textContent = String(s).padStart(2, '0');
  
      if (tiempoRestante > 0) {
        tiempoRestante--;
      }
    }
  
    actualizarContador();
    setInterval(actualizarContador, 1000);
  }
  
  // Inicia el contador con 3 horas (por ejemplo)
  iniciarContador(3 * 60 * 60);