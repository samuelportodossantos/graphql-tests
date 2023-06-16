import { ApolloServer } from "apollo-server";
import typeDefs from "./source/schema";
import resolvers from "./source/resolver";



const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen().then(({url}) => {
    console.log(`Servidor pronto em ${url}`);
})