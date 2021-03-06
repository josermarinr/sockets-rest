import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { UserGuards } from './guard/user-guards.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path:'messages', component: MessagesComponent, canActivate: [UserGuards]},
  { path: '**', component: LoginComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
