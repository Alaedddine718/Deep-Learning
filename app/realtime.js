// app/realtime.js
// Conexión con el servidor usando Socket.IO
window.socket = io();

// Cuando se conecta correctamente
window.socket.on('connect', () => {
  console.log('✅ Conectado al servidor Socket.IO');
});

// Recibe confirmación de que el servidor recibió el trazo
window.socket.on('stroke_ack', (data) => {
  // Por ahora solo mostramos en consola
  console.log('Trazo recibido por el servidor:', data);
});
