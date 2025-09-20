const express = require('express')
const router = express.Router()

const { fetchAllAddresses, addAddress, updateAddress, deleteAddress } = require('../controllers/addressController')

router.route('/').get(fetchAllAddresses)
router.route('/').post(addAddress)
router.route('/:id').put(updateAddress)
router.route('/:id').delete(deleteAddress)

module.exports = router
