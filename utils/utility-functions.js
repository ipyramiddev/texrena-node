
require("dotenv").config();

module.exports = {

    mongoConn: async () => {
        return mongoURI ="mongodb://${process.env.DB_PORT}/${process.env.DB_NAME}"

    }
}
