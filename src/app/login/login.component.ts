import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './login.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'
    ]
})
export class LoginComponent implements OnInit {

    private user: User;
    private error: string;

    constructor(
        private loginService: LoginService,
        private _router: Router) { }

    ngOnInit(): void {
        this.user = new User({ username: 'Sara', password: 'adel' });
        this.reset();
    }

    reset() {
        this.error = '';
    }


    doLogin() {
        this.loginService.login(this.user).subscribe(loginResponse => {
            localStorage.setItem('token', `${loginResponse.token_type} ${loginResponse.access_token}`);
            console.log('localStorage' + localStorage.getItem('token'));
            this.loginService.getCurrentUser().subscribe(currentUserResponse => {
                localStorage.setItem('id', currentUserResponse.id);
                this._router.navigateByUrl('/dashboard');
                this.reset();
            });
        }, err => {
            if (err.status === 401) {
                this.error = 'Le nom d\'utilisateur ou le mot de passe est incorrect';
            } else {
                throw err;
            }
            this._router.navigateByUrl('/home');
        });
    }



}






