# Bargain App GraphQL Prisma Server

This is a GraphQL Prisma Server that runs in Docker with a postgreSQL database. Here are the instructions for getting it up an running.

## Dependencies

After cloning the repo, cd into BargainPrismaServer and install all dependencies

```
cd BargainPrismaServer
npm install
```

## Docker

Once dependencies are installed, make sure to start up docker on your computer. When docker is running, run these commands in this order:

```
npm run launchDocker
```

```
npm run createDB
```

```
npm run seed
```

```
npm start
```

Then head on over to a browser and go to http://localhost:4000. You will then be in the playground where you can run the Queries and Mutation in the next sections.

If you want to see the docker database, run this command

```
npm run dev
```

## Queries

Once you are there you can run this query to get all of the data:

```graphql
query getAllItems {
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

```graphql
query getItemsByCategory {
  ItemsByCategory(category: "Musical Instruments") {
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

```graphql
query getItemById {
  Item(id: "<INSERT ID>") {
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

## Mutations

### Create

To create a new item run this mutation and put what you want in the empty strings:

```graphql
mutation createNewItem {
  createItem(
    title: ""
    category: ""
    condition: ""
    description: ""
    price: 0
    isFirmOnPrice: false
    location: ""
    imageUrl: ""
  ) {
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

### Update

To update an item run this mutation making sure you grab an id of an item from runnng a query beforehand. Update whatever fields you'd like. You can update multiple fields. Make sure to replace FIELD with a correct field and INSERT VALUE with correct value.

```graphql
mutation updateSingleItem {
  updateItem(
    id: "<INSERT ID>"
    <FIELD>: "<INSERT VALUE>"
  ){
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

### Delete

To delete an item run this mutation. It uses the id of the item that you want to delete. Make sure to put an id of an item inside the the quotes where INSERT ID is.

```graphql
mutation deleteItem {
  deleteOneItem(where: { id: "<INSERT ID>" }) {
    id
    title
  }
}
```
