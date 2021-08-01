import Hashable from "../Interfaces/Hashable";

export default class HashTable<V extends Hashable> {
  values: Record<string | symbol | number, V> = {};
  length = 0;
  size = 1_069;

  put(value: V) {
    this.values[(value.hash() % this.size)] = value;
  }

  get(str: string) {
    return this.values[str];
  }

  print(): void {
    console.log(this.values);
  }
}