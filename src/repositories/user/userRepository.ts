import { FilterQuery } from 'mongoose'

import User from '@/database/schema/user'
import IRepository from '@/interfaces/irepository'
import IUser from '@/interfaces/iuser'

class UserRepository implements IRepository<IUser> {
  async create(item: IUser): Promise<IUser> {
    const user = new User(item)

    return await user.save()
  }
  delete(query: Partial<IUser>): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  async find(query: FilterQuery<IUser>): Promise<IUser[]> {
    const users = await User.find(query)

    return users
  }

  findOne(query: Partial<IUser>): Promise<IUser | null> {
    throw new Error('Method not implemented.')
  }

  update(query: Partial<IUser>, item: IUser): Promise<IUser | null> {
    throw new Error('Method not implemented.')
  }
}

export default new UserRepository()
