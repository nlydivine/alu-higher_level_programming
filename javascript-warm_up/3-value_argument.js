#!/usr/bin/node

const arg = process.argv[2]; // first argument passed to the script

if (arg === undefined) {
  console.log('No argument');
} else {
  console.log(arg);
}
