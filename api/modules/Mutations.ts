import { mutationType } from '@nexus/schema'

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.upsertOneUser()
    t.crud.deleteOneUser()
    t.crud.updateManyUser()
    t.crud.deleteManyUser()
    t.crud.createOnePost()
    t.crud.updateOnePost()
    t.crud.upsertOnePost()
    t.crud.deleteOnePost()
    t.crud.updateManyPost()
    t.crud.deleteManyPost()
    t.crud.createOneComment()
    t.crud.updateOneComment()
    t.crud.upsertOneComment()
    t.crud.deleteOneComment()
    t.crud.updateManyComment()
    t.crud.deleteManyComment()
  },
})
