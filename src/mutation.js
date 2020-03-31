import { idArg, mutationType, stringArg, intArg, booleanArg } from 'nexus'

export const Mutation = mutationType({
  name: 'Mutation',
  definition(t) {
    t.crud.deleteOneItem()

    t.field('createItem', {
      type: 'Item',
      args: {
        title: stringArg(),
        category: stringArg(),
        condition: stringArg(),
        description: stringArg(),
        price: intArg(),
        isFirmOnPrice: booleanArg(),
        location: stringArg(),
        imageUrl: stringArg(),
      },
      resolve: (
        parent,
        {
          title,
          category,
          condition,
          description,
          price,
          isFirmOnPrice,
          location,
          imageUrl,
        },
        ctx,
      ) => {
        return ctx.prisma.item.create({
          data: {
            title,
            category,
            condition,
            description,
            price,
            isFirmOnPrice,
            location,
            imageUrl,
          },
        })
      },
    })

    t.field('updateItem', {
      type: 'Item',
      args: {
        id: idArg(),
        title: stringArg(),
        category: stringArg(),
        condition: stringArg(),
        description: stringArg(),
        price: intArg(),
        isFirmOnPrice: booleanArg(),
        location: stringArg(),
        imageUrl: stringArg(),
      },
      resolve: (
        parent,
        {
          id,
          title,
          category,
          condition,
          description,
          price,
          isFirmOnPrice,
          location,
          imageUrl,
        },
        ctx,
      ) => {
        return ctx.prisma.item.update({
          where: {
            id,
          },
          data: {
            title,
            category,
            condition,
            description,
            price,
            isFirmOnPrice,
            location,
            imageUrl,
          },
        })
      },
    })
  },
})
