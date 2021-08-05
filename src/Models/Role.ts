import { EmployeeConstants } from '../Enums/EmployeeConstants';
import { randomEnum } from '../Utils/Random';
import Employee from './Employee';
export default class Role {
  role_id: EmployeeConstants;
  role_name: string;
  constructor() {
    this.role_id = randomEnum(EmployeeConstants);
    this.role_name = EmployeeConstants[this.role_id];
  }
}