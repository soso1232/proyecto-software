/**
 * Modelo de datos que representa una Cotización (HU04).
 * Aplica SRP: solo describe la estructura de la cotización.
 */
class Cotizacion {
  /**
   * @param {number} id - Identificador único
   * @param {string} cliente - Nombre del cliente
   * @param {string} fecha - Fecha de emisión (YYYY-MM-DD)
   * @param {Array<{descripcion:string, cantidad:number, precio:number}>} items - Ítems cotizados
   */
  constructor(id, cliente, fecha, items) {
    this.id = id;
    this.cliente = cliente;
    this.fecha = fecha;
    this.items = items;
  }
}

module.exports = Cotizacion;