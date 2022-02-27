import { fail, HttpResponse, ok, unauthorized } from '@core/infra/HttpResponse';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

type IRequest = {
  email: string
  password: string
}

export class AuthenticateUserController {
  constructor(private authenticateUser: AuthenticateUserUseCase) { }

  public async handle({ email, password }: IRequest): Promise<HttpResponse> {
    try {
      const result = await this.authenticateUser.execute({
        email,
        password
      })

      if (result instanceof Error) {
        return unauthorized(result)
      }

      return ok(result)
    } catch (error) {
      return fail(error)
    }
  }
}