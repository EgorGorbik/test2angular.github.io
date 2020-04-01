(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var auth_routing_1 = __webpack_require__(/*! ./auth.routing */ "./src/app/auth/auth.routing.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var auth_service_1 = __webpack_require__(/*! ./services/auth.service */ "./src/app/auth/services/auth.service.ts");
var request_reset_password_component_1 = __webpack_require__(/*! ./request-reset-password/request-reset-password.component */ "./src/app/auth/request-reset-password/request-reset-password.component.ts");
var new_password_component_1 = __webpack_require__(/*! ./new-password/new-password.component */ "./src/app/auth/new-password/new-password.component.ts");
var confirm_equal_validator_directive_1 = __webpack_require__(/*! ../shared/confirm-equal-validator.directive */ "./src/app/shared/confirm-equal-validator.directive.ts");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.LoginComponent,
                request_reset_password_component_1.RequestResetPasswordComponent,
                new_password_component_1.NewPasswordComponent,
                confirm_equal_validator_directive_1.ConfirmEqualValidator
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(auth_routing_1.AuthRoutes),
                forms_1.ReactiveFormsModule,
            ],
            providers: [
                auth_service_1.AuthService
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/app/auth/auth.routing.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.routing.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
var request_reset_password_component_1 = __webpack_require__(/*! ./request-reset-password/request-reset-password.component */ "./src/app/auth/request-reset-password/request-reset-password.component.ts");
var new_password_component_1 = __webpack_require__(/*! ./new-password/new-password.component */ "./src/app/auth/new-password/new-password.component.ts");
exports.AuthRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'request-password', component: request_reset_password_component_1.RequestResetPasswordComponent },
    { path: 'update-password', component: new_password_component_1.NewPasswordComponent }
];


/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <div class=\"logo-img\">\r\n          <img src=\"../../../assets/img/pic.png\"/>\r\n      </div>\r\n\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitLogin()\">\r\n        <div\r\n          class=\"form-group\"\r\n          [ngClass]=\"{invalid: form.get('email').invalid && form.get('email').touched || isWrongData}\"\r\n        >\r\n          <label for=\"email\">Email address</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" formControlName=\"email\">\r\n          <div\r\n              *ngIf=\"form.get('email').invalid && form.get('email').touched\"\r\n              class=\"validation\">\r\n            <small\r\n              *ngIf=\"form.get('email').errors.email\"\r\n              class=\"form-text text-muted\">\r\n              Enter correct email please\r\n          </small>\r\n          <small\r\n              *ngIf=\"form.get('email').errors.required\"\r\n              class=\"form-text text-muted\">\r\n            Email is required\r\n          </small>\r\n          </div>\r\n          <div\r\n                  *ngIf=\"isWrongData\"\r\n                  class=\"validation\">\r\n            <small\r\n                    class=\"form-text text-muted\">\r\n              Wrong data\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\"\r\n         [ngClass]=\"{invalid: form.get('email').invalid && form.get('email').touched}\"\r\n        >\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n          <div\r\n              *ngIf=\"form.get('password').invalid && form.get('password').touched\"\r\n              class=\"validation\">\r\n            <small\r\n                  *ngIf=\"form.get('password').errors.minlength\"\r\n                  class=\"form-text text-muted\">Password length must be at least 6 symbols </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-check\">\r\n          <div class=\"remember\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"check\">\r\n            <label class=\"form-check-label\" for=\"check\">Remember</label>\r\n          </div>\r\n          <div>\r\n            <a [routerLink]=\"['/request-password']\">Forgot password?</a>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"login-btn\">\r\n          <button\r\n                  type=\"submit\"\r\n                  class=\"btn btn-primary\"\r\n                  [disabled]=\"form.invalid\">\r\n            Login\r\n          </button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  max-width: 600px;\n  margin: 0 auto;\n  height: 100%; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.invalid input {\n  border: 2px solid red; }\n\nsmall {\n  color: red;\n  font-weight: 600; }\n\n.form-check-input {\n  margin: 0 5px 0;\n  height: 16px;\n  width: 16px; }\n\n.remember {\n  display: flex;\n  align-items: center; }\n\n.form-check-label {\n  margin: 0px; }\n\nlabel {\n  color: #ffffff;\n  cursor: pointer; }\n\n.logo-img {\n  text-align: center;\n  margin-bottom: 30px; }\n\n.form-check {\n  display: flex;\n  justify-content: space-between; }\n\n.btn {\n  padding: 10px 26px;\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZ29yZ29yYmlrL0Rlc2t0b3AvQW5ndWxhckdpdC9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFJZDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHckI7RUFFSSxxQkFBcUIsRUFBQTs7QUFJekI7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgbWFyZ2luOiAwIDVweCAwO1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTZweDtcclxufVxyXG5cclxuLnJlbWVtYmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9nby1pbWcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jaGVjayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogMTBweCAyNnB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var auth_service_1 = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isWrongData = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            email: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.email
            ]),
            password: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(6)
            ])
        });
    };
    LoginComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        var user = {
            email: this.form.value.email,
            password: this.form.value.password
        };
        // отправить запрос на сервер с этими данными и если все хорошо сделать редирект
        this.authService.loginAdmin(user).subscribe(function (data) {
            localStorage.setItem('accessToken', data.accessToken);
            console.log(data);
            _this.authService.setLoggedInStatus(true);
            _this.router.navigate(['/companies']);
        }, function (error) {
            console.log(error.error.error);
            _this.isWrongData = true;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/auth/new-password/new-password.component.html":
/*!***************************************************************!*\
  !*** ./src/app/auth/new-password/new-password.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <div class=\"logo-img\">\n        <img src=\"../../../assets/img/pic.png\"/>\n      </div>\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitPassword()\">\n\n        <div class=\"form-group\"\n             [ngClass]=\"{invalid: form.get('password').invalid && form.get('password').touched}\"\n        >\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" formControlName=\"password\">\n          <div\n                  *ngIf=\"form.get('password').invalid && form.get('password').touched\"\n                  class=\"validation\">\n            <small\n                    *ngIf=\"form.get('password').errors.minlength\"\n                    class=\"form-text text-muted\">Password length must be at least 6 symbols\n            </small>\n          </div>\n          <label for=\"password-confirm\">Confirm password</label>\n          <input\n                  appConfirmEqualValidator=\"password\"\n                  type=\"password\" class=\"form-control\"\n                  id=\"password-confirm\" placeholder=\"Confirm password\"\n                  formControlName=\"passwordConfirm\">\n\n          <div\n                  *ngIf=\"form.get('passwordConfirm').invalid && form.get('passwordConfirm').touched\"\n                  class=\"validation\">\n            <small\n                    *ngIf=\"form.get('passwordConfirm').errors.minlength\"\n                    class=\"form-text text-muted\">Password length must be at least 6 symbols\n            </small>\n            <small\n                    *ngIf=\"form.get('passwordConfirm').errors.notEqual\"\n                    class=\"form-text text-muted\">Password and Confirm password not equal\n            </small>\n          </div>\n        </div>\n\n\n        <div class=\"login-btn\">\n          <button\n                  type=\"submit\"\n                  class=\"btn btn-primary\"\n                  [disabled]=\"form.invalid\">\n            Update password\n          </button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/new-password/new-password.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/auth/new-password/new-password.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  max-width: 600px;\n  margin: 0 auto;\n  height: 100%; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.invalid input {\n  border: 2px solid red; }\n\nlabel {\n  color: #ffffff;\n  cursor: pointer;\n  margin-top: 20px; }\n\n.btn {\n  padding: 10px 26px;\n  margin-top: 30px; }\n\nsmall {\n  color: red;\n  font-weight: 600;\n  display: block;\n  margin: 10px 0; }\n\n.invalid input {\n  border: 2px solid red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZ29yZ29yYmlrL0Rlc2t0b3AvQW5ndWxhckdpdC9zcmMvYXBwL2F1dGgvbmV3LXBhc3N3b3JkL25ldy1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUlkO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUdyQjtFQUVJLHFCQUFxQixFQUFBOztBQUl6QjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHaEI7RUFFSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbmV3LXBhc3N3b3JkL25ldy1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmludmFsaWQge1xyXG4gIGlucHV0IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICB9XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogMTBweCAyNnB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/new-password/new-password.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/new-password/new-password.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var NewPasswordComponent = /** @class */ (function () {
    function NewPasswordComponent() {
    }
    NewPasswordComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            password: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(6)
            ]),
            passwordConfirm: new forms_1.FormControl(null, [
                forms_1.Validators.required
            ])
        });
    };
    NewPasswordComponent.prototype.onSubmitPassword = function () {
        console.log(this.form);
    };
    NewPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-new-password',
            template: __webpack_require__(/*! ./new-password.component.html */ "./src/app/auth/new-password/new-password.component.html"),
            styles: [__webpack_require__(/*! ./new-password.component.scss */ "./src/app/auth/new-password/new-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewPasswordComponent);
    return NewPasswordComponent;
}());
exports.NewPasswordComponent = NewPasswordComponent;


/***/ }),

/***/ "./src/app/auth/request-reset-password/request-reset-password.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/auth/request-reset-password/request-reset-password.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"logo-img\">\n        <img src=\"../../../assets/img/pic.png\"/>\n      </div>\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForgotPassword()\">\n        <h4>Forgot Password</h4>\n        <div class=\"form-group\"\n             [ngClass]=\"{invalid: form.get('email').invalid && form.get('email').touched}\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" formControlName=\"email\">\n          <div\n                class=\"validation\"\n               *ngIf=\"form.get('email').invalid && form.get('email').touched\">\n            <small\n                    *ngIf=\"form.get('email').errors.email\"\n                    class=\"form-text text-muted\">\n              Enter correct email please\n            </small>\n            <small\n                    *ngIf=\"form.get('email').errors.required\"\n                    class=\"form-text text-muted\">\n              Email is required\n            </small>\n          </div>\n          <button\n                  type=\"submit\"\n                  class=\"btn btn-primary\"\n                  [disabled]=\"form.invalid\">\n            Reset password\n          </button>\n\n          <a [routerLink]=\"['/login']\">\n            <i class=\"pe-7s-left-arrow\"></i>\n            Back to login\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/request-reset-password/request-reset-password.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/auth/request-reset-password/request-reset-password.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: #ffffff;\n  cursor: pointer; }\n\n.btn {\n  padding: 10px 26px;\n  margin-top: 30px; }\n\nsmall {\n  color: red;\n  font-weight: 600;\n  display: block;\n  margin: 10px 0; }\n\n.invalid input {\n  border: 2px solid red; }\n\nform {\n  max-width: 600px;\n  margin: 0 auto;\n  height: 100%; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.logo-img {\n  margin-bottom: 30px; }\n\nh4 {\n  color: #3472F7;\n  text-align: center;\n  margin-bottom: 30px; }\n\na {\n  margin-top: 40px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\na i {\n    margin-right: 10px;\n    font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZ29yZ29yYmlrL0Rlc2t0b3AvQW5ndWxhckdpdC9zcmMvYXBwL2F1dGgvcmVxdWVzdC1yZXNldC1wYXNzd29yZC9yZXF1ZXN0LXJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdoQjtFQUVJLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUlkO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUxyQjtJQU9JLGtCQUFrQjtJQUNsQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlcXVlc3QtcmVzZXQtcGFzc3dvcmQvcmVxdWVzdC1yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHBhZGRpbmc6IDEwcHggMjZweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4uaW52YWxpZCB7XHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIH1cclxufVxyXG4gIGZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28taW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBjb2xvcjogIzM0NzJGNztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/request-reset-password/request-reset-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/auth/request-reset-password/request-reset-password.component.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var RequestResetPasswordComponent = /** @class */ (function () {
    function RequestResetPasswordComponent(router) {
        this.router = router;
    }
    RequestResetPasswordComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            email: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.email
            ])
        });
    };
    RequestResetPasswordComponent.prototype.onSubmitForgotPassword = function () {
        this.router.navigate(['/update-password']);
    };
    RequestResetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-request-reset-password',
            template: __webpack_require__(/*! ./request-reset-password.component.html */ "./src/app/auth/request-reset-password/request-reset-password.component.html"),
            styles: [__webpack_require__(/*! ./request-reset-password.component.scss */ "./src/app/auth/request-reset-password/request-reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], RequestResetPasswordComponent);
    return RequestResetPasswordComponent;
}());
exports.RequestResetPasswordComponent = RequestResetPasswordComponent;
;


/***/ }),

/***/ "./src/app/auth/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.setToken = function () {
    };
    AuthService.prototype.login = function (user) {
        return this.http.post('', user);
    };
    AuthService.prototype.logout = function (user) {
    };
    AuthService.prototype.isAuthenticated = function () {
        return !this.token;
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/shared/confirm-equal-validator.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/confirm-equal-validator.directive.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ConfirmEqualValidator = /** @class */ (function () {
    function ConfirmEqualValidator() {
    }
    ConfirmEqualValidator_1 = ConfirmEqualValidator;
    ConfirmEqualValidator.prototype.validate = function (control) {
        var controlCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlCompare && controlCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    var ConfirmEqualValidator_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmEqualValidator.prototype, "appConfirmEqualValidator", void 0);
    ConfirmEqualValidator = ConfirmEqualValidator_1 = __decorate([
        core_1.Directive({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: ConfirmEqualValidator_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidator);
    return ConfirmEqualValidator;
}());
exports.ConfirmEqualValidator = ConfirmEqualValidator;


/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map