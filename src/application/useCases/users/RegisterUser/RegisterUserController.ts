import { HttpResponse, conflict, ok, fail } from "@core/infra/HttpResponse";
import { RegisterUserUseCase } from "./RegisterUserUseCase";

type IRequest = {
  name: string;
  email: string;
  password: string;
}

export class RegisterUserController {
  constructor(private registerUser: RegisterUserUseCase) { }

  public async handle({ name, email, password }: IRequest): Promise<HttpResponse> {
    try {
      const result = await this.registerUser.execute({
        name,
        email,
        password,
      })

      if (result instanceof Error) {
        return conflict(result)
      }

      return ok(result)
    } catch (error) {
      return fail(error)
    }
  }
}