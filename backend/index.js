const express =require('express')
const mongoose=require('mongoose')
const cors = require("cors")
require("dotenv").config();
var bodyParser =require('body-parser');
const app = express();
const cookieSession = require("cookie-session");
const postsRoutes =require('./routes/posts')
require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth")
const session = require('express-session')

// app.use(
//   cookieSession({  
//   maxAge: 24 * 60 * 60 * 100,
//   keys: ["lama"], })
// );
app.use(session({
  secret: 'somethingsecretgoeshere',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: '5mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//setup routes
app.use('/auth',authRoute)
app.use('/posts',authRoute,postsRoutes)
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