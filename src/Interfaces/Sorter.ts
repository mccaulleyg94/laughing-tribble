import Testable from './Testable';
import { Sort } from '../Enums/Sort';
import Comparable from "./Comparable";

export default interface Sorter<T extends Comparable<T>> extends Testable {
  sort(comparables: T[], sortingConstant: Sort): void;
}