import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { LoginComponent } from '../Components/login/login.component';
import { AdminComponent } from '../Components/admin/admin.component';
import { UserComponent } from '../Components/user/user.component';
import { AuthGuard } from '../Services/AuthServices/auth.guard';
import { TestComponent } from '../Components/test/test.component';
import { InquiryFormComponent } from '../Components/inquiry-form/inquiry-form.component';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';
import { CustomerInquiriesComponent } from '../Components/customer-inquiries/customer-inquiries.component';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Test', component: TestComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'add_inquiry', component: InquiryFormComponent, canActivate: [AuthGuard],data: { roles: ['USER']}},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard],data: { roles: ['ADMIN'] }},
    { path: 'user', component: UserComponent ,canActivate: [AuthGuard],data: { roles: ['USER']}},
    { path: 'customer-inquiries', component: CustomerInquiriesComponent ,canActivate: [AuthGuard],data: { roles: ['ADMIN']}},
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
