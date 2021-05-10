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

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
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

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  postCount?: Maybe<Scalars['Int']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  slug?: Maybe<Scalars['String']>;
};


export type CategoryPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};

export type CategoryCreateInput = {
  name: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutCategoriesInput>;
  slug: Scalars['String'];
};

export type CategoryCreateNestedManyWithoutPostsInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutPostsInput>>;
  create?: Maybe<Array<CategoryCreateWithoutPostsInput>>;
};

export type CategoryCreateOrConnectWithoutPostsInput = {
  create: CategoryCreateWithoutPostsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutPostsInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CategoryListRelationFilter = {
  every?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
};

export type CategoryOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
};

export type CategoryScalarWhereInput = {
  AND?: Maybe<Array<CategoryScalarWhereInput>>;
  NOT?: Maybe<Array<CategoryScalarWhereInput>>;
  OR?: Maybe<Array<CategoryScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
};

export type CategoryUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutCategoriesInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutPostsInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutPostsInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutPostsInput>>;
  create?: Maybe<Array<CategoryCreateWithoutPostsInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutPostsInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereWithoutPostsInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutPostsInput>>;
};

export type CategoryUpdateWithWhereUniqueWithoutPostsInput = {
  data: CategoryUpdateWithoutPostsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutPostsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutPostsInput = {
  create: CategoryCreateWithoutPostsInput;
  update: CategoryUpdateWithoutPostsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
  slug?: Maybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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

export type CommentCreateInput = {
  author?: Maybe<UserCreateNestedOneWithoutCommentsInput>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateNestedOneWithoutCommentsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateManyAuthorInput = {
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateManyAuthorInputEnvelope = {
  data?: Maybe<Array<CommentCreateManyAuthorInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateManyPostInput = {
  authorId?: Maybe<Scalars['Int']>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateManyPostInputEnvelope = {
  data?: Maybe<Array<CommentCreateManyPostInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
  createMany?: Maybe<CommentCreateManyAuthorInputEnvelope>;
};

export type CommentCreateNestedManyWithoutPostInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  createMany?: Maybe<CommentCreateManyPostInputEnvelope>;
};

export type CommentCreateOrConnectWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutAuthorInput = {
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateNestedOneWithoutCommentsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutPostInput = {
  author?: Maybe<UserCreateNestedOneWithoutCommentsInput>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
};

export type CommentOrderByInput = {
  authorId?: Maybe<SortOrder>;
  contain?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  authorId?: Maybe<IntNullableFilter>;
  contain?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentUpdateInput = {
  author?: Maybe<UserUpdateOneWithoutCommentsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyMutationInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutAuthorInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
  createMany?: Maybe<CommentCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type CommentUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  createMany?: Maybe<CommentCreateManyPostInputEnvelope>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
  data: CommentUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  data: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutAuthorInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutPostInput = {
  author?: Maybe<UserUpdateOneWithoutCommentsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  update: CommentUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  update: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntNullableFilter>;
  contain?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword?: Maybe<User>;
  createOneCategory?: Maybe<Category>;
  createOneComment?: Maybe<Comment>;
  createOnePost?: Maybe<Post>;
  createOneTag?: Maybe<Tag>;
  createOneUser?: Maybe<User>;
  deleteManyCategory?: Maybe<BatchPayload>;
  deleteManyComment?: Maybe<BatchPayload>;
  deleteManyPost?: Maybe<BatchPayload>;
  deleteManyTag?: Maybe<BatchPayload>;
  deleteManyUser?: Maybe<BatchPayload>;
  deleteOneCategory?: Maybe<Category>;
  deleteOneComment?: Maybe<Comment>;
  deleteOnePost?: Maybe<Post>;
  deleteOneTag?: Maybe<Tag>;
  deleteOneUser?: Maybe<User>;
  updateManyCategory?: Maybe<BatchPayload>;
  updateManyComment?: Maybe<BatchPayload>;
  updateManyPost?: Maybe<BatchPayload>;
  updateManyTag?: Maybe<BatchPayload>;
  updateManyUser?: Maybe<BatchPayload>;
  updateOneCategory?: Maybe<Category>;
  updateOneComment?: Maybe<Comment>;
  updateOnePost?: Maybe<Post>;
  updateOneTag?: Maybe<Tag>;
  updateOneUser?: Maybe<User>;
  upsertOneCategory?: Maybe<Category>;
  upsertOneComment?: Maybe<Comment>;
  upsertOnePost?: Maybe<Post>;
  upsertOneTag?: Maybe<Tag>;
  upsertOneUser?: Maybe<User>;
  /** Login mutation: Send your email and password then get back a token */
  userLogin?: Maybe<AuthPayload>;
  /** Call this mutation to sign a new user up. It will return a auth payload */
  userSignup?: Maybe<AuthPayload>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateOneTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
};


export type MutationDeleteManyCommentArgs = {
  where: CommentWhereInput;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationDeleteManyTagArgs = {
  where: TagWhereInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteOneTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: Maybe<CategoryWhereInput>;
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: Maybe<CommentWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyTagArgs = {
  data: TagUpdateManyMutationInput;
  where?: Maybe<TagWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateOneTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertOneCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertOneTagArgs = {
  create: TagCreateInput;
  update: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
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

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
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


export type PostCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>;
};


export type PostCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type PostTagsArgs = {
  where?: Maybe<TagWhereInput>;
};

export type PostCreateInput = {
  author?: Maybe<UserCreateNestedOneWithoutPostsInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likeCount?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<TagCreateNestedManyWithoutPostsInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewCount?: Maybe<Scalars['Int']>;
};

export type PostCreateManyAuthorInput = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  likeCount?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewCount?: Maybe<Scalars['Int']>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data?: Maybe<Array<PostCreateManyAuthorInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateNestedManyWithoutCategoriesInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutCategoriesInput>>;
  create?: Maybe<Array<PostCreateWithoutCategoriesInput>>;
};

export type PostCreateNestedManyWithoutTagsInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutTagsInput>>;
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
};

export type PostCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<PostCreateWithoutCommentsInput>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutCategoriesInput = {
  create: PostCreateWithoutCategoriesInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutCommentsInput = {
  create: PostCreateWithoutCommentsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutTagsInput = {
  create: PostCreateWithoutTagsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  categories?: Maybe<CategoryCreateNestedManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likeCount?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<TagCreateNestedManyWithoutPostsInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewCount?: Maybe<Scalars['Int']>;
};

export type PostCreateWithoutCategoriesInput = {
  author?: Maybe<UserCreateNestedOneWithoutPostsInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likeCount?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<TagCreateNestedManyWithoutPostsInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewCount?: Maybe<Scalars['Int']>;
};

export type PostCreateWithoutCommentsInput = {
  author?: Maybe<UserCreateNestedOneWithoutPostsInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutPostsInput>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likeCount?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<TagCreateNestedManyWithoutPostsInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewCount?: Maybe<Scalars['Int']>;
};

export type PostCreateWithoutTagsInput = {
  author?: Maybe<UserCreateNestedOneWithoutPostsInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likeCount?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewCount?: Maybe<Scalars['Int']>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
};

export type PostOrderByInput = {
  authorId?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  likeCount?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  viewCount?: Maybe<SortOrder>;
};

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  authorId?: Maybe<IntNullableFilter>;
  content?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  likeCount?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  viewCount?: Maybe<IntFilter>;
};

export type PostUpdateInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  likeCount?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  viewCount?: Maybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateManyMutationInput = {
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  likeCount?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  viewCount?: Maybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutCategoriesInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutTagsInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutCategoriesInput>>;
  create?: Maybe<Array<PostCreateWithoutCategoriesInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type PostUpdateManyWithoutTagsInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutTagsInput>>;
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutTagsInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<PostCreateWithoutCommentsInput>;
  update?: Maybe<PostUpdateWithoutCommentsInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: PostUpdateWithoutCategoriesInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutTagsInput = {
  data: PostUpdateWithoutTagsInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAuthorInput = {
  categories?: Maybe<CategoryUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  likeCount?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  viewCount?: Maybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCategoriesInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  likeCount?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  viewCount?: Maybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCommentsInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutPostsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  likeCount?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  viewCount?: Maybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutTagsInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  likeCount?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  viewCount?: Maybe<IntFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: PostCreateWithoutCategoriesInput;
  update: PostUpdateWithoutCategoriesInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutTagsInput = {
  create: PostCreateWithoutTagsInput;
  update: PostUpdateWithoutTagsInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutCommentsInput = {
  create: PostCreateWithoutCommentsInput;
  update: PostUpdateWithoutCommentsInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntNullableFilter>;
  categories?: Maybe<CategoryListRelationFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  content?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  likeCount?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
  tags?: Maybe<TagListRelationFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  viewCount?: Maybe<IntFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  comments: Array<Comment>;
  findManyCategory?: Maybe<Array<Maybe<Category>>>;
  findManyComment?: Maybe<Array<Maybe<Comment>>>;
  findManyCommentCount?: Maybe<Scalars['Int']>;
  findManyPost?: Maybe<Array<Maybe<Post>>>;
  findManyPostCount?: Maybe<Scalars['Int']>;
  findManyTag?: Maybe<Array<Maybe<Tag>>>;
  findManyUser?: Maybe<Array<Maybe<User>>>;
  findManyUserCount?: Maybe<Scalars['Int']>;
  findOneCategory?: Maybe<Category>;
  findOneComment?: Maybe<Comment>;
  findOnePost?: Maybe<Post>;
  findOneTag?: Maybe<Tag>;
  findOneUser?: Maybe<User>;
  /** The current authenticated User */
  me?: Maybe<User>;
  posts: Array<Post>;
  tags: Array<Tag>;
  users: Array<User>;
};


export type QueryCategoriesArgs = {
  after?: Maybe<CategoryWhereUniqueInput>;
  before?: Maybe<CategoryWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryCommentsArgs = {
  after?: Maybe<CommentWhereUniqueInput>;
  before?: Maybe<CommentWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyCategoryArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryFindManyCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyCommentCountArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyPostArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryFindManyPostCountArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryFindManyTagArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFindOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryFindOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFindOneTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryFindOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryPostsArgs = {
  after?: Maybe<PostWhereUniqueInput>;
  before?: Maybe<PostWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  where?: Maybe<PostWhereInput>;
};


export type QueryTagsArgs = {
  after?: Maybe<TagWhereUniqueInput>;
  before?: Maybe<TagWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  where?: Maybe<TagWhereInput>;
};


export type QueryUsersArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  where?: Maybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Admin = 'ADMIN',
  SuperUser = 'SUPER_USER',
  User = 'USER'
}

/** User Role */
export enum RoleEnum {
  Admin = 'ADMIN',
  SuperUser = 'SUPER_USER',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  postCount?: Maybe<Scalars['Int']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  slug?: Maybe<Scalars['String']>;
};


export type TagPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};

export type TagCreateInput = {
  name: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutTagsInput>;
  slug: Scalars['String'];
};

export type TagCreateNestedManyWithoutPostsInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutPostsInput>>;
  create?: Maybe<Array<TagCreateWithoutPostsInput>>;
};

export type TagCreateOrConnectWithoutPostsInput = {
  create: TagCreateWithoutPostsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutPostsInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type TagListRelationFilter = {
  every?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
};

export type TagOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
};

export type TagScalarWhereInput = {
  AND?: Maybe<Array<TagScalarWhereInput>>;
  NOT?: Maybe<Array<TagScalarWhereInput>>;
  OR?: Maybe<Array<TagScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
};

export type TagUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutTagsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutPostsInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutPostsInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutPostsInput>>;
  create?: Maybe<Array<TagCreateWithoutPostsInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutPostsInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereWithoutPostsInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutPostsInput>>;
};

export type TagUpdateWithWhereUniqueWithoutPostsInput = {
  data: TagUpdateWithoutPostsInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutPostsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutPostsInput = {
  create: TagCreateWithoutPostsInput;
  update: TagUpdateWithoutPostsInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: Maybe<Array<TagWhereInput>>;
  NOT?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
  slug?: Maybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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


/** A user registered with the application */
export type UserCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


/** A user registered with the application */
export type UserPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};

export type UserCreateInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  password: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  role?: Maybe<Role>;
  surname: Scalars['String'];
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  create?: Maybe<UserCreateWithoutPostsInput>;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  password: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  role?: Maybe<Role>;
  surname: Scalars['String'];
};

export type UserCreateWithoutPostsInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<Role>;
  surname: Scalars['String'];
};

export type UserOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isDeleted?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  surname?: Maybe<SortOrder>;
};

export type UserUpdateInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  isDeleted?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  surname?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  isDeleted?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  surname?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<UserCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutCommentsInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  create?: Maybe<UserCreateWithoutPostsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateWithoutCommentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  isDeleted?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  surname?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPostsInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  isDeleted?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  surname?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  isDeleted?: Maybe<BoolFilter>;
  name?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
  role?: Maybe<EnumRoleFilter>;
  surname?: Maybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
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
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'slug'>
  )> }
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
  & { posts: Array<(
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
  )> }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'surname' | 'email' | 'role'>
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'surname'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);
