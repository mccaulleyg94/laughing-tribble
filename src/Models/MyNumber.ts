import Comparable from '../Interfaces/Comparable';
export default class MyNumber implements Comparable<MyNumber> {
  num: number;
  constructor(num?: number) {
    num ? this.num = num : this.num = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }
  compare(num: MyNumber): number {
    if (this.num == num.num) return 0;
    else if (this.num < num.num) return -1;
    else return 1;
  }
}