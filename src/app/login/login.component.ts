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
    
    private user : User;
    private error : string;
    
    constructor(
        private loginService:LoginService,
        private _router:Router) 
    { }

    ngOnInit(): void {
        this.user = new User({username: 'Sara', password: 'adel'});
        this.reset();
    }

    reset()
    {
        this.error = '';
    }


    doLogin()
    {
        console.log(this.user);
        this.loginService.login(this.user)
        .subscribe(response => {
            localStorage.setItem('token', `${response.token_type} ${response.access_token}`);
            console.log('localStorage' + localStorage.getItem('token'));
            this._router.navigateByUrl('/dashboard');
            this.reset();
        }, (err) => {
           this.error = 'Le nom d\'utilisateur ou le mot de passe est incorrect';
        });
    }
}






