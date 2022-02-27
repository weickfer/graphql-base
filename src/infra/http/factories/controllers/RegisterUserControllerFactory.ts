import { Controller } from '@core/infra/Controller'
import { getUsersRepository } from '@infra/container'
import {
  RegisterUserUseCase,
  RegisterUserController,
} from '@application/useCases/users/RegisterUser'

export const makeRegisterUserController = (): Controller => {
  const usersRepository = getUsersRepository()
  const useCase = new RegisterUserUseCase(usersRepository)
  const controller = new RegisterUserController(useCase)

  return controller
}