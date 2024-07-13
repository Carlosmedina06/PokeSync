import mongoose from 'mongoose'
const { Schema } = mongoose

const PokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
    default: 1,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

PokemonSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Pokemon = mongoose.model('Pokemon', PokemonSchema)

export default Pokemon
