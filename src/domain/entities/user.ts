import { BaseEntity } from "../../core/domain/BaseEntity";

type UserProps = {
  id?: string
  created_at?: Date

  name: string
  email: string
  password: string
}

export class User extends BaseEntity {
  public name: string
  public email: string
  public password: string

  constructor(props: UserProps) {
    super({
      id: props.id,
      created_at: props.created_at
    })

    this.name = props.name
    this.email = props.email
    this.password = props.password
  }
}