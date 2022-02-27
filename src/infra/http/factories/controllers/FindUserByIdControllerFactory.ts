import { Controller } from "../../../../core/infra/Controller";
import { getUsersRepository } from '../../../container'
import {
  FindUserByIdUseCase,
  FindUserByIdController,
} from '../../../../application/useCases/FindUserById'


export const makeFindUserByIdController = (): Controller => {
  const usersRepository = getUsersRepository()
  const useCase = new FindUserByIdUseCase(usersRepository)
  const controller = new FindUserByIdController(useCase)

  return controller
}