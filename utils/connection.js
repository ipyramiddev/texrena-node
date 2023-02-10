
require("dotenv").config();

//Database Connection URI
module.exports = {

    mongoConnection: async () => {
        return mongoURI ="mongodb://${process.env.DB_PORT}/${process.env.DB_NAME}"

    }
}
