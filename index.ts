/* ---------------- Question details --------------- */

// 10. Given "code" is a string of characters. code contains but not limited characters '{', '(', '[', ']', ')' and '}'.
// Writing a function validateShortCode that accepts code as an argument and returns true if the code is a valid Shortcode. Return false if not valid

// The code is a valid Shortcode if it:
// Must start with a bracket and close with a bracket
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example of valid code
// '[({})]'
// '{table {(text) color}}'

function validateShortCode(code: string) {
  // 1 check string... validation
  if (typeof code !== "string") throw new Error("Expected a code string");

  // 2 Remove alphanumeric text char to reduce length and convert to string array
  const codeArr = code.replace(/[a-bA-Z0-9\s]/gi, "").split("");
  // console.log({ codeArr });

  // 3 create an object of opening and closing tag as key/value pairs
  const codes = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  // 4 create a que
  const queue: string[] = [];

  // 5 declare helper states that defines our control flow
  // when state is "open", opening chars are valid ... closing are not
  let state: "open" | "close" | undefined = undefined;
  let isvalid = false;

  // 6 Loop over codeArr
  for (let i = 0; i < codeArr.length; i++) {
    const char = codeArr[i];

    if (!char) continue; //extra check for white spaces

    if (codes[char]) {
      // if checks that => char is an openeing character;

      if (state === "close") return false;

      queue.push(char);
      state = "open";
    } else {
      // else garantees that => char is a closing character

      if (!state) return false; // yet to add atleast one openning tag

      if (codes[queue[queue.length - 1]] !== char) return false;
      queue.pop();
      isvalid = true;

      state = "close"; // stop accepting openening chars
    }
  }

  return isvalid;
}

/* --------------------- TESTS --------------------- */
const test1 = validateShortCode("{table {(text) color}}");
console.log({ test1 }); // {test1: true}

/**
 *
 *
 */
const test2 = validateShortCode("[({}})])");
console.log({ test2 }); // {test2: false}
/**
 *
 *
 */

const test3 = validateShortCode("[[[{[{{{[({[(((({()}))))]})]}}}]}]]]");
console.log({ test3 }); // {test3: true}
/**
 *
 *
 *
 *
 *
 */

const test4 = validateShortCode("[[[{[{{{([({[(((({()}))))]})]}}}]}]]]");
console.log({ test4 }); // {test4: false}

/**
 *
 *
 */

const test5 = validateShortCode(
  "{table and chair set for dinner  {(func (param)) color}}"
);
console.log({ test5 }); // {test5: true}

// Info
/**
 * Edge cases are not handled. the filtering does not remove special characters
 * only alphanumeric characters and white spaces are filtere
 */

//  Improvement suggestion
/**
 * A regex that filters out all characters excluding the code chars would improve the functions accuracy.
 */
