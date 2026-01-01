import { console } from 'console';
import { readFileSync } from 'fs';
import { join } from 'path';

const fileContent = readFileSync(join(__dirname, 'data.txt'), 'utf8');
const lines = fileContent.split('\n');

const parser = {
  parse: () => {
    let data = [];
    for (let line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const keyValue = trimmedLine.split('=');
        if (keyValue.length === 2) {
          data.push({
            key: keyValue[0].trim(),
            value: keyValue[1].trim()
          });
        }
      }
    }
    return data;
  }
};

console.log(parser.parse());