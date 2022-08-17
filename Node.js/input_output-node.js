var inputDoUser = "";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite as cartas\n", (cartas) => {
  inputDoUser = cartas;

  var s = inputDoUser.split(" ");
  let A = parseInt(s[0]);
  let B = parseInt(s[1]);
  let C;
  if (A > B) {
    C = A;
  } else if (A == B) {
    C = A;
  } else {
    C = B;
  }
  console.log(C);

  readline.close();
});
