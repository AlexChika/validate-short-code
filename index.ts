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

  // 2 Remove normal text char to reduce length and convert to string array
  const codeStr = code.replace(/[a-bA-Z0-9\s]/gi, "").split("");
  // console.log({ codeStr });

  // 3 create an object
  const codes = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  // 2 convert strings to an array loop
  // filter string and return code characters : Optional

  const char = ["{", "(", "[", "]", ")", "}"];

  // for (const c of codeArr) { //
  //   if (char.includes(c)) { // identify the code chars

  //       if()
  //   }
  // }
}

/* --------------------- TESTS --------------------- */
// please uncomment one after ther other
validateShortCode("{table {(text) color}}");

/* -------- Implementation flow and details -------- */
// 1 . we validate that code snippet is a string;

// 2
