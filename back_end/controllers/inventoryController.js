// @desc Get Inventory Item
// @route GET /

const getInventory = (req, res) => {
    res.send({express: "Connected"});
}

// @desc Create new Inventory Item
// @route GET /

const postInventory = (req, res) => {
    res.send({express: 'Got a POST request'});
}

// @desc Update Inventory Item
// @route GET /

const putInventory = (req, res) => {
    res.send(`Got a PUT request to update ${req.params.id}`);
}

// @desc Delete Inventory Item
// @route GET /

const deleteInventory = (req, res) => {
    res.send(`Got a DELETE request to remove ${req.params.id}`);
}

module.exports = {
    getInventory, postInventory, putInventory, deleteInventory
}