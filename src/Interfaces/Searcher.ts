import Comparable from "./Comparable";
import Testable from "./Testable";

export default interface Searcher<T extends Comparable<T>> extends Testable {
  search(arr: T[], begin: number, end: number, target: T): number;
}