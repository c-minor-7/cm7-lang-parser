const { join } = require('path');
const { readFileSync, readdirSync } = require('fs');

const parseCm7 = require('../lib/index');

describe('cm7-lang-parser', () => {
  const exampleDir = join(__dirname, './cm7s');
  for (const filename of readdirSync(exampleDir)) {
    const filepath = join(exampleDir, filename);
    if (filename[0] === '.') continue;

    it(`should parses ${filename}`, () => {
      const ast = parseCm7(readFileSync(filepath, 'utf8'));
      expect(ast.errors).toEqual([]);
      expect(ast).not.toBeNull();
      expect(ast).toMatchSnapshot();
    });
  }
});
