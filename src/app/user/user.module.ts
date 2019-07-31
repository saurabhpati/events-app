import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './profile.component';
import { userRoutes } from '../../routes';

@NgModule({
    declarations: [
        UserProfileComponent,
    ],
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    providers: [],
})
export class UserModule { }