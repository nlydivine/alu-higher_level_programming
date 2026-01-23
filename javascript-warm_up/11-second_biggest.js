#!/usr/bin/node

const args = process.argv.slice(2).map(Number);

if (args.length <= 1) {
  console.log(0);
} else {
  let biggest = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < args.length; i++) {
    if (args[i] > biggest) {
      second = biggest;
      biggest = args[i];
    } else if (args[i] > second && args[i] < biggest) {
      second = args[i];
    }
  }

  console.log(second);
}
