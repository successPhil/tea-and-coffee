export SECRET_KEY=abc123
export DEBUG=True
export POSTGRES_DB=teatime_db
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=postgres
export AWS_ACCESS_KEY_ID=$1
export AWS_SECRET_ACCESS_KEY=$2


COMPOSE_DOCKER_CLI_BUILD=0 DOCKER_BUILDKIT=0 docker compose -f docker-compose.dev.yml up -d --build

# make sure the postgres container is ready, then run migrations
sleep 10
docker exec tea-and-coffee-api-1 python /src/manage.py makemigrations 
docker exec tea-and-coffee-api-1  python /src/manage.py migrate