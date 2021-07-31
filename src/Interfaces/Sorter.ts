import Testable from './Testable';
import { SortingConstants } from './../Enums/SortingConstants';
import Comparable from "./Comparable";

export default interface Sorter<T extends Comparable<T>> extends Testable {
  sort(comparables: T[], sortingConstant: SortingConstants): void;
}