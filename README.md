# Turborepo (NestJS + NextJS + React Native + Typescript + Jest) Starter

This is fullstack typescript turborepo starter. It comes with the following features.

- ✅ Turborepo
- ✅ Nestjs
  - ✅ Fastify
  - ✅ Env Config with Validation
- ✅ NextJS
- ✅ React native powered by expo
- ✅ Shared UI components using react native web
- ✅ Shared data management using tanstack query
- ✅ Testing using Jest
- ✅ Github Actions
- ✅ Reverse Proxy using Nginx
- ✅ Eslint and Prettier integration
- ✅ Docker Integration
- ✅ Postgres Database
- ✅ Scripts using makefile
- ✅ Husky and commit lint integration

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `api`: a [NestJS](https://nestjs.com/) app
- `native`: an [Expo powered React native](https://expo.dev/) app
- `web`: a [Next.js](https://nextjs.org) app
- `ui`: a stub React native web component library shared by both `web` and `native`
- `config`: `nginx`
- `tsconfig`: `tsconfig.json` used throughout the monorepo

Each package/app is powered by [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [Node Package Scripts](https://github.com/sezna/nps#readme) for automation scripts
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This starter kit is using turborepo and yarn workspaces for monorepo workflow.

### Prerequisites

- Install Gnu make (Only for windows)

```
choco install make
```

- Make sure docker and docker-compose are
  installed. Refer to docs for your operating system.

### Install Dependencies

If you're running it for the first time, extract the environment variables using command below. Make sure you are at root of the project.

```
make extract.env
```

then just run

```
make prepare
```

### Build

To build all apps and packages, run the following command at the root of project:

```
make build
```

### Develop

To develop all apps and packages, run the following command at the root of project:

```
make dev
```

The app should be running at `http://localhost` with reverse proxy configured.

Similarly,

To develop only api and packages, run the following command at the root of project:

```
make dev.api
```

To develop mobile app, api and packages, run the following command at the root of project:

```
make dev.native
```

To develop web app, api and packages, run the following command at the root of project:

```
make dev.web
```
