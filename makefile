tag = 0
version = 0.1

build:
	@printf "\033[0;32m>>> Building\033[0m\n"
	nps build

dev:
	@printf "\033[0;32m>>> Running all apps in parallel\033[0m\n"
	nps dev

dev.api:
	@printf "\033[0;32m>>> Running api\033[0m\n"
	nps dev.api

dev.native:
	@printf "\033[0;32m>>> Running react native app with api in parallel\033[0m\n"
	nps dev.native

dev.web:
	@printf "\033[0;32m>>> Running web app with api in parallel\033[0m\n"
	nps dev.web

service.start:
	@printf "\033[0;32m>>> Starting necessary services for application\033[0m\n"
	nps prepare
