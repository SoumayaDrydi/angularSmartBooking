import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'admin',component:AdminDashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
