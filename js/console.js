const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your Age: ', (age) => {
  console.log(`Hello, ${age}!`);


  // process the requirements here and return the value here

  rl.close();
});