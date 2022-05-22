const mongoose = require('mongoose')
const inventorySchema = mongoose.Schema({
    text: String,
})


module.exports = mongoose.model('inventory', inventorySchema);