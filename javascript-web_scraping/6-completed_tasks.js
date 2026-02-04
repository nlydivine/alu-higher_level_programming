#!/usr/bin/node

const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const todos = JSON.parse(body);
  const result = {};

  for (const todo of todos) {
    if (todo.completed === true) {
      if (result[todo.userId] === undefined) {
        result[todo.userId] = 1;
      } else {
        result[todo.userId]++;
      }
    }
  }

  console.log(result);
});
