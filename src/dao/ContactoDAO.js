const Contacto = require('../models/Contacto');

/**
 * Clase DAO para gestionar la persistencia y consulta de Contactos (HU02).
 * Simula la integración con una base de datos usando memoria.
 */
class ContactoDAO {
  constructor() {
    // Persistencia simulada en memoria para el prototipo
    this.contactosBD = [
      new Contacto(1, 'Ana Gómez', 'ana@correo.com', '3001234567', 'Cliente'),
      new Contacto(2, 'Distribuidora Andina', 'ventas@andina.com', '3109876543', 'Proveedor')
    ];
  }

  /**
   * Contrato de método: retorna la lista completa de contactos.
   * @returns {Array<Contacto>} Lista de entidades
   */
  obtenerTodos() {
    return this.contactosBD;
  }

  /**
   * Contrato de método: busca un contacto por su identificador.
   * @param {number} id - Identificador del contacto
   * @returns {Contacto|undefined} El contacto encontrado o undefined
   */
  buscarPorId(id) {
    return this.contactosBD.find((contacto) => contacto.id === id);
  }

  /**
   * Contrato de método: inserta un nuevo contacto en la base de datos.
   * @param {Contacto} nuevoContacto - Contacto a guardar
   * @returns {Contacto} Objeto guardado
   */
  guardar(nuevoContacto) {
    this.contactosBD.push(nuevoContacto);
    return nuevoContacto;
  }
}

module.exports = ContactoDAO;