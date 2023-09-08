FROM node:alpine
ENV NODE_ENV=production
ENV PORT=3300
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE $PORT
ENTRYPOINT [ "node" , "app.js" ]
