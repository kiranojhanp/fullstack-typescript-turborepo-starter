tag = 0
version = 0.1

build:
	@printf "\033[0;32m>>> Building\033[0m\n"
	yarn build

build.ci:
	@printf "\033[0;32m>>> Building\033[0m\n"
	cd out && yarn build

dev:
	@printf "\033[0;32m>>> Running all apps in parallel\033[0m\n"
	yarn dev

dev.api:
	@printf "\033[0;32m>>> Running api\033[0m\n"
	yarn dev --filter api

dev.native:
	@printf "\033[0;32m>>> Running react native app\033[0m\n"
	yarn dev --filter native

dev.web:
	@printf "\033[0;32m>>> Running web app\033[0m\n"
	yarn dev --filter web

docker.api:
	@printf "\033[0;32m>>> building api from Dockerfile\033[0m\n"
	docker build -t api . -f apps/api/Dockerfile

docker.web:
	@printf "\033[0;32m>>> building web from Dockerfile\033[0m\n"
	docker build -t web . -f apps/web/Dockerfile

extract.env:
	@printf "\033[0;32m>>> Extracting necessary .env \033[0m\n"
	cd apps/api && cp .env.example .env

install:
	@printf "\033[0;32m>>> Installing\033[0m\n"
	yarn

prepare:
	@printf "\033[0;32m>>> Preparing necessary services for application\033[0m\n"
	yarn
	docker-compose up -d

prepare.ci.api:
	@printf "\033[0;32m>>> Preparing necessary services for api\033[0m\n"
	turbo prune --scope=api && cd out && yarn install --frozen-lockfile

prepare.ci.web:
	@printf "\033[0;32m>>> Preparing necessary services for web\033[0m\n"
	turbo prune --scope=web && cd out && yarn install --frozen-lockfile

prepare.ci.native:
	@printf "\033[0;32m>>> Preparing necessary services for native\033[0m\n"
	turbo prune --scope=native && cd out && yarn install --frozen-lockfile

stop:
	@printf "\033[0;32m>>> Stopping the services\033[0m\n"
	docker compose down

test:
	@printf "\033[0;32m>>> Testing\033[0m\n"
	yarn test

test.api:
	@printf "\033[0;32m>>> Testing api\033[0m\n"
	cd apps/api && yarn test --watch

test.web:
	@printf "\033[0;32m>>> Testing web\033[0m\n"
	cd apps/web && yarn test --watch

test.native:
	@printf "\033[0;32m>>> Testing native\033[0m\n"
	cd apps/native && yarn test --watch

test.ci.api:
	@printf "\033[0;32m>>> Testing api ci\033[0m\n"
	cd out/apps/api && yarn test

test.ci.web:
	@printf "\033[0;32m>>> Testing web ci\033[0m\n"
	cd out/apps/web && yarn test

test.ci.native:
	@printf "\033[0;32m>>> Testing native ci\033[0m\n"
	cd out/apps/native && yarn test
