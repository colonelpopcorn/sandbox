// const url = "https://raw.githubusercontent.com/tabatkins/wordle-list/main/words";
const url = "https://google.com";
// const textParser = (words) => {
//     const list = words.split('\n');
//     console.log(list.indexOf('barbs'));
// };

const textParser = (text) => console.log(text);

fetch(url)
.then(response => response.text())
.then(textParser)
.catch(err => console.log(err));