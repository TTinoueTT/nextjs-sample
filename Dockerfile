# ************************************************
# ビルドステージ (build)
# ************************************************
# Node.js 20がインストールされたAlpine Linuxベースのイメージを使用し、
# このステージをbuildと名付ける
FROM node:20-alpine AS build

# コンテナ内の作業ディレクトリを/appに設定
WORKDIR /app
# package.jsonとpackage-lock.json（存在する場合）をコンテナ内の作業ディレクトリにコピー
COPY package*.json ./
RUN npm install -g npm@10.2.5
# RUN npm ciで依存関係をインストール
RUN npm install
# Dockerfileがあるディレクトリのすべてのファイルをコンテナ内にコピー
COPY . .
# アプリケーションをビルド
RUN npm run build

# ************************************************
# ランタイムステージ (runtime)
# ************************************************
# 同じNode.js 20のAlpineイメージを使用するが、runtimeという新しいステージを開始
FROM node:20-alpine AS runtime

WORKDIR /app
COPY package*.json ./
# 本番環境用の依存関係のみをインストール
RUN npm ci --only=production

# ビルドステージで生成されたファイル（おそらくNext.jsアプリケーションのビルド成果物）
# をランタイムステージにコピー
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# コンテナのポート3000を公開
EXPOSE 3000
# セキュリティ上の理由から非rootユーザー（node）としてコンテナを実行
USER node
# コンテナが起動した際にアプリケーションを開始するコマンド
CMD ["npm", "start"]
