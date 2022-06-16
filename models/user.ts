import { Base } from './base'

export interface UserCreate {
  password: string
  first_name: string
  last_name: string
  email: string
  phone: string
  is_active: boolean
  is_admin: boolean
  role: number
}

export interface User extends UserCreate, Base {
  last_login: string
}
