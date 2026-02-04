#!/usr/bin/node

const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const results = JSON.parse(body).results;
  let count = 0;

  for (const movie of results) {
    // Look for character ID 18 in this movie
    for (const charUrl of movie.characters) {
      // Extract the ID from the URL
      const match = charUrl.match(/\/([0-9]+)\/$/);
      if (match && match[1] === '18') {
        count++;
        break; // count each movie only once
      }
    }
  }

  console.log(count);
});
