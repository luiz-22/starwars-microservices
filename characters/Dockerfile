# Instale node de cajón
FROM node:18 

# Donde esta guardada nuestra aplicación
WORKDIR /app

# Copie los archivos package*.json en app (./ hace referencia a app)
COPY package*.json ./ 

# Instale las dependencias de package.json
RUN npm install

# Copy fuente "." (todos lo que tiene esta carpeta) a destino "." (la carpeta app del contenedor)
COPY . .

# Indico que puertos de los que tienen funcionando, queremos abrir
EXPOSE 8001

# Comando para ejecutar el contenedor
CMD ["npm", "start"]

