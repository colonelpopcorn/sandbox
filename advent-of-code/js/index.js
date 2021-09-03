#! /usr/bin/env node
const days = require('./days');

const day = process.argv[2] || '';
if (day === '' || days[day] === undefined) {
  console.error("Please pass a valid day!")
}
console.log(days[day]);
console.log(days[day]());
