import { fail, HttpResponse, notFound, ok } from "@core/infra/HttpResponse";
import { UpdateUserByIdUseCase } from "./UpdateUserByIdUseCase";

type IRequest = {
  userId: string
  data: {
    name: string
    email: string
  }
}

export class UpdateUserByIdController {
  constructor(private updateUserById: UpdateUserByIdUseCase) { }

  public async handle({ userId, data }: IRequest): Promise<HttpResponse> {
    try {
      const result = await this.updateUserById.execute({ id: userId, ...data })

      if (result instanceof Error) {
        return notFound(result)
      }

      return ok(result)
    } catch (error) {
      return fail(error)
    }
  }
}