import { IUsersRepository } from "@infra/database/contracts/IUsersRepository"

type IRequest = {
  page: number
  take: number
}

export class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  public async execute({ page, take }: IRequest) {
    const users = await this.usersRepository.listAll({
      offset: take * (page - 1),
      take
    })

    return users
  }
}