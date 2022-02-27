import { Controller } from '@core/infra/Controller'
import { getUsersRepository } from '@infra/container'
import {
  AuthenticateUserUseCase,
  AuthenticateUserController,
} from '@application/useCases/users/AuthenticateUser'

export const makeAuthenticateUserController = (): Controller => {
  const usersRepository = getUsersRepository()
  const useCase = new AuthenticateUserUseCase(usersRepository)
  const controller = new AuthenticateUserController(useCase)

  return controller
}