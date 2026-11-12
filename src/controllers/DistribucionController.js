const DistribucionDAO = require('../dao/DistribucionDAO');
const Distribucion = require('../models/Distribucion');

/**
 * Fachada (Facade) para la configuración de distribución financiera (HU05).
 * Regla de negocio: los porcentajes deben sumar exactamente 100.
 */
class DistribucionController {
  constructor() {
    this.distribucionDAO = new DistribucionDAO();
  }

  /**
   * Contrato: retorna la distribución configurada.
   * @returns {Array<Distribucion>}
   */
  listar() {
    return this.distribucionDAO.obtenerTodos();
  }

  /**
   * Contrato: actualiza los porcentajes. Valida que cada valor sea numérico
   * entre 0 y 100 y que la suma total sea 100.
   * @param {Array<{id:number, concepto:string, porcentaje:number}>} items
   * @returns {{ok:boolean, error?:string, datos?:Array<Distribucion>}}
   */
  actualizar(items) {
    if (!Array.isArray(items) || items.length === 0) {
      return { ok: false, error: 'No hay rubros para guardar' };
    }
    const lista = items.map((i) => new Distribucion(i.id, i.concepto, Number(i.porcentaje)));
    if (lista.some((d) => Number.isNaN(d.porcentaje) || d.porcentaje < 0 || d.porcentaje > 100)) {
      return { ok: false, error: 'Cada porcentaje debe estar entre 0 y 100' };
    }
    const total = lista.reduce((suma, d) => suma + d.porcentaje, 0);
    if (Math.abs(total - 100) > 0.001) {
      return { ok: false, error: 'Los porcentajes deben sumar 100 (suman ' + total + ')' };
    }
    return { ok: true, datos: this.distribucionDAO.reemplazar(lista) };
  }

  /**
   * Contrato: reparte un monto según la configuración actual.
   * @param {number} monto - Valor en COP
   * @returns {Array<{concepto:string, porcentaje:number, valor:number}>}
   */
  simular(monto) {
    return this.distribucionDAO.obtenerTodos().map((d) => ({
      concepto: d.concepto,
      porcentaje: d.porcentaje,
      valor: Math.round((monto * d.porcentaje) / 100)
    }));
  }
}

module.exports = DistribucionController;