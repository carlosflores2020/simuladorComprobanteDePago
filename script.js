// Función principal al enviar el formulario
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let beneficiario = document.getElementById("beneficiario").value.trim();
    let codigo = document.getElementById("codigo").value.trim();
    let monto = parseInt(document.getElementById("monto").value);
  
    // Validación básica
    if (!beneficiario || !codigo || isNaN(monto) || monto <= 0) {
      alert("Por favor, complete todos los campos correctamente.");
      return;
    }
  
    // Extraer moneda del código
    let partes = codigo.split("-");
    let moneda = partes[1];
    let comision = 0;
  
    switch (moneda) {
      case "ARS": comision = 0.05; break;
      case "USD": comision = 0.07; break;
      case "EUR": comision = 0.07; break;
      case "GBP": comision = 0.09; break;
      case "JPY": comision = 0.09; break;
      default: moneda = "Moneda no autorizada"; break;
    }
  
    let monto_base = moneda === "Moneda no autorizada" ? 0 : Math.round(monto * (1 - comision) * 100) / 100;
    let monto_final = monto_base > 500000 ? Math.round(monto_base * 0.79 * 100) / 100 : monto_base;
  
    // Mostrar resultados
    document.getElementById("r_beneficiario").textContent = beneficiario;
    document.getElementById("r_moneda").textContent = moneda;
    document.getElementById("r_monto_base").textContent = monto_base.toFixed(2);
    document.getElementById("r_monto_final").textContent = monto_final.toFixed(2);
    document.getElementById("resultado").classList.remove("hidden");
  });
  
  // Función para descarga con contraseña
  function pedirContraseña() {
    let clave = prompt("Ingrese la contraseña para descargar los archivos:");
    if (clave === "1234") {
      // Cambia este enlace por la URL real de tu archivo ZIP
      window.location.href = "descargas/comprob.rar";
    } else {
      alert("Contraseña incorrecta. No se puede descargar.");
    }
  }
  