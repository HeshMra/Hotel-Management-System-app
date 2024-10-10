import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { LoginComponent } from '../Components/login/login.component';
import { AdminComponent } from '../Components/admin/admin.component';
import { UserComponent } from '../Components/user/user.component';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'user', component: UserComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
