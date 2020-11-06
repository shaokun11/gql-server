import * as Koa from "koa";
import { ApolloServer } from "apollo-server-koa";
import resolvers from "./resolvers";
import typeDefs from "./schema";
import models from "./models";
const app = new Koa();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
    me: models.users[1],
  },
});
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
