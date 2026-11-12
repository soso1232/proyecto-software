const Distribucion = require('../models/Distribucion');

/**
 * DAO para la persistencia de la distribución financiera (HU05).
 * Simula una base de datos en memoria.
 */
class DistribucionDAO {
  constructor() {
    this.distribucionBD = [
      new Distribucion(1, 'Operación', 50),
      new Distribucion(2, 'Nómina', 25),
      new Distribucion(3, 'Impuestos', 15),
      new Distribucion(4, 'Ahorro', 10)
    ];
  }

  /**
   * Contrato: retorna todos los rubros.
   * @returns {Array<Distribucion>}
   */
  obtenerTodos() {
    return this.distribucionBD;
  }

  /**
   * Contrato: reemplaza la configuración completa.
   * @param {Array<Distribucion>} nuevaLista
   * @returns {Array<Distribucion>}
   */
  reemplazar(nuevaLista) {
    this.distribucionBD = nuevaLista;
    return this.distribucionBD;
  }
}

module.exports = DistribucionDAO;