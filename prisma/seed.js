import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prismaClient = new PrismaClient()

const classifiedItems = fs.readFileSync('prisma/items.json')

function loadItems() {
  const items = JSON.parse(classifiedItems)
  const allItems = items.items
  return allItems.map((item) => {
    return {
      data: {
        title: item.title,
        category: item.category,
        condition: item.condition,
        description: item.description,
        price: item.price,
        location: item.location,
        imageUrl: item.imageUrl,
        sellerName: item.sellerName,
        sellerPhone: item.sellerPhone,
      },
    }
  })
}

async function main() {
  try {
    const allItems = loadItems()
    for (let item of allItems) {
      await prismaClient.item
        .create(item)
        .catch((err) =>
          console.log(`Error trying to create UVU items: ${err} item ${item}`),
        )
    }
  } catch (err) {
    console.log(err)
  }
}

main()
  .catch((e) => console.log(e))
  .finally(async () => {
    await prismaClient.disconnect()
  })
