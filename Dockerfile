
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN echo "VITE_USER_NAME_CMI=f96c506dea731b2f" >> .env && \
    echo "VITE_MAIL_TO_DAWID=dawid.widulinski@gmail.com" >> .env && \
    echo "VITE_API_KEY_CMI=uTP1odM7kzZmwTbEjBAdg3wq" >> .env && \
    npm run build

#    echo "VUE_APP_API_KEY=${ secrets.VUE_APP_API_KEY }" >> .env.production && \
#    echo "VUE_APP_USER_NAME=${ secrets.VUE_APP_USER_NAME }" >> .env.production && \
#    echo "VUE_APP_USER_NAME=${ secrets.VUE_APP_USER_NAME }" >> .env.production

# production stage
FROM nginx:stable-alpine as production-stage
ENV API_KEY_CMI = "uTP1odM7kzZmwTbEjBAdg3wq"
ENV USER_NAME_CMI = "f96c506dea731b2f"
ENV MAIL_TO_DAWID = "dawid.widulinski@gmail.com"
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]