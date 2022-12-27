# Turborepo (NestJS + NextJS + React Native + Typescript + Jest) Starter

This is fullstack typescript turborepo starter. It comes with the following features.

- ✅ Turborepo
- ✅ Nestjs
    - ✅ Env Config with Validation
- ✅ NextJS
- ✅ React native powered by expo
- ✅ Testing using Jest
- ✅ Github Actions
- ✅ Reverse Proxy using Nginx
- ✅ Docker Integration
- ✅ Postgres Database
- ✅ Package scripts using NPS

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
- Install nps by running
```
npm i -g nps
```
- Make sure docker and docker-compose are
 installed. Refer to docs for your operating system.

### Install Dependencies
Make sure you are at root of the project and just run

```
nps prepare
```

### Build

To build all apps and packages, run the following command at the root of project:

```
nps build
```

### Develop

To develop all apps and packages, run the following command at the root of project:

```
nps dev
```
The app should be running at `http://localhost` with reverse proxy configured.

Similarly,
To develop mobile app, api and packages, run the following command at the root of project:

```
nps dev.native
```
To develop web app, api and packages, run the following command at the root of project:
```
nps dev.web
```

## Other available commands
Run `nps` in the terminal to see list of all available commands.
