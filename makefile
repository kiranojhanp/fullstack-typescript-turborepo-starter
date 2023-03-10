tag = 0
version = 0.1

build:
	@printf "\033[0;32m>>> Building\033[0m\n"
	yarn build

build.ci:
	@printf "\033[0;32m>>> Building\033[0m\n"
	cd out && yarn build

build.ci.native:
	@printf "\033[0;32m>>> Building\033[0m\n"
	cd out && eas build --profile preview --platform android --non-interactive --clear-cache

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
	docker run -d -p 8080:8080 --env-file=apps/api/.env api

docker.web:
	@printf "\033[0;32m>>> building web from Dockerfile\033[0m\n"
	docker build -t web . -f apps/web/Dockerfile
	docker run -d -p 3000:3000 web

extract.env:
	@printf "\033[0;32m>>> Extracting necessary .env \033[0m\n"
	cd apps/api && cp .env.example .env

format:
	@printf "\033[0;32m>>> Formatting code using prettier \033[0m\n"
	yarn format

build.ci.native:
	@printf "\033[0;32m>>> Building\033[0m\n"
	cd out && eas build --profile preview --platform android --non-interactive --clear-cache

install:
	@printf "\033[0;32m>>> Installing\033[0m\n"
	yarn

lint:
	@printf "\033[0;32m>>> Running lint\033[0m\n"
	yarn lint

lint.fix:
	@printf "\033[0;32m>>> Fixing lint issues\033[0m\n"
	yarn lint:fix

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
