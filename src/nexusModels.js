import { objectType } from 'nexus'

const Item = objectType({
  name: 'Item',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.title()
    t.model.category()
    t.model.condition()
    t.model.description()
    t.model.price()
    t.model.isFirmOnPrice()
    t.model.location()
    t.model.imageUrl()
    t.model.sellerName()
    t.model.sellerPhone()
  },
})

export const Models = [Item]
