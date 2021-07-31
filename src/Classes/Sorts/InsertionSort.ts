import { SortingConstants } from './../../Enums/SortingConstants';
import Comparable from '../../Interfaces/Comparable';
import Sorter from '../../Interfaces/Sorter';
import Testable from '../../Interfaces/Testable';
import TimeTable from '../Models/TimeTable';

export default class InsertionSort<T extends Comparable<T>> implements Sorter<T>, Testable {
  sort(comparables: T[], sortingConstant: SortingConstants): void {
    let iterations = 0;
    const start = Date.now();
    let key, j;
    for (let i = 1; i < comparables.length; i++) {
      key = comparables[i];
      j = i - 1;
      while (j >= 0 && comparables[j].compare(key) == -sortingConstant) {
        comparables[j + 1] = comparables[j];
        j = j - 1;
        iterations++;
      }
      comparables[j + 1] = key;
      iterations++;
    }
    this.measure(start, Date.now(), `${this.constructor.name}-${comparables.length} elements (${comparables[0].constructor.name}), iterations: ${iterations}`);
  }

  measure(start: number, end: number, context: string): void {
    this.time_table.push({ time: `${end - start} ms`, context: context })
  }
  constructor() {
    this.time_table = []
  }
  time_table: TimeTable[];
}