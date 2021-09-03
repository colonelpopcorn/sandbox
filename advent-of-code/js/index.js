#! /usr/bin/env node
const days = require('./days');

const day = process.argv[2] || '';
if (day === '' || days[day] === undefined) {
  console.error("Please pass a valid day!")
  return 2;
}
console.log(days[day]());
