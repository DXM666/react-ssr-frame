# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# copy dir
COPY . .

# set env variables
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g pnpm

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN pnpm install \
    && pnpm run build

# expose port
EXPOSE 3000

CMD ["node", "dist/server.js"]
