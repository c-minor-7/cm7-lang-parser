# cm7-lang-parser

[![Build Status](https://travis-ci.org/c-minor-7/cm7-lang-parser.svg?branch=master)](https://travis-ci.org/c-minor-7/cm7-lang-parser)

Cm7 is a language to represent chords and lyrics. This package is a parser for the language. See [here](docs/spec.md) for the language specification.

## Motivation
Displaying chords on top of each line of lyrics at the correct position can be tricky. The idea is to write the chords and lyrics in a way regardless of the correct position. Then the parser transform it into AST and let the frontend to decide how to show it.

## Usage

```js
const parseCm7 = require('cm7-lang-parser');
const AST = parseCm7(cm7Src);
```

The AST would be in the following structure (see more [here](https://github.com/menduz/node-ebnf/blob/master/src/Parser.ts)):

```js
{
  type: string,
  text: string,
  start: number,
  end: number,
  children: AST[],
  parent: AST,
  fullText: string,
  errors: TokenError[],
  rest: string,
  fragment?: boolean,
  lookup?: boolean,
}
```

## Language Definition

This language is defined with [W3C EBNF](https://www.ietf.org/rfc/rfc4627.txt).
The ebnf definition is located [here](./src/cm7.ebnf) in case this README is not up to date.

```bnf
cm7           ::= EOL* configs EOL+ song

configs       ::= key_config
key_config    ::= "key" WS? "=" WS? note
note          ::= [ACDFG] "#" | [ABDEG] "b" | [A-G]

song          ::= section? (EOL+ section?)*

section       ::= ("::" WS* section_label WS* "::" EOL)? line (EOL line)*
section_label ::= [^:]+

line          ::= WS* (EMPTY_LINE | chord_line) WS* (EOL WS* (EMPTY_LINE | lyrics_line) WS*)

chord_line    ::= chord (WS+ chord)*
chord         ::= relative_note quality? addition* base?
quality       ::= "mM7" | "m7b5" | "m7" | "m" | "sus2" | "sus4" |"7" | "M7" | "6" | "9" | "aug7" | "aug" | "dim7" | "dim"
addition      ::= "add" modifier? interval
base          ::= "/" relative_note
relative_note ::= ("1" | "2" | "3" | "4" | "5" | "6" | "7") ("#" | "b")?
interval      ::= "2" | "4" | "6" | "9" | "11" | "13"
modifier      ::= "#" | "b"

lyrics_line   ::= lyrics? (lyrics_beat+ lyrics?)*
lyrics        ::= [^\n\r()]+
lyrics_beat   ::= "(" lyrics? ")"

EMPTY_LINE    ::= "-"+

WS            ::= [ \t]+
EOL           ::= [\n\r]

```

## Example Cm7 source

```
key=Eb

:: intro ::
1 6m
2m 5sus4 5

:: verse ::
1 6m
()在夜晚 說(早)晨
2m 5sus4 5
()閒談後 你(更)像別(人)
3m 6m
()字幕裡 說(冬)日灰暗
2m 5
回(答)你 這邊的氣(氛)

3sus4 3 6m
()就(像)你 已(記)不起了
2m 5
()連懷舊 也(格)外寂寥
3m 6m
()雜物裡 遺(物)和舊照
4 2m 2m 3m 4 5
誰(變)賣 誰(棄)掉 誰(看)(到)(破)(曉)

:: chorus ::
1 6m
()漸漸我甚(麼)都不想知道
2m 4/5
()我覺得迷(失)竟比醒覺好
3m 6m
()漸漸我離(開)都不想宣佈
2m 5sus4 5 1
()怕記憶 最(後)變話(題) 太俗(套)

3 6m 5sus4 5
() (寂)寞 寂寞出於(你)的空(白)
6m 1
()剩下我被(記)憶掌摑
2m7 3m 6m
()如留下語(錄)誰來(看)
7b 5/7
懷念(只)可鋪滿被(單)
```

See more examples [here](./test/cm7s).

## Credits

Thanks to the awesome [node-ebnf](https://github.com/menduz/node-ebnf) which made this language possible.

## Author

Jason Yu (me@ycmjason.com)
