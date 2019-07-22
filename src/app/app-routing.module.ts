import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { UserComponent } from './user/user.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [

  {
    path: 'signup', component:UserComponent,
    children: [{ path: '', component:SignUpComponent }]
},
{
    path: 'login', component:UserComponent,
    children: [{ path: '', component:SignInComponent }]
},
{
    path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
},
{
    path: '', redirectTo: '/login', pathMatch: 'full'
},














];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
