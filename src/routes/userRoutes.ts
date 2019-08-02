import { Routes } from '@angular/router';
import { UserProfileComponent } from '../app/user/profile.component';
import { LoginComponent } from '../app/user/login.component';


export const userRoutes: Routes = [
    { path: 'profile', component: UserProfileComponent },
    { path: 'login', component: LoginComponent },
]