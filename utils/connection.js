
require("dotenv").config();

//Database Connection URI
module.exports = {

    mongoConnection: async () => {
        return mongoURI = process.env.DB_URL

    }
}
