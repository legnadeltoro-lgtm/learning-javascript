import Task from "./task.js";
import * as dateUtils from "./utils/index.js";

export function createTask(name, dueDate, category) {
  // To be implemented
}

export default class TaskManager {
  constructor() {
    // Property declarations to be filled
  }

  add(task) {
    // To be implemented
  }

  remove(taskId) {
    // To be implemented
  }

  updateName(taskId, newName) {
    // To be implemented
  }

  updateDueDate(taskId, newDueDate) {
    // To be implemented
  }

  toggleCompleted(taskId) {
    // To be implemented
  }

  getAll() {
    // To be implemented
  }

  getCompleted() {
    // To be implemented
  }

  getPending() {
    // To be implemented
  }

  getSummary() {
    // To be implemented
  }
}
