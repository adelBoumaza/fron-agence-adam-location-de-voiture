import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './login.model';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

    private baseUrl = '/oauth/token';
    

    /**
     * Constructor
     * @param _httpClient
     */
    constructor(private _httpClient: HttpClient) {
    }

    /**
     * Call Login Endpoint
     * @param username
     * @param password
     */
    public login(user: User): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', 'Basic YWdlbmNlQWRhbTphZ2VuY2VBZGFtMjAxOA==')
        ;

        const body = new HttpParams()
            .set('username', user._userName)
            .set('password', user._password)
            .set('grant_type', 'password')
        ;

        return this._httpClient.post<any>(`${this.baseUrl}`, body, { headers: headers });
    }



    public doLogin(user:User)
    {
         
    }

}