import { fail, HttpResponse, ok } from "@core/infra/HttpResponse";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

export class ListAllUsersController {
  constructor(private listAllUsers: ListAllUsersUseCase) { }

  public async handle(): Promise<HttpResponse> {
    try {
      const result = await this.listAllUsers.execute()

      return ok(result)
    } catch (error) {
      return fail(error)
    }
  }
}