import fs from 'fs';

export default function (text, lineLength) {
  // TODO: Implement support for linebreaks in comments
  const tokens = text.split(/ |\n/);

  let result = '/**\n';
  let buffer;

  let i = 0;
  while (i < tokens.length) {
    buffer = ' * ';
    while (i < tokens.length && buffer.length <= lineLength) {
      buffer += `${tokens[i]} `;
      i++;
    }
    result += `${buffer}\n`;
  }
  result += ' */\n';

  fs.writeFile('output/comment.txt', result, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log('The comment was saved as a file!');
  });
}
