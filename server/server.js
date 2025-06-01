const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const passport = require("passport");
require("./config/passport");
const connectDB = require("./config/db");

const dotenv = require("dotenv");
const { loadRoutes } = require("./routes");
const { loadGlobalMiddlewares } = require("./middleware");

dotenv.config();

const PORT = process.env.PORT || 5000;

const runServer = async () => {
    await connectDB();
    const app = express();
    loadGlobalMiddlewares(app);
    loadRoutes(app);

    app.listen(PORT, () => {
        console.log("Server is running!");
    });
}

runServer().catch((err) => {
    console.error("Error starting server:", err);
    process.exit(1);
});
