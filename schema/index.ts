import { gql } from "apollo-server-koa";
import message from "./message";
import user from "./user";
const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, user, message];
