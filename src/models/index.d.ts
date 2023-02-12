import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly Waitlist?: Waitlist | null;
  readonly avatar?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postWaitlistId?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly Waitlist: AsyncItem<Waitlist | undefined>;
  readonly avatar?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postWaitlistId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerWaitlist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Waitlist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly date_time?: string | null;
  readonly company?: string | null;
  readonly role?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWaitlist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Waitlist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly date_time?: string | null;
  readonly company?: string | null;
  readonly role?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Waitlist = LazyLoading extends LazyLoadingDisabled ? EagerWaitlist : LazyWaitlist

export declare const Waitlist: (new (init: ModelInit<Waitlist>) => Waitlist) & {
  copyOf(source: Waitlist, mutator: (draft: MutableModel<Waitlist>) => MutableModel<Waitlist> | void): Waitlist;
}

type EagerAPIDOCs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<APIDOCs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly context?: string | null;
  readonly prompt?: string | null;
  readonly SignUp?: Waitlist | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aPIDOCsSignUpId?: string | null;
}

type LazyAPIDOCs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<APIDOCs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly context?: string | null;
  readonly prompt?: string | null;
  readonly SignUp: AsyncItem<Waitlist | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aPIDOCsSignUpId?: string | null;
}

export declare type APIDOCs = LazyLoading extends LazyLoadingDisabled ? EagerAPIDOCs : LazyAPIDOCs

export declare const APIDOCs: (new (init: ModelInit<APIDOCs>) => APIDOCs) & {
  copyOf(source: APIDOCs, mutator: (draft: MutableModel<APIDOCs>) => MutableModel<APIDOCs> | void): APIDOCs;
}