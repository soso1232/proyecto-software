/**
 * Modelo de datos que representa la entidad Contacto (HU02).
 * Aplica el principio de responsabilidad única (SOLID - SRP):
 * solo describe la estructura de un contacto, sin lógica de negocio.
 */
class Contacto {
  /**
   * @param {number} id - Identificador único del contacto
   * @param {string} nombre - Nombre completo o razón social
   * @param {string} correo - Correo electrónico de contacto
   * @param {string} telefono - Número de teléfono
   * @param {string} tipo - Tipo de contacto: 'Cliente' o 'Proveedor'
   */
  constructor(id, nombre, correo, telefono, tipo) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.telefono = telefono;
    this.tipo = tipo;
  }
}

module.exports = Contacto;