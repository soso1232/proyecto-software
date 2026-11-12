const express = require('express');
const path = require('path');
const UsuarioController = require('./src/controllers/UsuarioController');
const ContactoController = require('./src/controllers/ContactoController');
const ProyectoController = require('./src/controllers/ProyectoController');
const DistribucionController = require('./src/controllers/DistribucionController');
const CotizacionController = require('./src/controllers/CotizacionController');

const app = express();
const usuarioCtrl = new UsuarioController();
const contactoCtrl = new ContactoController();
const proyectoCtrl = new ProyectoController();
const distribucionCtrl = new DistribucionController();
const cotizacionCtrl = new CotizacionController();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const vista = (archivo) => (req, res) =>
  res.sendFile(path.join(__dirname, 'src', 'views', archivo));

// Vistas
app.get('/', vista('login.html'));
app.get('/menu', vista('menu.html'));
app.get('/usuarios', vista('usuarios.html'));
app.get('/contactos', vista('contactos.html'));
app.get('/proyectos', vista('proyectos.html'));
app.get('/distribucion', vista('distribucion.html'));
app.get('/cotizaciones', vista('cotizaciones.html'));
app.get('/cotizacion-pdf', vista('cotizacion-pdf.html'));

// API Usuarios (HU01)
app.post('/api/login', (req, res) => {
  const { correo, clave } = req.body;
  const usuario = usuarioCtrl.iniciarSesion(correo, clave);
  if (usuario) return res.json(usuario);
  res.status(401).json({ error: 'Correo o clave incorrectos' });
});
app.get('/api/usuarios', (req, res) => res.json(usuarioCtrl.listarUsuarios()));
app.post('/api/usuarios', (req, res) => {
  const { nombre, correo, clave, rol } = req.body;
  const creado = usuarioCtrl.crearUsuario(nombre, correo, clave, rol);
  if (creado) return res.status(201).json(creado);
  res.status(409).json({ error: 'El correo ya existe' });
});

// API Contactos (HU02)
app.get('/api/contactos', (req, res) => res.json(contactoCtrl.listarContactos()));
app.post('/api/contactos', (req, res) => {
  const { id, nombre, correo, telefono, tipo } = req.body;
  const todos = contactoCtrl.listarContactos();
  const nuevoId = id || todos.length + 1;
  res.status(201).json(contactoCtrl.crearContacto(nuevoId, nombre, correo, telefono, tipo));
});

// API Proyectos (HU03)
app.get('/api/etapas', (req, res) => res.json(proyectoCtrl.listarEtapas()));
app.get('/api/proyectos', (req, res) => res.json(proyectoCtrl.listarProyectos()));
app.post('/api/proyectos', (req, res) => {
  const { nombre, cliente } = req.body;
  res.status(201).json(proyectoCtrl.crearProyecto(nombre, cliente));
});
app.put('/api/proyectos/:id/etapa', (req, res) => {
  const actualizado = proyectoCtrl.cambiarEtapa(Number(req.params.id), req.body.etapa);
  if (actualizado) return res.json(actualizado);
  res.status(400).json({ error: 'Proyecto o etapa inválidos' });
});

// API Distribución financiera (HU05)
app.get('/api/distribucion', (req, res) => res.json(distribucionCtrl.listar()));
app.put('/api/distribucion', (req, res) => {
  const resultado = distribucionCtrl.actualizar(req.body);
  if (resultado.ok) return res.json(resultado.datos);
  res.status(400).json({ error: resultado.error });
});
app.get('/api/distribucion/simular', (req, res) =>
  res.json(distribucionCtrl.simular(Number(req.query.monto) || 0)));

// API Cotizaciones (HU04)
app.get('/api/cotizaciones', (req, res) => res.json(cotizacionCtrl.listar()));
app.get('/api/cotizaciones/:id', (req, res) => {
  const c = cotizacionCtrl.obtener(Number(req.params.id));
  if (c) return res.json(c);
  res.status(404).json({ error: 'Cotización no encontrada' });
});
app.post('/api/cotizaciones', (req, res) => {
  const creada = cotizacionCtrl.crear(req.body.cliente, req.body.items);
  if (creada) return res.status(201).json(creada);
  res.status(400).json({ error: 'Datos de cotización inválidos' });
});

const PUERTO = 3000;
app.listen(PUERTO, () => console.log(`Servidor en http://localhost:${PUERTO}`));