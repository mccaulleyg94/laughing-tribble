export default interface Equals<T> {
  equals(comparer: T): boolean;
}