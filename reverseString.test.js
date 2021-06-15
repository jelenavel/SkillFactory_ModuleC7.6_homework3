
import { reverseString } from "./reverseString.js";

describe('tests for reverseString function', () => {
  it('The phrase “It is me” should become “em si tI”', () => { expect(reverseString("It is me")).toBe("em si tI")});
});