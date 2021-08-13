export default interface Comparable<T> {
  compare(comparable: T): number;
}