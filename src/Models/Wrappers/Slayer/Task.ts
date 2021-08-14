import Comparable from "../../../Interfaces/Comparable";
import Drop from "./Drop";

export default class Task implements Comparable<Task> {
  tasks: Drop[];
  killCount: number;
  id: number;

  constructor(id: number, killCount: number, task: Drop[]) {
    this.id = id;
    this.killCount = killCount;
    this.tasks = task;
  }
  compare(comparable: Task): number {
    if (this.tasks[0]?.count < comparable.tasks[0]?.count) {
      return 1;
    } else if (this.tasks[0]?.count == comparable.tasks[0]?.count) {
      if (this.id < comparable.id) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return -1;
    }
  }
}