import { Admin, User} from "../payload-types";

export type TokenType = {
  token: string;
};

export type Doc<CollectionType> = {
  doc: CollectionType;
};

export type Docs<CollectionType> = {
  docs: CollectionType[];
};

export type DocWithToken<AuthCollectionType> = {
  doc: AuthCollectionType & TokenType;
};

export type DocsWithToken<AuthCollectionType> = {
  docs: Array<AuthCollectionType & TokenType>;
};

export type UserOnRequest<AuthCollectionType> = {
  user: AuthCollectionType;
} & TokenType;

export type AppAuthSlugs = "users";

export type AuthCollections = Admin | User;

export type AuthCollectionSlugs = AppAuthSlugs | "admins";
