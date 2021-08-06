import InsertionSort from './Sorts/InsertionSort';
import BubbleSort from './Sorts/BubbleSort';
import { SortingConstants } from './Enums/SortingConstants';
import Reporter from './Utils/Reporter';
import Sorter from './Interfaces/Sorter';
import Employee from './Models/Employee';
import ComparableValidator from './Utils/ComparableValidator';
import SelectionSort from './Sorts/SelectionSort';
import HashTable from './Data_Structs/HashTable';

class Main {
  static async main(args?: unknown): Promise<void> {
    console.log('Running...');

    if (typeof args === 'function') {
      await args.call(this);
    }

    console.log('Done');
  }

  static run = async (): Promise<void> => {
    Reporter.report({ table: await Main.hashTableTest(), sorts: await Main.sortingTest() });
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