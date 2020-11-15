import { objectType } from '@nexus/schema'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.users({ ordering: true, filtering: true })
    t.crud.posts({ type: 'Post', ordering: true, filtering: true })
    t.crud.comments({ type: 'Comment', ordering: true, filtering: true })
    t.crud.tags({ type: 'Tag', ordering: true, filtering: true })
    t.crud.categories({ type: 'Category', ordering: true, filtering: true })
  },
})
