/**
 * Modelo de datos que representa un rubro de la distribución financiera (HU05).
 * Aplica SRP: solo describe la estructura del rubro.
 */
class Distribucion {
  /**
   * @param {number} id - Identificador único
   * @param {string} concepto - Nombre del rubro (ej: Operación, Ahorro)
   * @param {number} porcentaje - Porcentaje asignado (0 a 100)
   */
  constructor(id, concepto, porcentaje) {
    this.id = id;
    this.concepto = concepto;
    this.porcentaje = porcentaje;
  }
}

module.exports = Distribucion;