import { Controller } from '../../../../core/infra/Controller'
import { getUsersRepository } from '../../../container'
import {
  RegisterUserUseCase,
  RegisterUserController,
} from '../../../../application/useCases/RegisterUser'

export const makeRegisterUserController = (): Controller => {
  const usersRepository = getUsersRepository()
  const useCase = new RegisterUserUseCase(usersRepository)
  const controller = new RegisterUserController(useCase)

  return controller
}