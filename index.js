import fs, { read } from 'fs';
import readline from 'readline';

let reader = readline.createInterface({
  input: fs.createReadStream('package.json'),
});
let result = false;
reader.on('line', line => {
  console.log(line);
  result = true;
});

const answer = new Promise((resolve) => {
  reader.on('close', () => {
    resolve();
  })
});

await answer.finally();

console.log(result);
