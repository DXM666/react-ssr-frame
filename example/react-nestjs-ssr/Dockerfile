# 使用Node.js的基础镜像
FROM node:lts AS builder

# 设置工作目录
WORKDIR /app

# 复制项目文件
COPY . .

# 安装依赖
RUN npm install

# 构建前端
RUN npm run build

# 构建后端
RUN npm run build:server

# 选择更小的基础镜像用于生产环境
FROM node:lts-alpine

# 设置工作目录
WORKDIR /app

# 从builder镜像中复制构建好的文件
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/nestconfig ./nestconfig

# 安装生产依赖
RUN npm install --production

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
