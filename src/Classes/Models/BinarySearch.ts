import Comparable from "../../Interfaces/Comparable";
import Searcher from "../../Interfaces/Searcher";
import TimeTable from "./TimeTable";

export default class BinarySearch<T extends Comparable<T>> implements Searcher<T> {

  search(arr: T[], left: number, right: number, target: T): number {
    const middle = left + Math.floor((right - left) / 2);
    if (left < right) {
      if (arr[middle].compare(target) == 0) {
        return middle;
      } else if (arr[middle].compare(target) == 1) {
        console.log('moving left', 'middle element: ' + JSON.stringify(arr[middle]),
          'middle index: ' + middle, 'target: ' + JSON.stringify(target));
        return this.search(arr, left, middle - 1, target);
      } else {
        console.log('moving right', 'middle element: ' + JSON.stringify(arr[middle]),
          'middle index: ' + middle, 'target: ' + JSON.stringify(target));
        return this.search(arr, middle, right, target)
      }
    } else {
      return -1;
    }
  }

  time_table: TimeTable[] = [];
  measure(start: number, end: number, context: string): void {
    this.time_table.push({ time: `${end - start} ms`, context: context });
  }
}