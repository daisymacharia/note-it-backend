import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import jwt from "express-jwt";
import jwks from "jwks-rsa";
import routes from "./api/routes";
import mongoose from "mongoose";
import { isTokenValid } from "./validate";
import { graphqlHTTP } from "express-graphql";
import schema from "./api/schema";

const expressPlayground = require("graphql-playground-middleware-express")
  .default;

mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@ds014388.mlab.com:14388/note-taking-api`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const appPort = 3000;
const appOrigin = `http://localhost:${appPort}`;

const loggingMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    await isTokenValid(authorization);
  }
  next();
};

const app = express();

app.use(cors({ origin: appOrigin, credentials: true }));

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlHTTP((req) => ({
    schema,
    graphiql: true,
    context: { token: req.headers.authorization },
  }))
);

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.get("/authorized", function (req, res) {
  res.send("Secured Resource");
});

const port = 4300;

app.listen(port, () => {
  console.log(`Server is running on PORT  http://localhost:${port}`);
});
