let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 1; i <=n; i++) { // external loop
  for(let j = 1; j <= i; j++) { // internal loop
    string += "1";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);


