# my-typescript-sandbox

[![CI](https://github.com/jersson/my-typescript-sandbox/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jersson/my-typescript-sandbox/actions/workflows/ci.yml)

WIP

## 1. Technical requirements

- [node](https://nodejs.org/) >= 18.17.1
- [yarn](https://yarnpkg.com/) >= 1.22

> Please use [nvm](https://github.com/nvm-sh/nvm) in case you need to work with different node versions :wink:

## 2. To understand the code

> also wip but codebase, folder structure and rules are based in the [api-testing-example](https://github.com/jersson/api-testing-example) repo :wink:

## 3. To use the code

### 3.1. Install dependencies

```bash
yarn install
```

### 3.2. Make the required configuration

Setup the `.env` file at the root path using these values

```
API_URL=https://freetestapi.com/api
ENDPOINT_BOOKS=/v1/books
```

We're using this [mocks api](https://freetestapi.com/apis/books) to make some tests but you can use other apis with the same interface :smile:

### 3.2. Explore the code, edit it and run it locally

```bash
yarn dev
```

> Please use this url <http://localhost:3000>

## 4. To test the code

```bash
yarn test
```
