function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === "553344655" && password === "1964") {
    // Redirige o muestra contenido VIP
    document.body.innerHTML = `
      <h2>Hola Ricardo Peña</h2>
      <p>Ya está la liquidación del premio.</p>
      <div>
        <label for="monto">Ingresa el monto:</label>
        <input type="number" id="monto"><br><br>
        <button onclick="transferir()">Transferir</button>
        <p id="mensajeTransferencia" style="color: green;"></p>
      </div>
      <hr>
      <h3>Datos Cliente VIP</h3>
      <p># de cuenta: 4500</p>
      <p>Ruta #: 0026</p>
      <p>SWIFT/BIC CODE: FTBMUS44</p>
    `;
  } else {
    document.getElementById('loginError').textContent = "Usuario o contraseña incorrectos";
  }
}

function transferir() {
  const monto = document.getElementById("monto").value;
  const mensaje = document.getElementById("mensajeTransferencia");

  if (monto === "13134000000") {
    mensaje.innerHTML = "✅ Transferencia en proceso.<br>Falta la aprobación del Contralor General de la República de Colombia, el señor Carlos Hernán Rodríguez.<br>Por favor comuníquese con el área encargada de Bancolombia.";
  } else {
    mensaje.innerHTML = "❌ Monto incorrecto. Por favor ingrese exactamente: 13,134,000,000";
  }
}