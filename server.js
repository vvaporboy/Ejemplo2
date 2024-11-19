const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Express!');
});

// Ruta para servir el archivo logueo.html
app.get('/inicio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','encargarimpresion.html'));  // Asegúrate de que 'logueo.html' esté dentro de 'public'
});
// Manejar la solicitud POST para /logueo
app.post('/encargarimpresion', (req, res) => {
  const { archivo, size, papel, cantidad, email, telefono, domicilio, codigopostal } = req.body;

  //acá vamos a agregar una llamada a la BD
  if (email === 'usuario@example.com' && password === 'password123') {
      res.json({ message: '¡Bienvenido!' });
  } else {
      res.status(401).json({ message: 'Falta llenar campos vacíos' });
  }
});

app.get('/encargoenviado', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'encargoenviado.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});