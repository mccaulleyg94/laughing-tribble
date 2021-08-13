import InsertionSort from './Algos/InsertionSort';
import BubbleSort from './Algos/BubbleSort';
import { SortingConstants } from './Enums/SortingConstants';
import Reporter from './Utils/Reporter';
import Sorter from './Interfaces/Sorter';
import Employee from './Models/Employee';
import ComparableValidator from './Utils/ComparableValidator';
import SelectionSort from './Algos/SelectionSort';
import HashTable from './Data_Structs/HashTable';
import { randomNumber, randomEnum } from './Utils/Random';

class Main {

  static DEBUG = true;

  static async main(args?: unknown): Promise<void> {
    console.log('Running...');

    if (typeof args === 'function') {
      await args.call(this);
    }

    console.log('Done');
  }

  static run = async (): Promise<void> => {

  }

  static itrTest = async (): Promise<void> => {
    const COUNTS: number[] = [];
    const LOOP_COUNT: number = 10;
    for (let i: number = 0; i < LOOP_COUNT; i++) {
      let start: number = Date.now();
      let itr: number = 0;
      while (Date.now() - start < 1000) {
        itr++;
      }
      COUNTS.push(itr);
    }
    const avg: number = COUNTS.reduce((a, b) => { return a + b }) / COUNTS.length
    Main.DEBUG
      && console.log('AVERAGE: ', avg, COUNTS)
      || Reporter.report({ counts: COUNTS, average: avg, context: `Number iteration speed - ${LOOP_COUNT} loops` });
  }

  static sortingTest = async (): Promise<unknown> => {
    const sorters: Sorter<Employee>[] = [new BubbleSort(), new InsertionSort(), new SelectionSort()];
    const validator: ComparableValidator<Employee> = new ComparableValidator();
    for (let sorter of sorters) {
      for (let i = 0; i < 3; i++) {
        const employees: Employee[] = [];
        for (let j = 0; j < 3; j++) {
          employees.push(new Employee());
        }
        sorter.sort(employees, SortingConstants.DECREASING);
        validator.validateSorted(employees, SortingConstants.DECREASING);
      }
    }
    return sorters;
  }

  static hashTableTest = async (): Promise<unknown> => {
    const hashTable = new HashTable<Employee>();
    for (let i: number = 0; i < 25; i++) {
      hashTable.put(new Employee());
    }
    return hashTable;
  }
}

Main.main(Main.run);