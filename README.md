# Input Datalists Multiple

## 概要
* HTML5のdatalistsのMultiple設定を行うためのJavaScriptライブラリです。
  * issueには上がっているらしいので、正式採用されるまでの臨時ライブラリになります。

## 使い方
1. JavaScriptファイルとCSSファイルを自身のHTMLに読み込んでください。
  ~~~HTML
  <link rel="stylesheet" href="/css/input.datalists.multiple.css">
  <script src="/js/input.datalists.multiple.js"></script>
  ~~~
2. インスタンスを生成します
  ~~~JavaScript
    let input1 = multipleTextInput('multipleTextInput', {
      close_btn: {
        label: 'Close',
      }
    })
  ~~~

## オプション
### 閉じるボタンのオプション
| 階層 | 設定名 | 設定内容 | 型 | デフォルト |
| -- | -- | -- | -- | :--: |
| close_btn | label | 閉じるボタンの文字列 | string | x |
| close_btn | class | 閉じるボタンに追加するクラスのリスト | Array | [] |