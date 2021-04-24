const {Schema, model} = require('mongoose')

const personSchema = new Schema({
    name: String,
    tfno: String
})

personSchema.set('toJson', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Person = model('Person', personSchema)

module.exports = Person