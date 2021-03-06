import { Injectable } from '@angular/core';
import { IUser } from '../user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;

    login({ userName, password }) {
        this.currentUser = {
            id: 1,
            userName,
            firstName: 'Ganesh',
            lastName: 'Gaitonde',
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateUser(updatedUser: IUser) {
        this.currentUser = updatedUser; 
    }
}