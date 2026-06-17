# シェアクリ LP — プロジェクト概要

## 概要

OFF-KAi!! 提携クリニック「シェアクリ」のオンライン診療サービス向け女性向けランディングページ。

- フレームワーク: Next.js 16 (App Router, 静的エクスポート)
- スタイル: Tailwind CSS 4
- 言語: TypeScript

---

## URL

| 用途 | URL |
|------|-----|
| 女性向け LP（メイン） | `/women` |
| トップ（同内容） | `/` |
| LINE 公式 | https://liff.line.me/1657922560-1J7Njyb8/landing?follow=%40079icouq&lp=jvXnCt&liff_id=1657922560-1J7Njyb8 |
| プライバシーポリシー | https://sharecli.co.jp/privacy-policy/ |
| 運営会社 | https://sharecli.co.jp/company/ |

---

## GitHub リポジトリ

```
https://github.com/mogi-png/sharecli-lp-next.git
```

---

## ローカル起動方法

```bash
cd "/Users/mogikenta/Desktop/シェアクリLP/女性向け/sharecli-lp-next"

# 開発サーバー（ホットリロードあり）
node node_modules/.bin/next dev --port 3002

# 本番ビルド → 起動
node node_modules/.bin/next build
node node_modules/.bin/next start --port 3002
```

ブラウザは `http://[::1]:3002` で開く（macOS の IPv6 バインド対応）。

---

## デプロイ・更新手順

```bash
# 変更 → ビルド確認
node node_modules/.bin/next build

# コミット & プッシュ
git add .
git commit -m "変更内容"
git push
```

---

## ページ構成

```
app/
├── page.tsx          # / (トップ)
├── women/
│   └── page.tsx      # /women (女性向け LP)
├── layout.tsx
├── globals.css
├── robots.ts
└── sitemap.ts
```

---

## コンポーネント構成（セクション順）

| ファイル | セクション |
|----------|-----------|
| `Header.tsx` | ヘッダー（LINEボタン付き） |
| `Hero.tsx` | ファーストビュー |
| `Problems.tsx` | こんな悩みありませんか？ |
| `Features.tsx` | シェアクリなら |
| `Beauty.tsx` | 美容内服・美肌ケア |
| `Recommend.tsx` | こんな方におすすめ |
| `Menu.tsx` | 診療メニュー（美容内服→ダイエット→AGA の順） |
| `Oshikatsu.tsx` | 推し活も、自分磨きも。 |
| `Flow.tsx` | ご利用の流れ |
| `Faq.tsx` | よくある質問 |
| `Safety.tsx` | 安心・安全への取り組み |
| `Disclaimer.tsx` | 免責事項 |
| `CTA.tsx` | 最終 LINE 誘導 |
| `Footer.tsx` | フッター |

---

## 画像ファイル

`public/images/` に配置（すべて webp）。

| ファイル | 使用セクション |
|----------|--------------|
| `hero.webp` | Hero |
| `worry.webp` | Problems |
| `home.webp` | Features |
| `beauty.webp` | Beauty |
| `oshikatsu.webp` | Oshikatsu |
| `flow.webp` | Flow（縦長、max-w-[560px] で表示） |
| `cta.webp` | CTA |

---

## サイト設定

`lib/site-config.ts` に一元管理。LINE URL・サイト名・説明文はここを変更する。

```ts
export const siteConfig = {
  name: "シェアクリ",
  nameEn: "ShareCli",
  lineUrl: "https://liff.line.me/...",
  ...
}
```

---

## ブランドカラー

`app/globals.css` で定義。

| 変数 | 用途 |
|------|------|
| `brand-pink-deep` | メインピンク（ボタン・強調） |
| `brand-pink-pale` | 薄ピンク（背景） |
| `brand-purple` | サブパープル |
| `brand-purple-pale` | 薄パープル（背景） |
| `brand-ink` | 本文テキスト |
| `brand-ink-soft` | サブテキスト |
