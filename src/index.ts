import InsertionSort from './Sorts/InsertionSort';
import BubbleSort from './Sorts/BubbleSort';
import { SortingConstants } from './Enums/SortingConstants';
import Reporter from './Utils/Reporter';
import Sorter from './Interfaces/Sorter';
import Employee from './Models/Employee';
import ComparableValidator from './Utils/ComparableValidator';
import SelectionSort from './Sorts/SelectionSort';
import HashTable from './Data_Structs/HashTable';
import MyNumber from './Models/MyNumber';
import { throws } from 'assert';

class Main {
  static async main(args?: unknown): Promise<void> {
    console.log('Running...');
    this.sortingTest();
    this.hashTableTest();
    console.log('Done');
  }

  static async sortingTest(): Promise<void> {
    const sorters: Sorter<Employee>[] = [new BubbleSort(), new InsertionSort(), new SelectionSort()];
    const validator: ComparableValidator<Employee> = new ComparableValidator();
    for (let sorter of sorters) {
      for (let i = 0; i < 10; i++) {
        const employees: Employee[] = [];
        for (let j = 0; j < 10; j++) {
          employees.push(new Employee());
        }
        sorter.sort(employees, SortingConstants.DECREASING);
        validator.validateSorted(employees, SortingConstants.DECREASING);
      }
    }
    let data: unknown = JSON.parse(await Reporter.report(sorters));
  }

  static async hashTableTest(): Promise<void> {
    const hashTable = new HashTable<Employee>();
    for (let i: number = 0; i < 100; i++) {
      hashTable.put(new Employee());
    }
    console.log(hashTable.get('305')?.equals(hashTable.get('304')!));
    console.log(await Reporter.report(hashTable));
  }
}

Main.main();