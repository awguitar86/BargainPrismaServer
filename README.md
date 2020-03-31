# Bargain App GraphQL Prisma Server

This is a GraphQL Prisma Server that runs in Docker with a postgreSQL database. Here are the instructions for getting it up an running.

## #1

After cloning the repo, make sure to install all dependencies

```
npm install
```

## #2

Once dependencies are installed, make sure to start up docker on your computer. When docker is running, run these commands in this order:

```
npm run launchDocker
```

```
npm run createDB
```

```
npm run postinstall
```

```
npm run seed
```

```
npm run dev
```

```
npm start
```
