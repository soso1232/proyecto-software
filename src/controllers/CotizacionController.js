const CotizacionDAO = require('../dao/CotizacionDAO');
const Cotizacion = require('../models/Cotizacion');

/**
 * Fachada (Facade) para la generación de cotizaciones (HU04).
 */
class CotizacionController {
  constructor() {
    this.cotizacionDAO = new CotizacionDAO();
  }

  /**
   * Contrato: calcula el total de una cotización.
   * @param {Cotizacion} c
   * @returns {number} Suma de cantidad x precio
   */
  calcularTotal(c) {
    return c.items.reduce((suma, i) => suma + i.cantidad * i.precio, 0);
  }

  /**
   * Contrato: lista las cotizaciones con su total calculado.
   * @returns {Array<Object>}
   */
  listar() {
    return this.cotizacionDAO.obtenerTodas().map((c) => ({ ...c, total: this.calcularTotal(c) }));
  }

  /**
   * Contrato: obtiene una cotización con su total.
   * @param {number} id
   * @returns {Object|null}
   */
  obtener(id) {
    const c = this.cotizacionDAO.buscarPorId(id);
    return c ? { ...c, total: this.calcularTotal(c) } : null;
  }

  /**
   * Contrato: crea una cotización validando que tenga ítems válidos.
   * @param {string} cliente
   * @param {Array} items
   * @returns {Object|null} Cotización creada o null si los datos son inválidos
   */
  crear(cliente, items) {
    if (!cliente || !Array.isArray(items) || items.length === 0) return null;
    const limpios = items
      .map((i) => ({ descripcion: i.descripcion, cantidad: Number(i.cantidad), precio: Number(i.precio) }))
      .filter((i) => i.descripcion && i.cantidad > 0 && i.precio >= 0);
    if (limpios.length === 0) return null;
    const id = this.cotizacionDAO.obtenerTodas().length + 1;
    const fecha = new Date().toISOString().slice(0, 10);
    const nueva = this.cotizacionDAO.guardar(new Cotizacion(id, cliente, fecha, limpios));
    return { ...nueva, total: this.calcularTotal(nueva) };
  }
}

module.exports = CotizacionController;