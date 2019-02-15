import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { AuthGuard } from './guard/auth.guard';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'member', component: MemberComponent, canActivate: [AuthGuard] },
  { path: 'Register', component: RegisterComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
