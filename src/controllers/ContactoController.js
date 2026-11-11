const ContactoDAO = require('../dao/ContactoDAO');
const Contacto = require('../models/Contacto');

/**
 * Controlador que actúa como fachada (Facade) para la
 * administración de contactos (HU02).
 */
class ContactoController {
  constructor() {
    this.contactoDAO = new ContactoDAO();
  }

  /**
   * Contrato: retorna la lista de contactos registrados.
   * @returns {Array<Contacto>} Lista de contactos
   */
  listarContactos() {
    return this.contactoDAO.obtenerTodos();
  }

  /**
   * Contrato: registra un nuevo contacto en el sistema.
   * @param {number} id
   * @param {string} nombre
   * @param {string} correo
   * @param {string} telefono
   * @param {string} tipo - 'Cliente' o 'Proveedor'
   * @returns {Contacto} Contacto registrado
   */
  crearContacto(id, nombre, correo, telefono, tipo) {
    const contacto = new Contacto(id, nombre, correo, telefono, tipo);
    return this.contactoDAO.guardar(contacto);
  }
}

module.exports = ContactoController;