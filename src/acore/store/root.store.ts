import { SigninStore } from '../../auth/signin/store/signin.store'
import { SignupStore } from '../../auth/signup/store/signup.store'
import { ResetStore } from '../../auth/reset/store/reset.store'
import { VerifyStore } from '../../auth/verify/store/verify.store'
import { HomeStore } from '../../pages/home/store/home.store'
import { MainStore } from '../../pages/main/store/main.store'
import { ErrorStore } from '../../pages/error/store/error.store'

export class RootStore {
  signin = new SigninStore()
  signup = new SignupStore()
  reset = new ResetStore()
  verify = new VerifyStore()
  home = new HomeStore()
  main = new MainStore()
  error = new ErrorStore()
}

export const rootStore = new RootStore()
