const Proyecto = require('../models/Proyecto');

/**
 * DAO para la persistencia de Proyectos (HU03).
 * Simula una base de datos en memoria.
 */
class ProyectoDAO {
  constructor() {
    this.proyectosBD = [
      new Proyecto(1, 'Sitio web corporativo', 'Ana Gómez', 'Planeación'),
      new Proyecto(2, 'App de inventario', 'Distribuidora Andina', 'Ejecución')
    ];
  }

  /**
   * Contrato: retorna todos los proyectos.
   * @returns {Array<Proyecto>}
   */
  obtenerTodos() {
    return this.proyectosBD;
  }

  /**
   * Contrato: busca un proyecto por id.
   * @param {number} id
   * @returns {Proyecto|undefined}
   */
  buscarPorId(id) {
    return this.proyectosBD.find((p) => p.id === id);
  }

  /**
   * Contrato: guarda un nuevo proyecto.
   * @param {Proyecto} proyecto
   * @returns {Proyecto}
   */
  guardar(proyecto) {
    this.proyectosBD.push(proyecto);
    return proyecto;
  }
}

module.exports = ProyectoDAO;