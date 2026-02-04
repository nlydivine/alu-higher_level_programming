#!/usr/bin/node

const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (!error) {
    const results = JSON.parse(body).results;
    let count = 0;

    for (const movie of results) {
      if (movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
        count++;
      }
    }

    console.log(count);
  }
});
