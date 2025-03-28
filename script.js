
    var fecha = new Date();
    var opciones = { year: 'numeric'};
    var fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
    document.getElementById('fechaActual').textContent = fechaFormateada;
