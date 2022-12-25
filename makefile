tag = 0
version = 0.1

.PHONY: services

build:
	@printf "\033[0;32m>>> Building\033[0m\n"
	yarn build

build.libs:
	@printf "\033[0;32m>>> Building libs\033[0m\n"
	yarn build:libs

dev: run

dev.api: run.api

dev.react: run.web

dev.native: run.native

install:
	@printf "\033[0;32m>>> Installing dependencies\033[0m\n"
	yarn -r install

lint:
	@printf "\033[0;32m>>> Lint code\033[0m\n"
	yarn lint

lint.fix:
	@printf "\033[0;32m>>> Lint code\033[0m\n"
	yarn lint:fix

outdated:
	@printf "\033[0;32m>>> Check for outdated dependencies\033[0m\n"
	yarn -r outdated

release:
	@printf "\033[0;32m>>> Tagging repo for next release\033[0m\n"
	git checkout $(version)
	git pull origin $(version)
	git tag $(version).$(tag)
	git push origin $(version).$(tag)
	git checkout $(version)-develop

run:
	@printf "\033[0;32m>>> Running all apps in parallel\033[0m\n"
	yarn run dev

run.api:
	@printf "\033[0;32m>>> Running nextjs app with api in parallel\033[0m\n"
	yarn run dev --filter api

run.web:
	@printf "\033[0;32m>>> Running nextjs app with api in parallel\033[0m\n"
	yarn run dev --filter web

run.native:
	@printf "\033[0;32m>>> Running react native app with api in parallel\033[0m\n"
	yarn run dev --filter native

services:
	@printf "\033[0;32m>>> Starting local services\033[0m\n"
	cd services && make start

services.stop:
	@printf "\033[0;32m>>> Stopping local services\033[0m\n"
	cd services && make stop

sort-package:
	@printf "\033[0;32m>>> Format package.json\033[0m\n"
	yarn sort-package

staging:
	@printf "\033[0;32m>>> Merging into staging branch\033[0m\n"
	git checkout $(version)-develop
	git pull origin $(version)-develop
	git checkout $(version)
	git pull origin $(version)
	git merge $(version)-develop -m "Merging $(version)-develop"
	git push origin $(version)
	git checkout $(version)-develop

test:
	@printf "\033[0;32m>>> Running tests\033[0m\n"
	yarn test

test.ci:
	@printf "\033[0;32m>>> Running tests\033[0m\n"
	yarn test:ci

test.integration:
	@printf "\033[0;32m>>> Running integration tests\033[0m\n"
	yarn test:integration

test.unit:
	@printf "\033[0;32m>>> Running unit tests\033[0m\n"
	yarn test:unit

typecheck:
	@printf "\033[0;32m>>> Running Type check\033[0m\n"
	yarn typecheck
