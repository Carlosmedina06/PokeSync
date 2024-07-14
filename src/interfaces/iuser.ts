import { Document, Schema } from 'mongoose'

interface IUser extends Document {
  username: string
  email: string
  password: string
  allPokemons?: Schema.Types.ObjectId[]
  currentPokemons?: Schema.Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
}

export default IUser
