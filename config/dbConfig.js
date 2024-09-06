const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Bijay-Maharjan:admin123@cluster0.onqc4cv.mongodb.net/Doctor-Appointment?retryWrites=true&w=majority");
// mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;
