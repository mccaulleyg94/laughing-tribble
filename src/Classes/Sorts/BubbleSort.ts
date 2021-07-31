import { SortingConstants } from '../../Enums/SortingConstants';
import Sorter from '../../Interfaces/Sorter';
import Comparable from '../../Interfaces/Comparable';
import Testable from '../../Interfaces/Testable';
import TimeTable from '../Models/TimeTable';
export default class BubbleSort<T extends Comparable<T>> implements Testable, Sorter<T> {
  measure(start: number, end: number, context: string): void {
    this.time_table.push({ time: `${end - start} ms`, context: context })
  }
  constructor() {
    this.time_table = [];
  }

  time_table: TimeTable[];

  sort(comparables: T[], sortingConstant: SortingConstants): void {
    let iterations = 0;
    const start = Date.now();
    for (let i = 0; i < comparables.length; i++) {
      for (let j = 0; j < comparables.length; j++) {
        if (comparables[j + 1] && comparables[j].compare(comparables[j + 1]) == -sortingConstant) {
          const temp = comparables[j];
          comparables[j] = comparables[j + 1];
          comparables[j + 1] = temp;
        }
        iterations++;
      }
    }
    this.measure(start, Date.now(), `${this.constructor.name}-${comparables.length} elements (${comparables[0].constructor.name}), iterations: ${iterations}`);
  }
}