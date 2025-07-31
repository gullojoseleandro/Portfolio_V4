# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

### 2. Configurar el Proyecto

#### a. Dockerfile

Asegúrate de tener un `Dockerfile` optimizado con multi-stage builds para mantener la imagen final ligera.

```dockerfile
# Etapa 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Etapa 2: Producción
FROM nginx:alpine
# Copiar build de React a Nginx
COPY --from=builder /app/build /usr/share/nginx/html
# Copiar configuración de Nginx para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Exponer puerto del contenedor
EXPOSE 80
# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
```

#### b. docker-compose.yml

Este es el archivo clave. Configura las variables de entorno para que `nginx-proxy` detecte tu contenedor automáticamente.

```yaml
services:
  portfolio: # Nombre del servicio
    build:
      context: .
      dockerfile: Dockerfile
    container_name: portfolio-v4 # Nombre del contenedor
    restart: unless-stopped
    environment:
      # --- Variables para nginx-proxy ---
      - VIRTUAL_HOST=portfolio.jlgdev.com
      - LETSENCRYPT_HOST=portfolio.jlgdev.com
      - LETSENCRYPT_EMAIL=tu-email@dominio.com
    networks:
      - nginx_network # Conectar a la red del proxy
    expose:
      - "80" # Exponer puerto interno (NO usar 'ports')

networks:
  nginx_network:
    external: true # Indicar que la red ya existe
```

### 3. Desplegar

Una vez que los archivos y el DNS estén listos, el despliegue es un solo comando:

```bash
# Desde el directorio raíz de tu proyecto
docker-compose up -d --build
```

### 4. Verificar

1.  **Verificar estado del contenedor**:
    ```bash
    docker-compose ps
    ```

2.  **Asegurarse que está en la red correcta**:
    ```bash
    docker network inspect nginx_network | grep "portfolio-v4"
    ```

3.  **Ver logs de nginx-proxy** (opcional, para ver si detectó el nuevo host):
    ```bash
    # Desde el directorio de tu nginx-proxy
    docker-compose logs -f nginx
    ```

4.  **Probar la URL**: Abre `https://portfolio.jlgdev.com` en tu navegador. El SSL puede tardar unos minutos en generarse la primera vez.

---

### Puntos Clave a Recordar

-   **`expose` vs `ports`**: Usa `expose` para que el contenedor sea accesible solo dentro de la red de Docker. `ports` lo expondría al exterior, lo cual no es necesario si usas un proxy.
-   **Red Externa**: La red `nginx_network` debe ser la misma que usa tu `nginx-proxy`.
-   **Variables de Entorno**: `VIRTUAL_HOST` es obligatorio. `LETSENCRYPT_HOST` es para SSL.
-   **Sin .conf manual**: No necesitas crear archivos de configuración manuales en tu `nginx-proxy`. El sistema es 100% automático.
