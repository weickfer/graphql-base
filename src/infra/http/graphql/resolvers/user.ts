import { makeRegisterUserController } from '../../factories/controllers/RegisterUserControllerFactory'
import { adaptResolver } from "../../adapters/ApolloResolverAdapter";

export const UserResolver = {
  Mutation: {
    registerUser: (_, args: any) => adaptResolver(makeRegisterUserController(), args)
  }
}