import { adaptResolver } from "../../adapters/ApolloResolverAdapter";
import { makeAuthenticateUserController } from "../../factories/controllers/AuthenticateUserControllerFactory";
import { makeFindUserByIdController } from '../../factories/controllers/FindUserByIdControllerFactory';
import { makeListAllUsersUseCase } from '../../factories/controllers/ListAllUsersControllerFactory';
import { makeRegisterUserController } from '../../factories/controllers/RegisterUserControllerFactory'

const authenticateUserController = makeAuthenticateUserController()
const findUserByIdController = makeFindUserByIdController()
const registerUserController = makeRegisterUserController()
const listAllUsersController = makeListAllUsersUseCase()

export const UserResolver = {
  Query: {
    authenticateUser: (_, args: any) => adaptResolver(authenticateUserController, args),
    findUserById: (_, args: any) => adaptResolver(findUserByIdController, args),
    listAllUsers: (_, args: any) => adaptResolver(listAllUsersController, args)
  },
  Mutation: {
    registerUser: async (_, args: any) => {
      await adaptResolver(registerUserController, args)

      return adaptResolver(authenticateUserController, args)
    }
  },
}