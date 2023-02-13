const mongoose = require('mongoose');

// Create a Schema to represent the data structure in the MongoDB collection
const Schema = mongoose.Schema;
const dashboardSchema = new Schema({
    // User ID is required and cannot be empty
    userID: {
        type: String,
        required: true
    },
    // Item ID is required and cannot be empty
    i: {
        type: String,
        required: true
    },
    // Maximum width must be greater than 10
    maxW: {
        type: Number,
        min: 10,
    },
    // Maximum height must be greater than 10
    maxH: {
        type: Number,
        min: 10,
    },
    // Defines if the item is hidden
    hidden: Boolean,
    // Minimum height
    minH: Number,
    // Minimum width
    minW: Number,
    // Current width
    w: Number,
    // Current height
    h: Number,
    // Current x position
    x: Number,
    // Current y position
    y: Number
})

// Create the model from the Schema
export default mongoose.model('DashboardLayout', dashboardSchema);