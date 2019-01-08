import { Injectable } from '@angular/core';
import { TokenService } from '../token/token-service';
import { Subject, BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService) {
        if (this.tokenService.hasToken()) {
            this.decodeAndNotify();
        }
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    private decodeAndNotify(): void {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.userName = user.name;
        this.userSubject.next(user);
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    getUserName() {
        return this.userName;
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }
}
