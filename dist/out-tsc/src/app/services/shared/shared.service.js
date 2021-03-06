import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from '../env/env.service';
import { AuthService } from '../auht/auth.service';
import { Storage } from '@ionic/storage';
let SharedService = class SharedService {
    constructor(http, env, storage, authService) {
        this.http = http;
        this.env = env;
        this.storage = storage;
        this.authService = authService;
    }
    ngOnInit() {
    }
    getListPengaduan() {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.get(this.env.API_URL + 'pengaduan/list', { headers: this.headers })
            .pipe();
    }
    getDetailPengaduan(id) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.get(this.env.API_URL + 'pengaduan/detail?pengaduan_id=' + id, { headers: this.headers })
            .pipe();
    }
    getComments(id) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.get(this.env.API_URL + 'pengaduan/komentar?pengaduan_id=' + id, { headers: this.headers })
            .pipe();
    }
    getTanggapans(id) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.get(this.env.API_URL + 'pengaduan/tindaklanjut?pengaduan_id=' + id, { headers: this.headers })
            .pipe();
    }
    getKategori() {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.get(this.env.API_URL + 'pengaduan/menu', { headers: this.headers })
            .pipe();
    }
    getUser() {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.get(this.env.API_URL + 'user', { headers: this.headers })
            .pipe();
    }
    checkUser(user_id) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        let data = {
            id: user_id
        };
        return this.http.post(this.env.API_URL + 'pengaduan/check-user', data, { headers: this.headers })
            .pipe();
    }
    updateProfileUser(updated_information) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        let data = updated_information;
        return this.http.post(this.env.API_URL + 'pengaduan/update-user', data, { headers: this.headers })
            .pipe();
    }
    addPengaduan(data) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.post(this.env.API_URL + 'pengaduan/add', data, { headers: this.headers })
            .pipe();
    }
    getProject(opd_id) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.get(this.env.API_URL + 'pengaduan/projectppl?opd_id=' + opd_id, { headers: this.headers })
            .pipe();
    }
    detailProject(project_id) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.get(this.env.API_URL + 'pengaduan/detailproject?project_id=' + project_id, { headers: this.headers })
            .pipe();
    }
    postKomentar(data) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.post(this.env.API_URL + 'pengaduan/add-komentar', data, { headers: this.headers })
            .pipe();
    }
    seeUserStatus(user_id) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.get(this.env.API_URL + 'pengaduan/lihat-user?id=' + user_id, { headers: this.headers })
            .pipe();
    }
    updatePassword(data) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.post(this.env.API_URL + 'pengaduan/update-password', data, { headers: this.headers })
            .pipe();
    }
    addVote(data) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.post(this.env.API_URL + 'pengaduan/add-vote', data, { headers: this.headers })
            .pipe();
    }
    checkVoted(user_id, pengaduan_id) {
        this.token = this.authService.token;
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return this.http.get(this.env.API_URL + 'pengaduan/checkvote?user_id=' + user_id + '&pengaduan_id=' + pengaduan_id, { headers: this.headers })
            .pipe();
    }
};
SharedService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        EnvService,
        Storage,
        AuthService])
], SharedService);
export { SharedService };
//# sourceMappingURL=shared.service.js.map