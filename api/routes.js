import { resolvers } from './resolver'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'

const routes = (app) => {
  app.route('/')
    .get((req,res) => {
      res.json({
        message: "Notetaking API"
      })
    }),

  app.use('/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
  )
}

export default routes
