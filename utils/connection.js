
require("dotenv").config();


/**
* @desc   Function that returns a db connection string
* @param     -
* @return           db connection string
*/

const mongoConnection = () => {
    return mongoURI = process.env.DB_URL

}

module.exports = {
    mongoConnection
}
