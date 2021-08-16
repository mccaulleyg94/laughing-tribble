import Comparable from "../Interfaces/Comparable";
import Employed from "../Interfaces/Employed";
import Equals from "../Interfaces/Equals";
import Hashable from "../Interfaces/Hashable";
import Person from "./Person";
import Role from "./Role";

export default class Employee extends Person implements Employed, Comparable<Employee>, Hashable, Equals<Employee>, Person {
  compare(comparable: Employee): number {
    return this.e_id < comparable.e_id ? -1 : 1;
  }
  static counter = 0;
  role: Role;
  e_id: number;
  constructor() {
    super()
    this.role = new Role();
    this.e_id = Employee.counter++;
  }
  equals(comparer: Employee): boolean {
    return this.e_id === comparer.e_id && this.role === comparer.role;
  }
  hash(): number {
    return this.e_id;
  }
}