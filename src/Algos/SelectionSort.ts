import { SortingConstants } from "../Enums/SortingConstants";
import Comparable from "../Interfaces/Comparable";
import Sorter from "../Interfaces/Sorter";
import Testable from "../Interfaces/Testable";
import TimeTable from "./AlgoUtils/TimeTable";

export default class SelectionSort<T extends Comparable<T>> implements Sorter<T>, Testable {
  sort(comparables: T[], sortingConstant: SortingConstants): void {
    let iterations = 0;
    const start = Date.now();

    let n = comparables.length;
    for (let i = 0; i < n; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        iterations++;
        if (comparables[j].compare(comparables[min]) == sortingConstant) {
          min = j;
        }
      }
      if (min != i) {
        let tmp = comparables[i];
        comparables[i] = comparables[min];
        comparables[min] = tmp;
      }
      iterations++;
    }

    this.measure(start, Date.now(), `${this.constructor.name} - ${comparables.length} elements(${comparables[0].constructor.name}), iterations: ${iterations}`);
  }
  time_table: TimeTable[];
  measure(start: number, end: number, context: string): void {
    this.time_table.push({ time: `${end - start} ms`, context: context })
  }
  constructor() {
    this.time_table = [];
  }

}