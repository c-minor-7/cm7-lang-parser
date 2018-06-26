const { readFileSync } = require('fs');

const { Grammars } = require('ebnf');

const CM7_EBNF = readFileSync(require.resolve('./Cm7.ebnf'), 'utf8');
const parser = new Grammars.W3C.Parser(CM7_EBNF);

module.exports = (cm7Src) => parser.getAST(cm7Src);
