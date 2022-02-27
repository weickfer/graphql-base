export class InvalidEmailOrPassword extends Error {
  constructor() {
    super('Invalid email/password combination.')
    this.name = 'InvalidEmailOrPassword'
  }
}