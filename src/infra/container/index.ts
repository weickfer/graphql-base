import { IUsersRepository } from "../database/contracts/IUsersRepository";
import { InMemoryUsersRepository } from "../database/implementations/InMemoryUsersRepository";

const inMemoryUsersRepository = new InMemoryUsersRepository()

export function getUsersRepository(): IUsersRepository {
  return inMemoryUsersRepository
}
