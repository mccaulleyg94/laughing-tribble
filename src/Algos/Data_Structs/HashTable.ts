import Hashable from "../../Interfaces/Hashable";

export default class HashTable<V extends Hashable> {
  values: Record<string | symbol | number, V | null> = {};
  length = 0;
  size = 1_069;

  put(value: V) {
    this.values[(value.hash() % this.size)] = value;
  }

  get(str: string) {
    return this.values[str];
  }

  delete(str: string): boolean {
    this.values[str] = null;
    return this.values[str] == null ? true : false;
  }

  print(): void {
    console.log(this.values);
  }
}