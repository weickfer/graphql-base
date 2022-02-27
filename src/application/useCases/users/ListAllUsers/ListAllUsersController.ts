import { fail, HttpResponse, ok } from "@core/infra/HttpResponse";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

type IRequest = {
  page: number
  take: number
}

export class ListAllUsersController {
  constructor(private listAllUsers: ListAllUsersUseCase) { }

  public async handle({ page, take }: IRequest): Promise<HttpResponse> {
    try {
      const result = await this.listAllUsers.execute({ page, take })

      return ok(result)
    } catch (error) {
      return fail(error)
    }
  }
}