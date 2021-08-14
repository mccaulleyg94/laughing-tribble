import Comparable from "../../Interfaces/Comparable";

export default class Drop implements Comparable<Drop>{
  num: number;
  count: number = 0;

  constructor(num: number) {
    this.num = num
  }
  compare(comparable: Drop): number {
    return this.num < comparable.num ? -1 : 1
  }
}