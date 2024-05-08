# Patient medical report RESTAPI

## Overview

This is an API to store medical report.

## Prerequisites

- Node.js v20+
- npm
- Docker

## Tech Stack

- NestJs
- Prisma
- Postgresql

## Development Dependencies

- ESLint
- Prettier
- Jest

## Installation / Run Locally

Clone the project

```bash
  git clone https://github.com/raybagas7/Medical-NEST-RestAPI.git
```

Go to the project directory

```bash
  cd Medical-NEST-RestAPI
```

Install dependencies

```bash
  npm install
```

Environment variable

```bash
  cp .env.example .env
```

**_follow the .env.example and fill every variable and base api url with your needs_**

Start the application in Development mode.

```bash
  npm run start:dev
```

**_(Api will run on port 3000 by default)_**

To build and start the application you can run this command

```bash
  npm run build
```

```bash
  npm run start
```

**_(Web app will run on port 3000 by default)_**
