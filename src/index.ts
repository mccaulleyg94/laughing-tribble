import InsertionSort from './Algos/InsertionSort';
import BubbleSort from './Algos/BubbleSort';
import { Sort } from './Enums/Sort';
import Reporter from './Utils/Reporter';
import Sorter from './Interfaces/Sorter';
import Employee from './Models/Employee';
import ComparableValidator from './Utils/ComparableValidator';
import SelectionSort from './Algos/SelectionSort';
import HashTable from './Algos/Data_Structs/HashTable';
import { random_number } from './Utils/Random';
import Drop from './Models/Slayer/Drop';
import Task from './Models/Slayer/Task';
import { db, truncate, select_all } from './Data/Connection';
import { tables } from './resources/ConnectionString'
import Person from './Models/Person';

class Main {

  DEBUG = true;

  async main(args?: unknown): Promise<void> {
    console.log('Running...');

    if (typeof args === 'function') {
      args.call(this);
    }

    console.log('Done');
  }

  run = async (): Promise<void> => {
    await this.connection_test();
  }

  connection_test = async (): Promise<void> => {
    await truncate(tables.person);
    for (let i = 0; i < 100; i++) {
      const p: Person = new Person();
      await db.query(`INSERT INTO ${tables.person} VALUES (default, $1, $2, $3)`, [p.name, p.age, p.gender]);
    }
    const people: Person[] = await select_all(tables.person);
    console.log(people);
  }

  drop_log = async (): Promise<void> => {
    const slayer_tasks: Task[] = [];
    const trips = 5;
    const drop_chance = 512;
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
      i % 10000 == 0 && console.log(i);
    }
    const results = slayer_tasks.filter(task => task.tasks[0]?.count >= 1).sort((task0, task1) => task0.compare(task1));
    this.DEBUG && Reporter.report(results);
  }

  itr_test = async (): Promise<void> => {
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
    this.DEBUG
      && console.log('AVERAGE: ', avg, COUNTS)
      || Reporter.report({ counts: COUNTS, average: avg, context: `Number iteration speed - ${LOOP_COUNT} loops` });
  }

  sorting_test = async (): Promise<unknown> => {
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

  hash_table_test = async (): Promise<unknown> => {
    const hashTable = new HashTable<Employee>();
    for (let i: number = 0; i < 25; i++) {
      hashTable.put(new Employee());
    }
    return hashTable;
  }
}

const main: Main = new Main();

main.main(main.run);
