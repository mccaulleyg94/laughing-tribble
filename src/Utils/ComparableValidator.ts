import { strict as assert } from "assert";
import { Sort } from "../Enums/Sort";
import Comparable from "../Interfaces/Comparable";

export default class ComparableValidator<T extends Comparable<T>> {
  validateSorted(comparables: T[], sortingConstant: Sort): void {
    let counter = 0;
    while (comparables[counter + 1]) {
      assert.strictEqual(comparables[counter].compare(comparables[counter + 1]), sortingConstant,
        `Expected ${JSON.stringify(comparables[counter])} to be ${Sort[sortingConstant]}
        -> ${JSON.stringify(comparables[counter + 1])}`)
      counter++;
    }
  }
}