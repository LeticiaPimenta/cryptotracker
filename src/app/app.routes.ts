import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent}
];
