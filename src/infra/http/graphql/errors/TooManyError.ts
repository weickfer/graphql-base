import { ApolloError } from 'apollo-server-express'

export class TooManyError extends ApolloError {
  constructor(message: string) {
    super(message)

    Object.defineProperty(this, 'name', { value: 'TooManyError' })
  }
}