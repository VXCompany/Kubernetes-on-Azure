FROM node:14.15.0-alpine3.12 as build-env

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production
RUN npm install

ENV PATH="./node_modules/.bin:$PATH" 

# Copy everything and build
COPY . ./

RUN ng build --prod

# Build runtime image
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-env /usr/src/app/dist/angular-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]