import { hasStatusCodeErrorInstance } from '@core/infra/StatusCodeError'

type ApolloServerPlugin = import('apollo-server-express').Config['plugins'][number]

export const StatusCodeHandlerPlugin: ApolloServerPlugin = {
  requestDidStart: async () => ({
    willSendResponse: async ({ response, errors }) => {
      errors?.forEach(error => {
        response.data = undefined

        if (hasStatusCodeErrorInstance(error.originalError)) {
          const { statusCode } = error.originalError

          response.http.status = statusCode
        } else {
          response.http.status = 500
        }
      })
    }
  })
}