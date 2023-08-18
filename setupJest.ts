import schema from "./graphql/schema.json";
import { addGraphqlMocks } from "@cbs-ui/jest-utils";
import { IntrospectionQuery } from "graphql";

addGraphqlMocks((schema as unknown) as IntrospectionQuery, {});
