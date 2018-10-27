import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './login.model';
import { Observable } from 'rxjs';
import { Constant } from '../common/util/constants';

@Injectable()
export class LoginService {

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

        return this._httpClient.post<any>(`${Constant.oauth}`, body, { headers: headers });
    }




    public getCurrentUser()
    {
        const headers = new HttpHeaders()
            .set('Authorization', localStorage.getItem('token'))
        ; 

        return this._httpClient.get<any>(`${Constant.baseUrl}`+Constant.currentUser, { headers: headers });
    }

}