import Comparable from "../../../Interfaces/Comparable";

export default class Num_Counts implements Comparable<Num_Counts>{
  num: number;
  count: number = 0;

  constructor(num: number) {
    this.num = num
  }
  compare(comparable: Num_Counts): number {
    return this.num < comparable.num ? -1 : 1
  }
}