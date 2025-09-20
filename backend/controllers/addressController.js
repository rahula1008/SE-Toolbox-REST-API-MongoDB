const Address = require('../models/addressModel')

const fetchAllAddresses = async (req, res) => {
    const addresses = await Address.find({})
    res.status(200).json(addresses)
}

const addAddress = async (req, res) => {
    const { title, description } = req.body

    if (!title || !description) {
        return res.status(400).json({ message: 'Please enter all fields'})
    }

    try {
        //Function provided by Mongoose to create a new Address document
        const address = await Address.create({
            title,
            description
        })
        
        //return the newly created Address in JSON Format
        res.status(201).json({
            _id: address._id,
            title: address.title,
            description: address.description,
        })

    } catch (error) {
        res.status(400).json({ message: 'Invalid address data' })
    }
}

const updateAddress = async (req, res) => {
    const { title, description } = req.body

    // validate request body
    if (!title || !description) {
        return res.status(400).json({ message: 'Please enter all fields.'})
    }

    try {
        const address = await Address.findById(req.params.id)

        //update the document
        address.title = title
        address.description = description

        //func provided by mongoose to save changes made to document
        await address.save() 

        res.status(200).json({
            _id: address.id,
            title: address.title,
            description: address.description,
        })
    } catch (error) {
        res.status(400).json({ message: 'Invalid address data.'})
    }
}

const deleteAddress = async (req, res) => {
    try {
        const address = await Address.findById(req.params.id)
        
        //function provided by mongoose to delete a document
        await address.deleteOne()

        res.status(200).json({ message: 'Address removed '})

    } catch (error) {
        res.status(404).json({ message: 'Address not found '})
    }
}
module.exports = {fetchAllAddresses, addAddress, updateAddress, deleteAddress}