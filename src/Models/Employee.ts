import Comparable from "../Interfaces/Comparable";
import Employed from "../Interfaces/Employed";
import Hashable from "../Interfaces/Hashable";
import Role from "./Role";

export default class Employee implements Employed, Comparable<Employee>, Hashable {
  compare(comparable: Employee): number {
    return this.e_id < comparable.e_id ? -1 : 1;
  }
  static counter = 0;
  role: Role;
  e_id: number;
  constructor() {
    this.role = { role_id: 0, reports_to: undefined };
    this.e_id = Employee.counter++;
  }
  hash(): number {
    return this.e_id;
  }
}