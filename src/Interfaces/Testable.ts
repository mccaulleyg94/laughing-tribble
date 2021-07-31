import TimeTable from "../Models/TimeTable";

export default interface Testable {
  time_table: TimeTable[];
  measure(start: number, end: number, context: string): void;
}