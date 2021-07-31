import { strict as assert } from "assert";
import { SortingConstants } from "../Enums/SortingConstants";
import Comparable from "../Interfaces/Comparable";

export default class ComparableValidator<T extends Comparable<T>> {
  validateSorted(comparables: T[], sortingConstant: SortingConstants): void {
    let counter = 0;
    while (comparables[counter + 1]) {
      assert.strictEqual(comparables[counter].compare(comparables[counter + 1]), sortingConstant,
        `Expected ${JSON.stringify(comparables[counter])} to be ${SortingConstants[sortingConstant]}
        -> ${JSON.stringify(comparables[counter + 1])}`)
      counter++;
    }
  }
}