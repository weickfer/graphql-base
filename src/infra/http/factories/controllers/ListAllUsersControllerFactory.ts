import { Controller } from "@core/infra/Controller";
import { getUsersRepository } from '@infra/container'
import {
  ListAllUsersUseCase,
  ListAllUsersController,
} from '@application/useCases/users/ListAllUsers'


export const makeListAllUsersUseCase = (): Controller => {
  const usersRepository = getUsersRepository()
  const useCase = new ListAllUsersUseCase(usersRepository)
  const controller = new ListAllUsersController(useCase)

  return controller
}