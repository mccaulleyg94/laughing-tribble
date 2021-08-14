import { EmployeeConstants } from '../Enums/EmployeeConstants';
import { random_enum } from '../Utils/Random';
export default class Role {
  role_id: EmployeeConstants;
  role_name: string;
  constructor() {
    this.role_id = random_enum(EmployeeConstants);
    this.role_name = EmployeeConstants[this.role_id];
  }
}