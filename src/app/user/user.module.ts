import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './profile.component';
import { userRoutes } from '../../routes';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        UserProfileComponent,
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(userRoutes),
        FormsModule
    ],
    providers: [],
})
export class UserModule { }