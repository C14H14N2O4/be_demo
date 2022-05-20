const express = require('express')
const router = express.Router()
const { getInventory, postInventory, putInventory, deleteInventory } = require('../controllers/inventoryController');

router.route('/').get(getInventory).post(postInventory)
router.route('/:id').put(putInventory).delete(deleteInventory)

module.exports = router