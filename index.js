
// eslint-disable-next-line no-undef
const chalk = require("chalk");
console.log(chalk.blue("Hello world!"));

// eslint-disable-next-line no-undef
const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);

// eslint-disable-next-line no-undef
const readline = require("readline").createInterface({
  // eslint-disable-next-line no-undef
  input: process.stdin,
  // eslint-disable-next-line no-undef
  output: process.stdout
});

readline.question("What's your name?", name => {
  console.log(`Hi ${name}!`);
  readline.close();
});
