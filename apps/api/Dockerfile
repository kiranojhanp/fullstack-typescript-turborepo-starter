FROM node:16-alpine AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=api --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:16-alpine AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY --from=builder /app/turbo.json ./turbo.json
RUN yarn install --frozen-lockfile


FROM node:16-alpine AS sourcer
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
RUN yarn turbo run build --filter=api --include-dependencies --no-deps

FROM node:16-alpine as runner
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=sourcer /app/ .
EXPOSE 8080
CMD [ "node", "apps/api/dist/main.js" ]
