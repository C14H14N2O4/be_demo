// @desc Get Inventory Item
// @route GET /

// const asyncHandler = require('express-async-handler')

// const getInventory = asyncHandler(async (req, res) => {
//     res.send({express: "Connected"});
// });
const Inventory = require('../models/inventoryModel')

const getInventory = (req, res) => {
    const inventories = Inventory.find()
    res.send(inventories);
};

// @desc Create new Inventory Item
// @route GET /

// const postInventory = asyncHandler(async (req, res) => {
//     res.send({express: 'Got a POST request'});
// })

const postInventory = (req, res) => {
    res.send({express: 'Got a POST request'});
}

// @desc Update Inventory Item
// @route GET /

// const putInventory = asyncHandler(async (req, res) => {
//     res.send(`Got a PUT request to update ${req.params.id}`);
// })

const putInventory = (req, res) => {
    res.send(`Got a PUT request to update ${req.params.id}`);
}

// @desc Delete Inventory Item
// @route GET /

// const deleteInventory = asyncHandler(async (req, res) => {
//     res.send(`Got a DELETE request to remove ${req.params.id}`);
// })

const deleteInventory = (req, res) => {
    res.send(`Got a DELETE request to remove ${req.params.id}`);
}

module.exports = {
    getInventory, postInventory, putInventory, deleteInventory
}