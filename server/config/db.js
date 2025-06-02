const mongoose = require("mongoose");

let dbConnected = false;

const connectDB = async () => {
  try {
    if (!dbConnected) {
      await mongoose.set("strictQuery", false);
      await mongoose.connect(process.env.MONGODB_URL_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'pizza_shop',
      });
      dbConnected = true;
    }
    console.log("MongoDB Connected!");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
