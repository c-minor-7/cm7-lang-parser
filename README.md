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

## Example Cm7 source

```
Eb Cm
()在夜晚 說(早)晨
Fm Bbsus4 Bb
()閒談後 你(更)像別(人)
Gm Cm
()字幕裡 說(冬)日灰暗
Fm Bb
回(答)你 這邊的氣(氛)

Gsus4 G Cm 
()就(像)你 已(記)不起了
Fm Bb
()連懷舊 也(格)外寂寥
Gm Cm
()雜物裡 遺(物)和舊照
Ab Fm Fm Gm Ab Bb
誰(變)賣 誰(棄)掉 誰(看)(到)(破)(曉)

Eb Cm
()漸漸我甚(麼)都不想知道
Fm Bb
()我覺得迷(失)竟比醒覺好
Gm Cm
()漸漸我離(開)都不想宣佈
Fm Bbsus4  Bb
()怕記憶 最(後)變話(題) 太俗套

G Cm Gsus4 G
() (寂)寞 寂寞出於(你)的空(白)
Cm Eb
()剩下我被(記)憶掌摑
Fm7 Gm Cm
()如留下語(錄)誰來(看)
Db Bb
懷念(只)可鋪滿被(單)

Eb Cm Ab
()漸漸我聞(歌)都不想起舞()
Gm Fm Gm Ab Bb B Db
我(覺)得我(失)去(一)切(知)覺(極)(美)(好)
Eb Cm Bm Bbm7add9 
()渾噩哪及(記)得(恐)(怖)
Adim Ab Eb/G Fm Bb Eb
(記)得(種)種感(覺) 但欠(你)的廝(守)到(老)
```

## Author

Jason Yu (me@ycmjason.com)
