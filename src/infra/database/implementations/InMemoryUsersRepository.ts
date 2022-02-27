import { faker } from '@faker-js/faker'
import { User } from "domain/entities/user";
import { IUsersRepository } from "../contracts/IUsersRepository";

faker.setLocale('pt_BR')

function createFakeUser(genre: number): User {
  const name = faker.name.firstName(genre % 2 === 0 ? 0 : 1)
  const lastName = faker.name.lastName(genre % 2 === 0 ? 0 : 1)

  const parseName = (name: string) => name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()

  const emailName = `${parseName(name)}.${parseName(lastName)}`.replace(' ', '.')
  const email = `${emailName}@faker.io`

  const user = new User({
    name: `${name} ${lastName}`,
    email,
    password: 'blabla',
  })

  return user
}

export class InMemoryUsersRepository implements IUsersRepository {
  private users: Array<User> = []

  constructor() {
    // Array(120).fill(0).forEach((_, i) => {
    //   this.create(createFakeUser(i))
    // })
  }

  public async create(user: User): Promise<void> {
    this.users.push(user)
  }

  public async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email)
  }

  public async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id)
  }

  public async listAll(where: Record<string, number>): Promise<User[]> {
    const offset = where?.offset || 0
    const take = (where?.take + offset) || this.users.length

    return this.users.slice(offset, take)
  }

  public async updateUserById(id: string, user: User): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id)

    if (userIndex === -1) {
      return
    }

    this.users[userIndex] = user
  }
}