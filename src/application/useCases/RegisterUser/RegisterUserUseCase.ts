import { User } from "../../../domain/entities/user";
import { IUsersRepository } from "../../../infra/database/contracts/IUsersRepository";

import { EmailAlreadyExistsError } from "./errors/EmailAlreadyExists";

type IRequest = {
  name: string;
  email: string;
  password: string;
}

export class RegisterUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  public async execute(data: IRequest) {
    const userExists = await this.usersRepository.findByEmail(data.email)

    if (userExists) {
      return new EmailAlreadyExistsError()
    }

    const user = new User({
      name: data.name,
      email: data.email,
      password: data.password,
    })


    await this.usersRepository.create(user)

    return user
  }
}