const mongoose = require('mongoose');

// DB Configuration
const db = require('../utils/connection').mongoConnection


/**
* @desc   Function that connect to the mongodb 
* @param     - db connection string
* @return         
*/

const connectDB = async () => {
    mongoose
        .connect(
            db,
            { useNewUrlParser: true }
        )
        .then(() => console.log("MongoDb Connected Successfully!"))
        .catch(err => console.log(err));

}

module.exports = {
    connectDB
}
