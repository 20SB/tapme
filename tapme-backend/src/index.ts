import { createServer } from "@graphql-yoga/node";
import { schema } from "./schema";
import { resolvers } from "./resolvers";

const server = createServer({
    schema: {
        typeDefs: schema.getTypeDefs(),
        resolvers,
    },
});

server.start(() => {
    console.log("GraphQL server is running on http://localhost:4000");
});
