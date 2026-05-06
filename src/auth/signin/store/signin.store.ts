import { makeAutoObservable } from 'mobx'

export class SigninStore {
  email = ''
  password = ''
  loading = false
  error: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setEmail(value: string) {
    this.email = value
  }

  setPassword(value: string) {
    this.password = value
  }
}
