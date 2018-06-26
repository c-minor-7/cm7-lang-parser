# Language Specification

## Syntax

Please see [here](../lib/Cm7.ebnf) in case the following is not up-to-date.

W3C EBNF (https://www.ietf.org/rfc/rfc4627.txt):

```bnf
cm7         ::= section? (EOL+ section?)*

section     ::= line*

line        ::= chord_line EOL lyrics_line EOL?

chord_line  ::= WS* chord (WS+ chord)* WS*
chord       ::= note quality? addition* base?
note        ::= [ACDFG] "#" | [ABDEG] "b" | [A-G]
quality     ::= "mM7" | "m7b5" | "m7" | "m" | "sus2" | "sus4" |"7" | "M7" | "6" | "9" | "aug7" | "aug" | "dim7" | "dim"
addition    ::= "add" modifier? interval
base        ::= "/" note
interval    ::= "2" | "4" | "6" | "9" | "11" | "13"
modifier    ::= "#" | "b"

lyrics_line ::= WS* lyrics? (lyrics_beat+ lyrics?)* WS*
lyrics      ::= [^()\n\r]+
lyrics_beat ::= "(" lyrics? ")"


WS          ::= [ \t]+
EOL         ::= [\n\r]
```
