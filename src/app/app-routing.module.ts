import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCafeComponent } from './add-cafe/add-cafe.component';
import { HomeComponent } from './home/home.component';
import { ListCafeComponent } from './list-cafe/list-cafe.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateCafeComponent } from './update-cafe/update-cafe.component';

const routes: Routes = [
  {component:AddCafeComponent,path:"add"},
  {component:HomeComponent,path:""},
  {component:UpdateCafeComponent,path:"update/:id"},
  {component:ListCafeComponent,path:"list"},
  {component:LoginComponent,path:"login"},
  {component:RegisterComponent,path:"register"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
