import Comparable from '../Interfaces/Comparable';
/**
 * @class Num
 * @summary Wrapper class for number that implements comparable function.
 */
export default class Num implements Comparable<Num> {
  num: number;
  constructor(num?: number) {
    num ? this.num = num : this.num = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }
  compare(num: Num): number {
    if (this.num == num.num) return 0;
    else if (this.num < num.num) return -1;
    else return 1;
  }
}