# Node.js のイメージを使用
FROM node:18

# 作業ディレクトリの設定
WORKDIR /app

# パッケージのインストール
COPY package*.json ./
RUN npm install

# アプリケーションコードのコピー
COPY . .

# コンテナ起動時のコマンド
CMD ["node", "app.js"]

# ポートを公開
EXPOSE 8080
