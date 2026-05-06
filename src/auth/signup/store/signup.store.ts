import { makeAutoObservable } from 'mobx'

export class SignupStore {
  email = ''
  password = ''
  confirmPassword = ''
  loading = false
  error: string | null = null

  constructor() {
    makeAutoObservable(this)
  }
}
