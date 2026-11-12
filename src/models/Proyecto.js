/**
 * Modelo de datos que representa la entidad Proyecto (HU03).
 * Aplica SRP: solo describe la estructura de un proyecto.
 */
class Proyecto {
  /**
   * @param {number} id - Identificador único
   * @param {string} nombre - Nombre del proyecto
   * @param {string} cliente - Cliente asociado
   * @param {string} etapa - 'Planeación', 'Ejecución', 'Revisión' o 'Entregado'
   */
  constructor(id, nombre, cliente, etapa) {
    this.id = id;
    this.nombre = nombre;
    this.cliente = cliente;
    this.etapa = etapa;
  }
}

module.exports = Proyecto;