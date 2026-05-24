export const CATEGORIES = ["work", "personal", "study"];

export default class Task {
  /**
   * @param {string} name - Descripción de la tarea
   * @param {string} startDate - Fecha de inicio (ISO "YYYY-MM-DD")
   * @param {string} endDate - Fecha de fin (ISO "YYYY-MM-DD")
   * @param {string} category - Categoría (opcional, por defecto 'personal')
   */
  constructor(name, startDate, endDate, category = "personal") {
    this.id = Date.now();
    this.name = name;
    this.startDate = startDate; // "2026-06-01"
    this.endDate = endDate; // "2026-06-05"
    this.category = category;
    this.completed = false;
  }
}
