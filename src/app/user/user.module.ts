import { NgModule } from '@angular/core';
import { UserProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from 'src/routes/userRoutes';

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