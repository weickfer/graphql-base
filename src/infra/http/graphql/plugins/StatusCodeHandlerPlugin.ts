import { Config } from 'apollo-server-express'

export const StatusCodeHandlerPlugin: Config['plugins'][0] = {
  requestDidStart: async () => ({
    willSendResponse: async ({ response, errors }) => {
      errors?.forEach(error => {
        response.data = undefined

        const errorName = error.originalError?.name || error.name
        const statusCodes = {
          ClientError: 400,
          UnauthorizedError: 401,
          ForbiddenError: 403,
          NotFoundError: 404,
          ConflictError: 409,
          TooManyError: 429,
          InternalServerError: 500,
        }

        response.http.status = statusCodes[errorName || 'InternalServerError']
      })
    }
  })
}