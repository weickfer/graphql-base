import { Controller } from "@core/infra/Controller";
import {
  ClientError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  TooManyError,
  UnauthorizedError,
  InternalServerError
} from "@core/infra/StatusCodeError";

export const adaptResolver = async (controller: Controller, args?: any, context?: any) => {
  const requestData = {
    ...(args || {}),
    ...(args.data || {})
  }

  const httpResponse = await controller.handle(requestData)

  switch (httpResponse.statusCode) {
    case 200:
    case 201:
      return httpResponse.body
    case 400:
      throw new ClientError(httpResponse.body.error)
    case 401:
      throw new UnauthorizedError(httpResponse.body.error)
    case 403:
      throw new ForbiddenError(httpResponse.body.error)
    case 404:
      throw new NotFoundError(httpResponse.body.error)
    case 409:
      throw new ConflictError(httpResponse.body.error)
    case 429:
      throw new TooManyError(httpResponse.body.error)
    default:
      throw new InternalServerError(httpResponse.body.error)
  }
}