import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
  first?: boolean
  last?: boolean
  before?: boolean
  after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Post: Prisma.Post
  Comment: Prisma.Comment
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'surname' | 'email' | 'password' | 'role' | 'isDeleted' | 'posts' | 'comments' | 'createdAt'
      ordering: 'id' | 'name' | 'surname' | 'email' | 'password' | 'role' | 'isDeleted' | 'createdAt'
    }
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'content' | 'published' | 'title' | 'author' | 'authorId' | 'viewCount' | 'comments' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'content' | 'published' | 'title' | 'authorId' | 'viewCount' | 'createdAt' | 'updatedAt'
    }
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'contain' | 'post' | 'postId' | 'author' | 'authorId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'contain' | 'postId' | 'authorId' | 'createdAt' | 'updatedAt'
    }
  },
  User: {
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'content' | 'published' | 'title' | 'author' | 'authorId' | 'viewCount' | 'comments' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'content' | 'published' | 'title' | 'authorId' | 'viewCount' | 'createdAt' | 'updatedAt'
    }
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'contain' | 'post' | 'postId' | 'author' | 'authorId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'contain' | 'postId' | 'authorId' | 'createdAt' | 'updatedAt'
    }
  }
  Post: {
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'contain' | 'post' | 'postId' | 'author' | 'authorId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'contain' | 'postId' | 'authorId' | 'createdAt' | 'updatedAt'
    }
  }
  Comment: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    post: 'Post'
    posts: 'Post'
    comment: 'Comment'
    comments: 'Comment'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'BatchPayload'
    deleteOneUser: 'User'
    deleteManyUser: 'BatchPayload'
    upsertOneUser: 'User'
    createOnePost: 'Post'
    updateOnePost: 'Post'
    updateManyPost: 'BatchPayload'
    deleteOnePost: 'Post'
    deleteManyPost: 'BatchPayload'
    upsertOnePost: 'Post'
    createOneComment: 'Comment'
    updateOneComment: 'Comment'
    updateManyComment: 'BatchPayload'
    deleteOneComment: 'Comment'
    deleteManyComment: 'BatchPayload'
    upsertOneComment: 'Comment'
  },
  User: {
    id: 'Int'
    name: 'String'
    surname: 'String'
    email: 'String'
    password: 'String'
    role: 'Role'
    isDeleted: 'Boolean'
    posts: 'Post'
    comments: 'Comment'
    createdAt: 'DateTime'
  }
  Post: {
    id: 'Int'
    content: 'String'
    published: 'Boolean'
    title: 'String'
    author: 'User'
    authorId: 'Int'
    viewCount: 'Int'
    comments: 'Comment'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Comment: {
    id: 'Int'
    contain: 'String'
    post: 'Post'
    postId: 'Int'
    author: 'User'
    authorId: 'Int'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Post: Typegen.NexusPrismaFields<'Post'>
  Comment: Typegen.NexusPrismaFields<'Comment'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  