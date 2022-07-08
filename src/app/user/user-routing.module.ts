import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

import { UserComponent } from './user.component';

const routes: Routes = [
  // {path:'',redirectTo: "form",pathMatch:"full"},
  { path: '', component: UserComponent ,
children:[
  {path:'',component:UserListComponent},
  {path:'form',component:UserFormComponent},
  {path:'list',component:UserListComponent},

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
