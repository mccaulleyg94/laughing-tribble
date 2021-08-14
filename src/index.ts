import InsertionSort from './Algos/InsertionSort';
import BubbleSort from './Algos/BubbleSort';
import { Sort } from './Enums/Sort';
import Reporter from './Utils/Reporter';
import Sorter from './Interfaces/Sorter';
import Employee from './Models/Employee';
import ComparableValidator from './Utils/ComparableValidator';
import SelectionSort from './Algos/SelectionSort';
import HashTable from './Data_Structs/HashTable';
import { random_number, random_enum } from './Utils/Random';
import { randomBytes } from 'crypto';
import Comparable from './Interfaces/Comparable';
import Drop from './Models/Slayer/Drop';
import Task from './Models/Slayer/Task';
import inspect from 'util';

class Main {

  static DEBUG = true;

  static async main(args?: unknown): Promise<void> {
    console.log('Running...');

    if (typeof args === 'function') {
      args.call(this)
    }

    console.log('Done');
  }

  static run = async (): Promise<void> => {
    await Main.drop_log();
  }

  static drop_log = async (): Promise<void> => {
    const slayer_tasks: Task[] = [];
    const trips = 100000;
    const drop_chance = 500;
    for (let i = 0; i < trips; i++) {
      const kills = random_number(150, 250);
      const drops: Drop[] = [];
      for (let j = 0; j < kills; j++) {
        const random = random_number(0, drop_chance + 1);
        if (drops[random]) {
          drops[random].count++;
        } else {
          drops[random] = new Drop(random);
          drops[random].count++;
        }
      }
      slayer_tasks.push(new Task(i, kills, drops
        .filter((drop) => drop && drop.num == drop_chance)));
    }
    const results = slayer_tasks.filter(task => task.tasks[0]?.count >= 3).sort((task0, task1) => task0.compare(task1));
    Main.DEBUG && Reporter.report(results);
  }

  static itr_test = async (): Promise<void> => {
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

  static sorting_test = async (): Promise<unknown> => {
    const sorters: Sorter<Employee>[] = [new BubbleSort(), new InsertionSort(), new SelectionSort()];
    const validator: ComparableValidator<Employee> = new ComparableValidator();
    for (let sorter of sorters) {
      for (let i = 0; i < 3; i++) {
        const employees: Employee[] = [];
        for (let j = 0; j < 3; j++) {
          employees.push(new Employee());
        }
        sorter.sort(employees, Sort.DECREASING);
        validator.validateSorted(employees, Sort.DECREASING);
      }
    }
    return sorters;
  }

  static hash_table_test = async (): Promise<unknown> => {
    const hashTable = new HashTable<Employee>();
    for (let i: number = 0; i < 25; i++) {
      hashTable.put(new Employee());
    }
    return hashTable;
  }
}

Main.main(Main.run);