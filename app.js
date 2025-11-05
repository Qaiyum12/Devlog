if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const MongoStore = require('connect-mongo');
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./model/user.js");

const blogsRouter = require("./routes/blog.js");
const userRouter = require("./routes/user.js");

const DB_Url = process.env.MongoDB_URL;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB_Url);
}

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const store = MongoStore.create({
  mongoUrl: DB_Url,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("error in MONGO SESSION STORE", err);
});

const sessionConfig = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the devLog!");
});



app.use(session(sessionConfig));
app.use(flash());

passport.initialize();
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

app.use("/blogs", blogsRouter);
app.use("/", userRouter);

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Oh No, Something Went Wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

app.listen(PORT, () => {
  console.log(`Server is listing on ${PORT}`);
});
