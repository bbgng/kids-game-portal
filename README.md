# 子どもむけミニゲームポータル

2歳児から遊べる知育ゲームを集めたWebポータルです。
GitHub Pagesで公開し、iPadなどのタブレットでそのまま遊べます。

## ゲーム一覧

| フォルダ | ゲーム名 | 概要 |
|---|---|---|
| `games/piano/` | 音楽タッチ楽器 | どこをタップしても正しいメロディが流れるピアノ |

## 新しいゲームの追加ルール

1. `games/<ゲーム名>/` フォルダを作成する
2. そのフォルダに `index.html` を置く
3. ルートの `index.html` にゲームカードを追加する
4. 複数ゲームで共用できる処理は `shared/` に切り出す

## GitHub Pages の有効化

Settings → Pages → Source: Deploy from a branch → main / (root) → Save
公開URL: https://bbgng.github.io/kids-game-portal/
