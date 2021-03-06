import { idArg, queryType, stringArg } from 'nexus'

export const Query = queryType({
  definition(t) {
    t.field('Item', {
      type: 'Item',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.item.findOne({
          where: {
            id,
          },
        })
      },
    })

    t.list.field('Items', {
      type: 'Item',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.item.findMany({
          where: {
            OR: [
              { title: { contains: searchString } },
              { description: { contains: searchString } },
            ],
          },
        })
      },
    })

    t.list.field('ItemsByCategory', {
      type: 'Item',
      args: {
        category: stringArg(),
      },
      resolve: (parent, { category }, ctx) => {
        return ctx.prisma.item.findMany({
          where: {
            OR: {
              category: { contains: category },
            },
          },
        })
      },
    })
  },
})
