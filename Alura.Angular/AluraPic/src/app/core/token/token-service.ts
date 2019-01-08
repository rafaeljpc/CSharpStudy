import { Injectable } from '@angular/core';

const LS_KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {
    hasToken(): boolean {
        return !!this.getToken();
    }

    setToken(token: string) {
        window.localStorage.setItem(LS_KEY, token);
    }

    getToken(): string {
        return window.localStorage.getItem(LS_KEY);
    }

    removeToken() {
        window.localStorage.removeItem(LS_KEY);
    }
}
