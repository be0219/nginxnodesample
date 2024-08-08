# Nginx のイメージを使用
FROM nginx:alpine

# Nginx 設定ファイルをコピー
COPY default.conf /etc/nginx/conf.d/default.conf

# フロントエンドの静的ファイルをコピー
COPY public /usr/share/nginx/html
