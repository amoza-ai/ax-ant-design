import { makeAutoObservable } from 'mobx'

export class ResetStore {
  email = ''
  sent = false
  loading = false
  error: string | null = null

  constructor() {
    makeAutoObservable(this)
  }
}
