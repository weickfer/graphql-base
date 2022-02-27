import { User } from "domain/entities/user";
import { IUsersRepository } from "../contracts/IUsersRepository";

export class InMemoryUsersRepository implements IUsersRepository {
  private users: Array<User> = []

  public async create(user: User): Promise<void> {
    this.users.push(user)
  }

  public async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email)
  }

  public async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id)
  }
}