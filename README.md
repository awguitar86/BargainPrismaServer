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

## #3

After you have ran all the needed commands to get the docker container created and the GraphQL Prisma server started, head on over to a browser and go to localhost:4000

Once you are there you can run this query to get all of the data:

```
query {
  Items {
    id
    title
    category
    condition
    description
    price
    isFirmOnPrice
    location
    imageUrl
  }
}
```

Run this query to get all data in a certain category:

```
query {
  ItemsByCategory(category: "Musical Instruments"){
    id
    title
    category
    condition
    description
    price
    isFirmOnPrice
    location
    imageUrl
  }
}
```

Run this query to get one item by id:

```
  Item(id: "<insert ID>"){
    id
    title
    category
    condition
    description
    price
    isFirmOnPrice
    location
    imageUrl
  }
```
