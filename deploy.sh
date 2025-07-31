#!/bin/bash

# Script de despliegue para Portfolio V4
# Uso: ./deploy.sh [production|development]

set -e

ENV=${1:-production}
PROJECT_NAME="portfolio-v4"

echo "🚀 Iniciando despliegue del Portfolio V4 en modo: $ENV"

# Verificar que la red nginx_network existe
if ! docker network ls | grep -q "nginx_network"; then
    echo "⚠️  Creando red nginx_network..."
    docker network create nginx_network
fi

# Detener contenedores existentes
echo "🛑 Deteniendo contenedores existentes..."
docker-compose down --remove-orphans

# Limpiar imágenes antiguas (opcional)
if [ "$ENV" = "production" ]; then
    echo "🧹 Limpiando imágenes antiguas..."
    docker image prune -f
fi

# Construir y levantar servicios
echo "🔨 Construyendo y levantando servicios..."
docker-compose up -d --build

# Verificar estado
echo "✅ Verificando estado de los contenedores..."
docker-compose ps

# Mostrar logs iniciales
echo "📋 Logs iniciales:"
docker-compose logs --tail=20

echo "🎉 Despliegue completado!"
echo "📍 El portfolio estará disponible en: http://localhost:3000"
echo "🔍 Para ver logs en tiempo real: docker-compose logs -f"
echo "🛑 Para detener: docker-compose down"
