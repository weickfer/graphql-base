import { UserNotExists } from "@application/errors/UserNotExists"
import { IUsersRepository } from "@infra/database/contracts/IUsersRepository"

type IRequest = {
  id: string
}

export class FindUserByIdUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  public async execute(data: IRequest) {
    const user = await this.usersRepository.findById(data.id)

    if (!user) {
      return new UserNotExists()
    }

    return user
  }
}