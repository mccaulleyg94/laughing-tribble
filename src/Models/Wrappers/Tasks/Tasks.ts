import Num_Counts from "./Num_Counts";

export default class Task {
  tasks: Num_Counts[];
  killCount: number;
  id: number;

  constructor(id: number, killCount: number, task: Num_Counts[]) {
    this.id = id;
    this.killCount = killCount;
    this.tasks = task;
  }
}