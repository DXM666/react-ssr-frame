# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# copy dir
COPY . .

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install \
    && npm run build

# expose port
EXPOSE 3000

CMD ["npm", "start"]
