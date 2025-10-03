# Imagem base
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e tsconfig.json
COPY package*.json tsconfig.json ./

# Instalar dependências (incluindo devDependencies)
RUN npm install

# Copiar o resto do código
COPY . .

# Compilar TypeScript
RUN npm run build

# Expor a porta
EXPOSE 4000

# Rodar o servidor compilado
CMD ["node", "dist/simple-server.js"]
