import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let EnvService = class EnvService {
    // API_URL = 'https://sidumas.badungkab.go.id/api/';
    constructor() {
        this.API_URL = 'http://localhost:8001/api/';
    }
};
EnvService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], EnvService);
export { EnvService };
//# sourceMappingURL=env.service.js.map