import crypto from 'crypto'
import { compare } from 'bcryptjs'
import { IUsersRepository } from "@infra/database/contracts/IUsersRepository";
import { InvalidEmailOrPassword } from './errors/InvalidEmailOrPassword';

type IRequest = {
  email: string
  password: string
}

export class AuthenticateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  public async execute({ email, password }: IRequest) {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      return new InvalidEmailOrPassword()
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      return new InvalidEmailOrPassword()
    }

    delete user.password

    return {
      token: crypto.randomBytes(8).toString('base64'),
      user,
    }
  }
}