import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auht/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
let AuthGuard = class AuthGuard {
    constructor(router, authService, navCtrl, storage) {
        this.router = router;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    canActivate(next, state) {
        const currentUser = this.authService.isLoggedIn;
        if (currentUser) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        AuthService,
        NavController,
        Storage])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map