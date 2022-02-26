export class EmailAlreadyExistsError extends Error {
  constructor() {
    super('Already exists user with this email.')
    this.name = 'EmailAlreadyExists'
  }
}