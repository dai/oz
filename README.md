# oz

oz of warp - 日本語対話サポート / Japanese Dialogue Support

## 日本語

### 概要
このプロジェクトは日本語での対話をサポートする軽量な国際化（i18n）フレームワークを提供します。

### 機能
- 日本語と英語のロケールサポート
- シンプルなキーベースの翻訳システム
- ネストされたキーのサポート
- 動的なロケール切り替え

### 使い方

#### インストール
```bash
npm install
```

#### 実行
```bash
npm start
```

#### テスト
```bash
npm test
```

### 使用例

```javascript
import I18n from './i18n.js';

// 日本語をデフォルトロケールとして初期化
const i18n = new I18n('ja');

// 翻訳を取得
console.log(i18n.t('greeting')); // "こんにちは"
console.log(i18n.t('menu.home')); // "ホーム"

// ロケールを切り替え
i18n.setLocale('en');
console.log(i18n.t('greeting')); // "Hello"
```

---

## English

### Overview
This project provides a lightweight internationalization (i18n) framework with support for Japanese dialogue.

### Features
- Japanese and English locale support
- Simple key-based translation system
- Nested key support
- Dynamic locale switching

### Usage

#### Installation
```bash
npm install
```

#### Run
```bash
npm start
```

#### Test
```bash
npm test
```

### Example

```javascript
import I18n from './i18n.js';

// Initialize with Japanese as default locale
const i18n = new I18n('ja');

// Get translations
console.log(i18n.t('greeting')); // "こんにちは"
console.log(i18n.t('menu.home')); // "ホーム"

// Switch locale
i18n.setLocale('en');
console.log(i18n.t('greeting')); // "Hello"
```

## License
MIT
