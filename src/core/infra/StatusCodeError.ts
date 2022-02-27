export function hasStatusCodeErrorInstance(error: Error): error is StatusCodeError {
  if (Object.keys(error).includes('statusCode')) {
    return true
  }

  return false
}

export abstract class StatusCodeError extends Error {
  public readonly statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}

export class ClientError extends StatusCodeError {
  constructor(message: string) {
    super(message, 400)
    this.name = 'ClientError'
  }
}

export class ConflictError extends StatusCodeError {
  constructor(message: string) {
    super(message, 409)
    this.name = 'ConflictError'
  }
}

export class ForbiddenError extends StatusCodeError {
  constructor(message: string) {
    super(message, 403)
    this.name = 'ForbiddenError'
  }
}

export class NotFoundError extends StatusCodeError {
  constructor(message: string) {
    super(message, 404)
    this.name = 'NotFoundError'
  }
}

export class TooManyError extends StatusCodeError {
  constructor(message: string) {
    super(message, 429)
    this.name = 'TooManyError'
  }
}

export class UnauthorizedError extends StatusCodeError {
  constructor(message: string) {
    super(message, 500)
    this.name = 'UnauthorizedError'
  }
}

export class InternalServerError extends StatusCodeError {
  constructor(message: string) {
    super(message, 500)
    this.name = 'InternalServerError'
  }
}
