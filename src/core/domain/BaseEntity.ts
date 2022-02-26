import crypto from 'crypto'

type BaseEntityProps = {
  id?: string;
  created_at?: Date;
}

export abstract class BaseEntity {
  public readonly id: string;
  public created_at: Date;

  constructor(props?: BaseEntityProps) {
    this.id = props.id || crypto.randomUUID()
    this.created_at = new Date() || props.created_at
  }
}