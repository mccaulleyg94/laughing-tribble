import Role from '../Classes/Models/Role';
import Comparable from './Comparable';
export default interface Employed extends Comparable<Employed> {
  e_id: number;
  role: Role;
}