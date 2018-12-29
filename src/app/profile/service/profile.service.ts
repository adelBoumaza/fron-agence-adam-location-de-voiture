import { Injectable } from '@angular/core';
import { ApiAgenceAdamService } from '../../common/service/api.agence.adam.service';
import { Profile } from '../model/profile.model';
import { Constant } from '../../common/util/constants';

@Injectable()
export class ProfileService {

    /**
     * Constructor
     * @param _httpClient
     */
    constructor(private _api: ApiAgenceAdamService) {
    }

    public saveOrUpdateProfile(profile: Profile, save: boolean) {
        return this._api.POST(profile, Constant.saveOrUpdateProfile + '/' + save);
    }
}