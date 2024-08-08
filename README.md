# nginx-node-sample

このリポジトリは、NginxとNode.jsを組み合わせたサンプルプロジェクトです。フロントエンドの静的ファイルをNginxで提供し、バックエンドのAPIリクエストをNode.jsで処理します。

## 概要

- **フロントエンド**: Nginxが静的ファイルを提供します。`/next`パスで`next.html`が表示され、`/api/`パスでNode.jsのAPIにリクエストを転送します。
- **バックエンド**: Node.jsがAPIリクエストを処理します。

## ディレクトリ構造

```
.
├── docker-compose.yml
├── nginx
│   ├── Dockerfile
│   ├── default.conf
│   └── public
│       ├── favicon.ico
│       ├── index.html
│       └── next.html
└── server
    ├── Dockerfile
    ├── app.js
    └── package.json
```

## インストールとセットアップ

1. **DockerとDocker Composeをインストール**  
   DockerとDocker Composeがインストールされていることを確認します。

2. **リポジトリのクローン**  
   `git clone https://github.com/be0219/nginx-node-sample.git`
   `cd nginx-node-sample`

3. **イメージのビルドとコンテナの起動**  
   `docker-compose up --build`

   これにより、NginxとNode.jsのコンテナがビルドされ、起動します。

## 動作確認

- フロントエンド: [http://localhost/](http://localhost/)
  - `/next` パスで `next.html` が表示されます。
- バックエンド API: [http://localhost/api/hello](http://localhost/api/hello)
  - `Fetch Dataボタン(GET /api/hello)` を押下すると、`{"message": "Hello, world!"}` が返されます。

## 補足事項

- **Nginxの設定**: `nginx/default.conf` に設定が含まれています。
- **Node.jsの設定**: `server/app.js` と `server/package.json` にAPIサーバーの設定が含まれています。
- **静的ファイルの配置**: `nginx/public` フォルダに静的ファイルを配置します。
