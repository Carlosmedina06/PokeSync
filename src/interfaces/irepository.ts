interface IRepository<T> {
  create(item: T): Promise<T>
  findOne(query: Partial<T>): Promise<T | null>
  find(query: Partial<T>): Promise<T[]>
  update(query: Partial<T>, item: T): Promise<T | null>
  delete(query: Partial<T>): Promise<boolean>
}

export default IRepository
