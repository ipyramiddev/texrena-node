const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: String,
    email: String,
    jwt: String,
    appKey: String,
})

export default mongoose.model('User', userSchema);