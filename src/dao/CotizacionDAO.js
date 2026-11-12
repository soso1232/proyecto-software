const Cotizacion = require('../models/Cotizacion');

/**
 * DAO para la persistencia de Cotizaciones (HU04).
 * Simula una base de datos en memoria.
 */
class CotizacionDAO {
  constructor() {
    this.cotizacionesBD = [
      new Cotizacion(1, 'Ana Gómez', '2026-11-12', [
        { descripcion: 'Diseño de sitio web', cantidad: 1, precio: 1500000 },
        { descripcion: 'Hosting anual', cantidad: 1, precio: 300000 }
      ])
    ];
  }

  /**
   * Contrato: retorna todas las cotizaciones.
   * @returns {Array<Cotizacion>}
   */
  obtenerTodas() {
    return this.cotizacionesBD;
  }

  /**
   * Contrato: busca una cotización por id.
   * @param {number} id
   * @returns {Cotizacion|undefined}
   */
  buscarPorId(id) {
    return this.cotizacionesBD.find((c) => c.id === id);
  }

  /**
   * Contrato: guarda una nueva cotización.
   * @param {Cotizacion} cotizacion
   * @returns {Cotizacion}
   */
  guardar(cotizacion) {
    this.cotizacionesBD.push(cotizacion);
    return cotizacion;
  }
}

module.exports = CotizacionDAO;