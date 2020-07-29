import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import { Mutation } from "./resolvers/mutation";
import { Query } from "./resolvers/query";

const loggingMiddleware = (req, res, next) => {
  const { token } = req.cookies;
  next();
};

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.json({
      message: "Notetaking API",
    });
  });
  // app.use(
  //   "/graphql",
  //   graphqlHTTP(async (req) => ({
  //     schema,
  //     rootValue: { Mutation, Query },
  //     graphiql: true,
  //     context: () => context(req),
  //   }))
  // );
};

export default routes;
