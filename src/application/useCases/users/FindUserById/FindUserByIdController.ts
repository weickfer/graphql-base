import { fail, HttpResponse, notFound, ok } from "@core/infra/HttpResponse";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

type IRequest = {
  userId: string
}

export class FindUserByIdController {
  constructor(private findUserById: FindUserByIdUseCase) { }

  public async handle({ userId }: IRequest): Promise<HttpResponse> {
    try {
      const result = await this.findUserById.execute({ id: userId })

      if (result instanceof Error) {
        return notFound(result)
      }

      return ok(result)
    } catch (error) {
      return fail(error)
    }
  }
}