# cm7-lang-parser

Cm7 is a language to represent chords and lyrics. This package is a parser for this language. See [here](docs/spec.md) for the language specification.

## Motivation
Displaying chords on top of each line of lyrics at the correct position can be tricky. The idea is to write the chords and lyrics in a way regardless of the correct position. Then the parser transform it into JSON containing useful info for the frontend to decide how to show it.

## Usage

```js
const parseCm7 = require('cm7-lang-parser');
const AST = parseCm7(cm7Src);
```

The AST would be in the following structure (see more [here](https://github.com/menduz/node-ebnf/blob/master/src/Parser.ts)):

```js
{
  type: string;
  text: string;
  start: number;
  end: number;
  children: AST[];
  parent: AST;
  fullText: string;
  errors: TokenError[];
  rest: string;
  fragment?: boolean;
  lookup?: boolean;
}
```

## Author

Jason Yu (me@ycmjason.com)
