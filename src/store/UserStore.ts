import { GraphQLError } from "graphql";
import { gql } from "graphql-tag";
import { action, makeObservable, observable, runInAction } from "mobx";

import { Store } from "@cbs-ui/store";

import { RootStore } from "./RootStore";
import { ExampleQuery, ExampleQueryVariables } from "./__generated__/UserStore.graphql";

export class UserStore extends Store {
  user: ExampleQuery["user"] | null = null;
  loading = false;
  errors?: GraphQLError[];

  constructor(rootStore: RootStore) {
    super(rootStore);
    makeObservable(this, { user: observable, loading: observable, errors: observable, fetchUser: action });
  }

  fetchUser = async (userId: string): Promise<void> => {
    this.errors = [];
    const { gqlFetch } = this.rootStore.apiStore;

    this.loading = true;
    const { data, errors } = await gqlFetch<ExampleQuery, ExampleQueryVariables>({
      query: QUERY,
      variables: { userId },
    });

    runInAction(() => {
      this.loading = false;
      this.user = data?.user;
      this.errors = errors;
    });
  };
}

const QUERY = gql`
  query Example($userId: UserId!) {
    user(userId: $userId) {
      ... on User {
        login
        firstName
        lastName
      }
    }
  }
`;
