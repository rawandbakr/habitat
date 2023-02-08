const express =require('express')
const mongoose=require('mongoose')
const cors = require("cors")
require("dotenv").config();
var bodyParser =require('body-parser');

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//connetc to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "connected to the database  & listenenig on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });