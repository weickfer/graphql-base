import { IUsersRepository } from "@infra/database/contracts/IUsersRepository"

export class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  public async execute() {
    const user = await this.usersRepository.listAll()

    return user
  }
}