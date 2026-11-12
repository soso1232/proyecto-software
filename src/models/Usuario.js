/**
 * Modelo de datos que representa la entidad Usuario (HU01).
 * Aplica SRP: solo describe la estructura de un usuario.
 */
class Usuario {
  /**
   * @param {number} id - Identificador único
   * @param {string} nombre - Nombre completo
   * @param {string} correo - Correo (se usa como login)
   * @param {string} clave - Contraseña (simulada, sin cifrar en el prototipo)
   * @param {string} rol - 'Administrador' o 'Usuario'
   */
  constructor(id, nombre, correo, clave, rol) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.clave = clave;
    this.rol = rol;
  }
}

module.exports = Usuario;