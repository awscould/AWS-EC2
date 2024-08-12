# Stage 1: Build the React application
FROM node:20.15.1 as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
# Ensure all necessary files have correct permissions
RUN chmod -R 755 /app/node_modules

# Ensure react-scripts has correct permissions
RUN chmod +x /app/node_modules/.bin/react-scripts
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]