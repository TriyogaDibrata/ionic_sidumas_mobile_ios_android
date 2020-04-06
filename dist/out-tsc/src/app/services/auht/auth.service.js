import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from '../env/env.service';
import { Storage } from '@ionic/storage';
import { tap } from 'rxjs/operators';
import { CommonService } from '../common/common.service';
let AuthService = class AuthService {
    constructor(http, env, storage, commonService) {
        this.http = http;
        this.env = env;
        this.storage = storage;
        this.commonService = commonService;
        this.isLoggedIn = false;
    }
    login(email, password) {
        let headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return this.http.post(this.env.API_URL + 'login', { email: email, password: password }, { headers: headers })
            .pipe(tap(data => {
            console.log(data['token']);
            this.storage.set('token', data['token'])
                .then(() => {
                console.log('Token Disimpan');
            }, err => console.log('Token Gagal Disimpan'));
            this.token = data['token'];
            this.isLoggedIn = true;
            return data['token'];
        }, err => {
            console.log(err);
        }));
    }
    register(name, no_telp, email, password, c_password) {
        return this.http.post(this.env.API_URL + 'register', { name: name, email: email, no_telp: no_telp, password: password, password_confirmation: c_password });
    }
    getToken() {
        return this.storage.get('token')
            .then(data => {
            this.token = data;
            console.log(data);
            if (this.token != null) {
                this.isLoggedIn = true;
            }
            else {
                this.isLoggedIn = false;
            }
        }, err => {
            console.log(err);
            this.token = null;
            this.isLoggedIn = false;
        });
    }
    logout() {
        return this.storage.remove('token')
            .then(() => {
            this.storage.clear();
            this.isLoggedIn = false;
            this.token = null;
            this.commonService.goTo('login');
        }, err => {
            console.log(err);
        });
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        EnvService,
        Storage,
        CommonService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map