const mongoose = require("mongoose");
//const config = require('config');
require("dotenv").config();
////mongoURI="mongodb+srv://larbi26:yTpyUiVqGi2vRj98@cluster0.ppobd.mongodb.net/pharmacy?retryWrites=true&w=majority&appName=Cluster0"
// const db = "mongodb://localhost:27017/larbi";
const db =
  "mongodb+srv://youcefmantas3:TYWu6NCr8Fl41Do2@pharmacy.dyji6k1.mongodb.net/?retryWrites=true&w=majority&appName=Pharmacy";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000, // Increase timeout to 30 seconds
    });
    // mongoose.set("strictQuery", true);

    //console.log("Mongo URI:", db);

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
