const { ApolloServer, gql } = require('apollo-server-micro')
// const { buildFederatedSchema } = require('@apollo/federation')

const todos = [
  { _id: '1', body: 'Come up with an idea for a thing', completed: false },
  { _id: '2', body: 'Find a team capable of buildint thing', completed: false },
  { _id: '3', body: 'Build that thing', completed: false },
  { _id: '4', body: 'Make that thing better', completed: false },
  { _id: '5', body: 'Profit!', completed: false },
]

const typeDefs = gql`
  type Todo {
    _id: ID!
    body: String
  }

  type Query {
    all: [Todo!]!
    incomplete: [Todo!]!
  }
`

const resolvers = {
  Query: {
    all() {
      return todos
    },
    incomplete() {
      return todos.filter(todo => !todo.completed)
    },
  },
  Todo: {
    __resolveReference(object) {
      return todos.find(todo => todo.id === object.id)
    },
  },
}

const server = new ApolloServer({
  introspection: true,
  playground: true,
  resolvers,
  typeDefs,
  /**
  schema: buildFederatedSchema([
    {
      resolvers,
      typeDefs,
    },
  ]),
  */
})

module.exports = server.createHandler({ path: '/' })
