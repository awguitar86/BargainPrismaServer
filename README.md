# Bargain App GraphQL Prisma Server

This is a GraphQL Prisma Server that runs in Docker with a postgreSQL database. Here are the instructions for getting it up an running.

## Dependencies

After cloning the repo, make sure to install all dependencies

```
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

## Queries

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
  Item(id: "<INSERT ID>"){
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

## Mutations

### Create

To create a new item run this mutation and put what you want in the empty strings:

```
mutation {
  createItem(
    title: ""
    category: ""
    condition: ""
    description: ""
    price: 0
    isFirmOnPrice: false
    location: ""
    imageUrl: ""
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

### Update

To update an item run this mutation making sure you grab an id of an item from runnng a query beforehand. Update whatever fields you'd like. You can update multiple fields. Make sure to replace FIELD with a correct field and INSERT VALUE with correct value.

```
mutation {
  updateItem(
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

To delete an item run this mutation. It uses any of the fields on an item so pick a field to use to delete with like the id of an item:

```
mutation {
  deleteOneItem(where: {id: "<INSERT ID>"}){
    id
    title
  }
}
```
