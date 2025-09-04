FROM node:20-bullseye

WORKDIR /app

# Install build tools for native modules
RUN apt-get update && apt-get install -y python3 make g++ \
 && rm -rf /var/lib/apt/lists/*

COPY package*.json ./

# Force compilation from source to avoid CPU instruction issues
RUN npm install --build-from-source

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
