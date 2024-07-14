import mongoose, { Schema } from 'mongoose'

import IUser from '@/interfaces/iuser'

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
