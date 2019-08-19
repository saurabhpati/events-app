import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './profile.component';
import { userRoutes } from '../../routes';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        UserProfileComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
})
export class UserModule { }