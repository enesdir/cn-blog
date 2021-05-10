export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count?: Maybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  postCount?: Maybe<Scalars['Int']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  slug?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']>;
  contain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<Post>;
  postId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  changePassword?: Maybe<User>;
  /** Login mutation: Send your email and password then get back a token */
  userLogin?: Maybe<AuthPayload>;
  /** Call this mutation to sign a new user up. It will return a auth payload */
  userSignup?: Maybe<AuthPayload>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationUserLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUserSignupArgs = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  surname?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Category>>>;
  commentCount?: Maybe<Scalars['Int']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  likeCount?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewCount?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Maybe<Category>>>;
  findOneCategory?: Maybe<Category>;
  findOnePost?: Maybe<Post>;
  findOneTag?: Maybe<Tag>;
  findOneUser?: Maybe<User>;
  /** The current authenticated User */
  me?: Maybe<User>;
  posts?: Maybe<Array<Maybe<Post>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryCategoriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindOneCategoryArgs = {
  where: Scalars['Int'];
};


export type QueryFindOnePostArgs = {
  postId: Scalars['Int'];
};


export type QueryFindOneTagArgs = {
  where: Scalars['Int'];
};


export type QueryFindOneUserArgs = {
  userId: Scalars['Int'];
};


export type QueryPostsArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryTagsArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

/** User Role */
export enum RoleEnum {
  Admin = 'ADMIN',
  SuperUser = 'SUPER_USER',
  User = 'USER'
}

export type Tag = {
  __typename?: 'Tag';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  postCount?: Maybe<Scalars['Int']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  slug?: Maybe<Scalars['String']>;
};


/** A user registered with the application */
export type User = {
  __typename?: 'User';
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<Array<Maybe<Post>>>;
  role?: Maybe<RoleEnum>;
  surname?: Maybe<Scalars['String']>;
};

export type UserLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserLoginMutation = (
  { __typename?: 'Mutation' }
  & { userLogin?: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token' | 'error'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  )> }
);

export type UserSignupMutationVariables = Exact<{
  name: Scalars['String'];
  surname?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserSignupMutation = (
  { __typename?: 'Mutation' }
  & { userSignup?: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token' | 'error'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  )> }
);

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'slug'>
  )>>> }
);

export type FindOnePostQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type FindOnePostQuery = (
  { __typename?: 'Query' }
  & { findOnePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'published' | 'viewCount' | 'likeCount' | 'createdAt' | 'updatedAt'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'fullName'>
    )>, categories?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'slug' | 'name'>
    )>>>, tags?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'slug' | 'name'>
    )>>>, comments?: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'contain' | 'createdAt'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'fullName'>
      )> }
    )>>> }
  )> }
);

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'published' | 'viewCount' | 'likeCount' | 'createdAt'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'fullName'>
    )>, categories?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'slug' | 'name'>
    )>>>, tags?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'slug' | 'name'>
    )>>> }
  )>>> }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'surname' | 'email' | 'role'>
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'surname'>
  )>>> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);
