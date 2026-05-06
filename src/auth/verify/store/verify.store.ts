import { makeAutoObservable } from 'mobx'

export class VerifyStore {
  code = ''
  verified = false
  loading = false
  error: string | null = null

  constructor() {
    makeAutoObservable(this)
  }
}
