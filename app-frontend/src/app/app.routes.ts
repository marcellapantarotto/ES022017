import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {HomeUserComponent} from './home-user/home-user.component'
import {HomeAdminComponent} from './home-admin/home-admin.component'
import {AddGameComponent} from './add-game/add-game.component'
import {EditProfileComponent} from './edit-profile/edit-profile.component'
import {DeleteProfileComponent} from './delete-profile/delete-profile.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home-user', component: HomeUserComponent},
  {path: 'home-admin', component: HomeAdminComponent},
  {path: 'add-game', component: AddGameComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'delete-profile', component: DeleteProfileComponent}
]
