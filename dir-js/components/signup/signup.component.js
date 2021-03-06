"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var headers_1 = require('../common/headers');
var SignupComponent = (function () {
    function SignupComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    SignupComponent.prototype.signup = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        var body = JSON.stringify({ username: username, password: password });
        this.http.post('http://localhost:3001/users', body, { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            localStorage.setItem('id_token', response.json().id_token);
            _this.router.navigate(['home']);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    SignupComponent.prototype.login = function (event) {
        event.preventDefault();
        this.router.navigate(['login']);
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'signup',
            templateUrl: './signup.component.html',
            styles: ['./signup.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map