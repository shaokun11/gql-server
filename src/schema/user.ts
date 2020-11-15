import {gql} from "apollo-server-koa";

const User = gql`
    extend type Query {
        users: [User!]
        user(id: ID!): User
        me: String!
    }

    type User {
        id: ID!
        username: String!
        messages: [Message!]
    }
`;
export default User;
