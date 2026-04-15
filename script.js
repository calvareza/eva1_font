// Toggle modo día/noche
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// Validación formulario
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const servicio = document.getElementById("servicio").value;
  const mensaje = document.getElementById("mensaje").value.trim();

  if(!nombre || !servicio || !mensaje){
    alert("Todos los campos son obligatorios");
    return;
  }

  console.log("Nombre:", nombre);
  console.log("Servicio:", servicio);
  console.log("Mensaje:", mensaje);
  alert("Formulario enviado correctamente.");
});
