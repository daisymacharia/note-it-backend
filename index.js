import express from 'express'
import mongoose from "mongoose"
import routes from './api/routes'

mongoose.Promise = global.Promise
mongoose
  .connect("mongodb://localhost/notetaking_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


const app = express()
const port = 4300
routes(app)

app.listen(port, () => {
  console.log(`Server is running on PORT  http://localhost:${port}`);
})
