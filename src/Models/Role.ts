import { EmployeeConstants } from '../Enums/EmployeeConstants';
import Employee from './Employee';
export default class Role {
  role_id?: EmployeeConstants;
  reports_to?: Employee;
}