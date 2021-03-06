import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule, PreloadAllModules } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AddGameComponent } from './add-game/add-game.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HomeUserComponent,
    HomeAdminComponent,
    AddGameComponent,
    EditProfileComponent,
    DeleteProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
