export class UserNotExists extends Error {
  constructor() {
    super('This user not exists.')
    this.name = 'UserNotExists'
  }
}