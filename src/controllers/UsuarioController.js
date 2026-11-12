const UsuarioDAO = require('../dao/UsuarioDAO');
const Usuario = require('../models/Usuario');

/**
 * Fachada (Facade) para la gestión de usuarios y accesos (HU01).
 */
class UsuarioController {
  constructor() {
    this.usuarioDAO = new UsuarioDAO();
  }

  /**
   * Contrato: valida credenciales de acceso.
   * @param {string} correo
   * @param {string} clave
   * @returns {Object|null} Usuario sin clave si es válido, o null
   */
  iniciarSesion(correo, clave) {
    const usuario = this.usuarioDAO.buscarPorCorreo(correo);
    if (usuario && usuario.clave === clave) {
      return { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo, rol: usuario.rol };
    }
    return null;
  }

  /**
   * Contrato: lista los usuarios sin exponer la clave.
   * @returns {Array<Object>}
   */
  listarUsuarios() {
    return this.usuarioDAO.obtenerTodos().map((u) => ({
      id: u.id, nombre: u.nombre, correo: u.correo, rol: u.rol
    }));
  }

  /**
   * Contrato: registra un nuevo usuario.
   * @returns {Object|null} Usuario creado, o null si el correo ya existe
   */
  crearUsuario(nombre, correo, clave, rol) {
    if (this.usuarioDAO.buscarPorCorreo(correo)) return null;
    const id = this.usuarioDAO.obtenerTodos().length + 1;
    const nuevo = this.usuarioDAO.guardar(new Usuario(id, nombre, correo, clave, rol));
    return { id: nuevo.id, nombre: nuevo.nombre, correo: nuevo.correo, rol: nuevo.rol };
  }
}

module.exports = UsuarioController;