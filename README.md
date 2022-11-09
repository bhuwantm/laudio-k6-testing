## Project Reference

This project is build on top of reference project ([k6-template-typescript](https://github.com/grafana/k6-template-typescript)) provided by grafana.

## Prerequisites

- Docker and docker-compose
- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install)

## Setup

This project uses typescript but final test files are compile to js format. These generated test files are then run using k6 from docker.

**Install all the dependencies:**

`yarn`

**Start weback in watch mode**

`yarn start`

After running this command following things happens:

- all the file present in `src/tests` folder having name structure `*.test.ts` is compiled to js files in dist/tests folder.
- all the content in `assset` folder is copied to `dist/assets` folder

**Running test**

Run the test using k6 from docker:

`docker-compose run k6 run /tests/<test.file.js>`
