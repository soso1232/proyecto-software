const ProyectoDAO = require('../dao/ProyectoDAO');
const Proyecto = require('../models/Proyecto');

const ETAPAS = ['Planeación', 'Ejecución', 'Revisión', 'Entregado'];

/**
 * Fachada (Facade) para el control de proyectos por etapas (HU03).
 */
class ProyectoController {
  constructor() {
    this.proyectoDAO = new ProyectoDAO();
  }

  /**
   * Contrato: retorna las etapas válidas.
   * @returns {Array<string>}
   */
  listarEtapas() {
    return ETAPAS;
  }

  /**
   * Contrato: retorna todos los proyectos.
   * @returns {Array<Proyecto>}
   */
  listarProyectos() {
    return this.proyectoDAO.obtenerTodos();
  }

  /**
   * Contrato: crea un proyecto en la etapa inicial.
   * @param {string} nombre
   * @param {string} cliente
   * @returns {Proyecto}
   */
  crearProyecto(nombre, cliente) {
    const id = this.proyectoDAO.obtenerTodos().length + 1;
    return this.proyectoDAO.guardar(new Proyecto(id, nombre, cliente, ETAPAS[0]));
  }

  /**
   * Contrato: cambia la etapa de un proyecto.
   * @param {number} id
   * @param {string} etapa - Debe ser una etapa válida
   * @returns {Proyecto|null} Proyecto actualizado, o null si no existe o la etapa es inválida
   */
  cambiarEtapa(id, etapa) {
    const proyecto = this.proyectoDAO.buscarPorId(id);
    if (!proyecto || !ETAPAS.includes(etapa)) return null;
    proyecto.etapa = etapa;
    return proyecto;
  }
}

module.exports = ProyectoController;