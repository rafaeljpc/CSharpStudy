import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    user$: Observable<User>;

    constructor(
        private router: Router,
        private userService: UserService) {
        this.user$ = this.userService.getUser();
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}
