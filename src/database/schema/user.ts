import mongoose, { Document, Schema } from 'mongoose'

interface IUser extends Document {
  username: string
  email: string
  password: string
  allPokemons: Schema.Types.ObjectId[]
  currentPokemons: Schema.Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  allPokemons: [{ type: Schema.Types.ObjectId, ref: 'Pokemon' }],
  currentPokemons: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pokemon',
      validate: {
        validator: function (v: Schema.Types.ObjectId[]) {
          return v.length <= 6
        },
        message: 'Current Pokémon list can have a maximum of 6 Pokémon.',
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const User = mongoose.model<IUser>('User', UserSchema)

export default User
