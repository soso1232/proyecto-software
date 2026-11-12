const Usuario = require('../models/Usuario');

/**
 * DAO para la persistencia de Usuarios (HU01).
 * Simula una base de datos en memoria.
 */
class UsuarioDAO {
  constructor() {
    this.usuariosBD = [
      new Usuario(1, 'Administrador', 'admin@correo.com', 'admin123', 'Administrador'),
      new Usuario(2, 'Santiago', 'santiago@correo.com', '1234', 'Usuario')
    ];
  }

  /**
   * Contrato: retorna todos los usuarios.
   * @returns {Array<Usuario>}
   */
  obtenerTodos() {
    return this.usuariosBD;
  }

  /**
   * Contrato: busca un usuario por correo.
   * @param {string} correo
   * @returns {Usuario|undefined}
   */
  buscarPorCorreo(correo) {
    return this.usuariosBD.find((u) => u.correo === correo);
  }

  /**
   * Contrato: guarda un nuevo usuario.
   * @param {Usuario} usuario
   * @returns {Usuario}
   */
  guardar(usuario) {
    this.usuariosBD.push(usuario);
    return usuario;
  }
}

module.exports = UsuarioDAO;