const dotenv = require("dotenv");
const express = require("express");
const {initializePassport} = require("./config/passport");
const connectDB = require("./config/db");
const { loadRoutes } = require("./routes");
const { loadGlobalMiddlewares } = require("./middleware");


dotenv.config();

const PORT = process.env.PORT || 5000;

const runServer = async () => {
    await connectDB();
    const app = express();

    initializePassport();
    loadGlobalMiddlewares(app);
    loadRoutes(app);

    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
    });
}

runServer().catch((err) => {
    console.error("Error starting server:", err);
    process.exit(1);
});
