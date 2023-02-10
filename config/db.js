//Required Library
const mongoose = require('mongoose');


// DB Configuration
const db = require("../utils/index").mongoConn;


//Connect to Mongodb URI
export const connectDB = async () => {
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDb Connected Successfully!"))
  .catch(err => console.log(err));

}
