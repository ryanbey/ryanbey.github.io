/* NOTE: The instructions are in index.html */

/* --- STEP (2) ---
 * - Make this function take an array as a parameter.
 * - Return the count of items in the array that are multiples of three.
 * - Keep this function stand-alone. I.e. it should not know ANYTING about DOM.
 */
function countThreevens(numbers) {
  let result = 0;
  for (let number of numbers) {
    if (number % 3 === 0) {
      result += 1;
    }
  }

  return result;
}

/* --- STEP (5) ---
 * - Add a click handler on the button.
 * - Read the numbers from the input and turn them into an array.
 * - Call countThreevens with the array.
 * - Replace "blah" (and only blah) with the result.
 */
function handleClick() {
  let string = document.querySelector("#input").value;
  let stringArray = string.split(",");
  let result = countThreevens(stringArray);
  document.getElementById("blah").innerText = result;
}

/* TROUBLESHOOTING TIP:
 * Because of how the sandbox is set up, this script creates NO global
 * variables accessible in the HTML file. To make a value from this file
 * visible in the HTML file, you have to store it on window.
 */
window.handleClick = handleClick;
