import {Routes} from '@angular/router'

import {HomeAnonymousComponent} from './home-anonymous/home-anonymous.component'
import {LoginComponent} from './login/login.component'

export const ROUTES: Routes = [
  {path: '', component: HomeAnonymousComponent},
  {path: 'login', component: LoginComponent}

]
