const { ApolloServer, gql } = require('apollo-server');
const userSchema = require('../src/api/user/schema/user.graphql')

const users = [
    {
        nome: "Ricardo",
        ativo: true
    },
    {
        nome: "Marcia",
        ativo: false
    }
]

const typeDefs = [userSchema]
const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({url}) => console.log(` Server is sex on fire ${url}`));