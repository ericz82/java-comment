import readline from 'readline';
import fs from 'fs';
import comment from './comment.js';

const args = process.argv.slice(2);

const lineLength = parseInt(args[0]) || 80;

if (args[1]) {
  fs.readFile(args[1], 'utf8', (err, text) => {
    if (err) throw err;
    comment(text, lineLength);
  });
} else {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Text you want commented: ', (text) => {
    comment(text, lineLength);
    rl.close();
  });
}
