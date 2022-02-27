import { adaptResolver } from "../../adapters/ApolloResolverAdapter";
import { makeFindUserByIdController } from '../../factories/controllers/FindUserByIdControllerFactory';
import { makeRegisterUserController } from '../../factories/controllers/RegisterUserControllerFactory'

export const UserResolver = {
  Query: {
    findUserById: (_, args: any) => adaptResolver(makeFindUserByIdController(), args)
  },
  Mutation: {
    registerUser: (_, args: any) => adaptResolver(makeRegisterUserController(), args)
  },
}