import { Controller } from "@core/infra/Controller";
import { getUsersRepository } from '@infra/container'
import {
  UpdateUserByIdUseCase,
  UpdateUserByIdController,
} from '@application/useCases/users/UpdateUserById'


export const makeUpdateUserByIdController = (): Controller => {
  const usersRepository = getUsersRepository()
  const useCase = new UpdateUserByIdUseCase(usersRepository)
  const controller = new UpdateUserByIdController(useCase)

  return controller
}