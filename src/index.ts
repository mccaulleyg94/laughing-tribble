import InsertionSort from './Sorts/InsertionSort';
import BubbleSort from './Sorts/BubbleSort';
import { SortingConstants } from './Enums/SortingConstants';
import Reporter from './Utils/Reporter';
import Sorter from './Interfaces/Sorter';
import Employee from './Models/Employee';
import ComparableValidator from './Utils/ComparableValidator';

class Main {
  static async main(args?: unknown): Promise<void> {
    console.log('Running...');
    const sorters
      : Sorter<Employee>[] = [new BubbleSort(), new InsertionSort()];
    const validator = new ComparableValidator();
    for (let sorter of sorters) {
      for (let i = 0; i < 10; i++) {
        let employees: Employee[] = [];
        for (let j = 0; j < 1000; j++) {
          employees.push(new Employee());
        }
        sorter.sort(employees, SortingConstants.DECREASING);
        validator.validateSorted(employees, SortingConstants.DECREASING);
      }
    }
    await Reporter.report({
      sorters
    });
    console.log('Program done');
    if (args) console.log(typeof args);
  }
}

Main.main('LOL');