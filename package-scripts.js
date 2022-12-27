const path = require("path");

const apiPath = path.resolve(__dirname, "apps/api");
const webPath = path.resolve(__dirname, "apps/web");

const ciApiPath = path.resolve(__dirname, "out/apps/api");
const ciWebPath = path.resolve(__dirname, "out/apps/web");

module.exports = {
  scripts: {
    prepare: {
      default: `nps prepare.web prepare.api`,
      web: `yarn`,
      api: `nps prepare.docker`,
      docker: "docker-compose up -d",
      ci: {
        web: `turbo prune --scope=web && cd out && yarn install --frozen-lockfile`,
        api: `turbo prune --scope=api && cd out && yarn install --frozen-lockfile`,
      },
    },
    test: {
      default: `nps test.web test.api`,
      web: `cd ${webPath} && yarn test:watch`,
      api: `cd ${apiPath} && yarn test:watch`,
      ci: {
        default: `nps test.ci.web test.ci.api`,
        web: `cd ${ciWebPath} && yarn test:ci`,
        api: `cd ${ciApiPath} && yarn test:ci`,
      },
      watch: {
        default: `nps test.watch.web test.watch.api`,
        web: `cd ${webPath} && yarn test:ci`,
        api: `cd ${apiPath} && yarn test:watch`,
      },
    },
    build: {
      default: "yarn run build",
      ci: {
        web: "cd out && yarn run build",
        api: "cd out && yarn run build",
      },
    },
    docker: {
      build: {
        default: "nps docker.build.web docker.build.api",
        web: `docker build -t web . -f ${webPath}/Dockerfile`,
        api: `docker build -t api . -f ${apiPath}/Dockerfile`,
      },
      down: "docker compose down"
    },
    dev: {
      default: `yarn run dev`,
      web: `yarn run dev --filter api --filter web`,
      native: `yarn run dev --filter api --filter native`,
    },
  },
};
