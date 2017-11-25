import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {HomeUserComponent} from './home-user/home-user.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home-user', component: HomeUserComponent}

]
