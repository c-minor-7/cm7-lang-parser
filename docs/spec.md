# Language Specification

## Syntax

BNF:
```bnf
           <cm7> ::= <lines>

         <lines> ::= <line> | <lines>

          <line> ::= <EOL> | <chord-line> <EOL> <lyrics-line> <EOL>

    <chord-line> ::= <opt-whitespace> | <opt-whitespace> <chord-line> | <chord> <chord-line>

   <lyrics-line> ::= <chars>

<opt-whitespace> ::= "" |  " " <opt-whitespace>

         <chord> ::= <note><quality><additions><base>

          <note> ::= "C" |
                     "C#" | "Db" |
                     "D" |
                     "D#" | "Eb" |
                     "E" |
                     "F" |
                     "F#" | "Gb" |
                     "G" |
                     "G#" | "Ab" |
                     "A" |
                     "A#" | "Bb" |
                     "B"

       <quality> ::= "" | "m" | "sus2" | "sus4" | "dim" | "aug" |
                     "7" | "M7" | "m7" | "mM7"
                     "6" | "9" |
                     "aug" | "aug7" |
                     "dim" | "dim7" | "m7b5"

      <additions> ::= "" | "add" <modifier> <interval> <additions>

           <base> ::= "" | "/" <note>

       <interval> ::= "2" | "4" | "6" | "9" | "11" | "13"

       <modifier> ::= "" | "#" | "b"
```
