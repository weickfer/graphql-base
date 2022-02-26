import { conflict, ok } from "../../../core/infra/HttpResponse";
import { RegisterUserUseCase } from "./RegisterUserUseCase";

type IRequest = {
  name: string;
  email: string;
  password: string;
}

export class RegisterUserController {
  constructor(private registerUser: RegisterUserUseCase) { }

  public async handle({ name, email, password }: IRequest) {
    const result = await this.registerUser.execute({
      name,
      email,
      password,
    })

    if (result instanceof Error) {
      switch (result.name) {
        case "EmailAlreadyExists":
          return conflict(result)
      }
    }

    return ok(result)
  }
}