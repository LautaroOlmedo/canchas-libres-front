import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {ReserveComponent} from './components/reserve/reserve.component';
import {ProfileComponent} from './components/profile/profile.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reserves/:id', component: ReserveComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'errorPage', component: ErrorPageComponent },
  { path: '**', redirectTo: '/errorPage', pathMatch: 'full' }, // Redirect all unknown routes to the error page,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
