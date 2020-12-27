# CN-Blog - Example Blog Application

Fullstack Blog Application with Next.js (GraphQL API)

Note: This project is working in progress.
![CN-Blog](https://i.ibb.co/Z6cfgcC/scrnli-11-9-2020-12-48-37-AM.png)

## Getting Started

This is a fully-featured starter kit, which should enable fast, secure development of advanced applications.
This example shows how to implement a **fullstack app in TypeScript with** using below key ingredients.

## Key ingredients

- **[TypeScript](https://www.typescriptlang.org/)** to ensure the highest code quality
- **[Node.js](https://nodejs.org/)** to run JavaScript on the server
- **[Next.js](https://github.com/zeit/next.js)** to bundle source files and render web pages both on the server and the client
- **[React](https://reactjs.org/)** to describe interface components
- **[Apollo GraphQL client](https://github.com/apollographql/apollo-client)** with graphql-codegen
- **[Prisma](https://github.com/prisma/prisma)** Modern DB toolkit to query, migrate and model your database
- **[Nexus](https://github.com/graphql-nexus/schema)** Code-First, Type-Safe, GraphQL Schema Construction
- **[ESLint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** to ensure that source files are error-free and easy to read

## Table of Contents

- [CN-Blog - Example Blog Application](#cn-blog---example-blog-application)
  - [Getting Started](#getting-started)
  - [Key ingredients](#key-ingredients)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [Client-side](#client-side)
    - [Server-side](#server-side)
    - [Configuration](#configuration)
    - [Missing](#missing)
  - [Project Setup](#project-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running a local dev server](#running-a-local-dev-server)
  - [Evolving the app](#evolving-the-app)
  - [Currently Working On](#currently-working-on)

## Features

CN-Blog is made with a lot of functionality in mind.

Here is the complete list of current features in CN-Blog:

### Client-side

- React Hooks
- Forms & form handling
- Client-side form validation
- Styling & Theming
- User handling & dashboard
- Graphql

### Server-side

- Dynamic routing
- Prisma
- Nexus

### Configuration

- Code linting
- Code style & formatting
- Bundle size checking

### Missing

- Automated Test
- XSS & CSRF prevention

## Project Setup

### Prerequisites

Before beginning, please make sure you have the following tools installed.

- Node.js (>= 12.x, [download](https://nodejs.org/en/download/))
- `yarn` (>= 1.22, [instructions](https://yarnpkg.com/lang/en/docs/install/))
- Postgres ([macOS](https://postgresapp.com/), or [others](https://www.postgresql.org/download/))

### Installation

- Clone this repository:

```shell
git clone git@github.com:codenuru/cn-blog.git --depth=1
```

- Install dependencies:

```shell
cd cn-blog
yarn
```

- Before beginning, please make sure you have the following enviroment variable set.
  We are provided example enviroment variables in root and prisma directory
  - copy to ".env.example" to ".env.local". you don't need to set variables Next.js has built-in support for loading environment variables.

    ```shell
    cp .env.example .env.local
    ```

  - Updated: prisma now check .env file in prisma and root folder [instructions](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema#using-env-files)

    Please add your Postgres Database URL to ".env" file.

- Migrate your database following arguments

    ```shell
    yarn migrate:save
    ```

    ```shell
    yarn migrate:up
    ```

### Running a local dev server

```shell
yarn dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

## Evolving the app

Evolving the application typically requires five subsequent steps:

1. Migrating the database schema using SQL
2. Updating your Prisma schema by introspecting the database with `introspect`
3. Generating Prisma Client to match the new database schema with `generate:prisma`
4. Using the updated Prisma Client in your application code and extending the GraphQL API and use `generate`
5. Building new UI features in React

For the following example scenario, assume you want to add a "profile" feature to the app where users can create a profile and write a short bio about themselves.

## Currently Working On

> In order

- [x] Documentation
- [x] A good settings configuration
- [x] Add CRUD operations Tag and Category
- [x] (Main) Show Posts and Post Page
- [x] Update: React 17 and nextJS 10
- [ ] (Portal) Create Post Page
- [ ] (Main) Implement Tag and Category
- [ ] (Portal) Create Tag and Category
- [ ] (Portal) Create and Manage User Page
- [ ] (Main) Create Comment Component
- [ ] (Main) Show Comments in Post Page
- [ ] (Portal) Manage Comment
- [ ] (Main) Show User's Posts
- [ ] Update: Nexus 1 and Prisma 2.13.1
- [ ] Fix: Getting loop different lang
- [ ] Fix: Client auth working even though token invalid
