import { UserNotExists } from "@application/errors/UserNotExists"
import { IUsersRepository } from "@infra/database/contracts/IUsersRepository"

type IRequest = {
  id: string
  name: string
  email: string
}

export class UpdateUserByIdUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  public async execute(data: IRequest) {
    const user = await this.usersRepository.findById(data.id)

    if (!user) {
      return new UserNotExists()
    }

    if (data.name) {
      user.name = data.name
    }

    if (data.email) {
      user.email = data.email
    }

    await this.usersRepository.updateUserById(data.id, user)

    return user
  }
}