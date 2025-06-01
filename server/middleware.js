const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const passport = require("passport");
require("./config/passport");

const loadGlobalMiddlewares = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  app.use(helmet());
  app.use(fileUpload({ useTempFiles: true, tempFileDir: "./tmp" }));
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: "PizzaDelivery Created By ME | Ilyas Belfar!",
    })
  );
  app.use(cookieParser());
  app.use(
    //   TODO: Adjust CORS Policy
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(passport.initialize());
  return app;
}

module.exports = { loadGlobalMiddlewares }