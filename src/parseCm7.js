import W3C from 'ebnf/dist/Grammars/W3CEBNF';
import CM7_EBNF from './cm7.ebnf';

const parser = new W3C.Parser(CM7_EBNF);

export default (cm7Src) => parser.getAST(cm7Src);
