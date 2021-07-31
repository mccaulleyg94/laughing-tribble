export default interface Comparable<T> {
  compare(comparable: Comparable<T>): number;
}