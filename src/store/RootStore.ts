import { FrontConfiguration } from "@cbs-ui/constants";
import { DefaultStore } from "@cbs-ui/store";

import { UserStore } from "./UserStore";

export class RootStore extends DefaultStore {
  userStore: UserStore;

  constructor(configuration?: FrontConfiguration, featureFlags?: string[]) {
    super(configuration, featureFlags);

    this.userStore = new UserStore(this);
  }
}
