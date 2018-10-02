(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1> {{ title }} </h1>\n      <hr/>-->\n      <!--<app-server></app-server>-->\n      <!-- <div app-server></div> --> <!-- property selector -->\n      <!-- <div class=\"app-server\"></div> --> <!-- class selector -->\n      <!--<app-servers></app-servers>-->\n      <!--<app-tugas></app-tugas>-->\n      <!--<app-tugas3></app-tugas3>-->\n      <!--<app-week5></app-week5>-->\n    <!--</div>\n  </div>\n</div>-->\n<app-header></app-header>\n<app-content></app-content>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'starter-kit';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_server_server_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/server/server.component */ "./src/app/server/server.component.ts");
/* harmony import */ var _servers_servers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _tugas_tugas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tugas/tugas.component */ "./src/app/tugas/tugas.component.ts");
/* harmony import */ var _tugas3_tugas3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tugas3/tugas3.component */ "./src/app/tugas3/tugas3.component.ts");
/* harmony import */ var _week5_week5_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./week5/week5.component */ "./src/app/week5/week5.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_server_server_component__WEBPACK_IMPORTED_MODULE_4__["ServerComponent"],
                _servers_servers_component__WEBPACK_IMPORTED_MODULE_5__["ServersComponent"],
                _tugas_tugas_component__WEBPACK_IMPORTED_MODULE_6__["TugasComponent"],
                _tugas3_tugas3_component__WEBPACK_IMPORTED_MODULE_7__["Tugas3Component"],
                _week5_week5_component__WEBPACK_IMPORTED_MODULE_8__["Week5Component"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font{\r\n    color: #007bff\r\n}"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h2 [ngClass]=\"{'font': true}\">Form Data Mahasiswa</h2>\n      <hr>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"nim\" [ngClass]=\"{'font': true}\">NIM</label>\n          <input type=\"text\" class=\"form-control\" name=\"nim\" id=\"nim\" [(ngModel)]=\"nim\">\n          <label for=\"nama\" [ngClass]=\"{'font': true}\">Nama</label>\n          <input type=\"text\" class=\"form-control\" name=\"nama\" id=\"nama\" [(ngModel)]=\"nama\">\n          <label for=\"kelas\" [ngClass]=\"{'font': true}\">Kelas</label>\n          <input type=\"text\" class=\"form-control\" name=\"kelas\" id=\"kelas\" [(ngModel)]=\"kelas\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"tambahMhs()\">Tambah</button>\n      </form>\n    </div>\n    <div class=\"col\">\n      <h2 [ngClass]=\"{'font': true}\">Data Mahasiswa</h2>\n      <hr>\n      <div class=\"row\">\n          <div class=\"col-md-12 mt-3\" *ngFor=\"let mhs of daftarMhs\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h3 [ngClass]=\"{'font': true}\">{{ mhs.nama }}</h3>\n              </div>\n              <div class=\"card-body\">\n                <h5 class=\"card-title\" [ngClass]=\"{'font': true}\">{{ mhs.nim }}</h5>\n                <p class=\"card-text\" [ngClass]=\"{'font': true}\">{{ mhs.kelas }}</p>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_mahasiswa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/mahasiswa */ "./src/app/data/mahasiswa.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
        this.nim = "";
        this.nama = "";
        this.kelas = "";
        this.daftarMhs = [];
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.prototype.tambahMhs = function () {
        this.mhs = new _data_mahasiswa__WEBPACK_IMPORTED_MODULE_1__["Mahasiswa"](this.nim, this.nama, this.kelas);
        this.daftarMhs.push(this.mhs);
        this.nim = "";
        this.nama = "";
        this.kelas = "";
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/data/mahasiswa.ts":
/*!***********************************!*\
  !*** ./src/app/data/mahasiswa.ts ***!
  \***********************************/
/*! exports provided: Mahasiswa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mahasiswa", function() { return Mahasiswa; });
var Mahasiswa = /** @class */ (function () {
    function Mahasiswa(nim, nama, kelas) {
        this.nim = nim;
        this.nama = nama;
        this.kelas = kelas;
    }
    return Mahasiswa;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Master Data</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/server/server.component.css":
/*!*********************************************!*\
  !*** ./src/app/server/server.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/server/server.component.html":
/*!**********************************************!*\
  !*** ./src/app/server/server.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Server with ID {{ serverID }} is {{ getServerStatus() }}</p>\r\n<!-- <p>Server with {{ '15' }} is {{ 'online' }}</p> -->\r\n"

/***/ }),

/***/ "./src/app/server/server.component.ts":
/*!********************************************!*\
  !*** ./src/app/server/server.component.ts ***!
  \********************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        this.serverID = 1731710084;
        this.serverStatus = 'offline';
    }
    ServerComponent.prototype.getServerStatus = function () {
        return this.serverStatus;
    };
    ServerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server',
            template: __webpack_require__(/*! ./server.component.html */ "./src/app/server/server.component.html"),
            styles: [__webpack_require__(/*! ./server.component.css */ "./src/app/server/server.component.css")]
        })
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./src/app/servers/servers.component.css":
/*!***********************************************!*\
  !*** ./src/app/servers/servers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/servers/servers.component.html":
/*!************************************************!*\
  !*** ./src/app/servers/servers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>Server Name</label>\n<!-- <input \n  type=\"text\"\n  class=\"form-control\"\n  (input)=\"onUpdateServerName($event)\"> -->\n<input \n  type=\"text\"\n  class=\"form-control\"\n  [(ngModel)]=\"serverName\">\n<p>{{ serverName }}</p>\n<button \n  class=\"btn btn-primary\" \n  [disabled]=\"!allowNewServer\"\n  (click)=\"onCreationStatus()\">Add Server</button>\n<!-- <p>{{ serverCreationStatus }}</p> -->\n<p *ngIf=\"serverCreated; else noServer\">Server telah dibuat, nama server adalah {{ serverName }}</p>\n<ng-template #noServer>\n  <p>No server was created</p>\n</ng-template>\n<app-server></app-server>\n<app-server></app-server>"

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/servers/servers.component.ts ***!
  \**********************************************/
/*! exports provided: ServersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersComponent", function() { return ServersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServersComponent = /** @class */ (function () {
    function ServersComponent() {
        var _this = this;
        this.allowNewServer = false;
        this.serverCreationStatus = 'Tidak ada server baru yang telah dibuat!';
        this.serverName = 'TestServer';
        this.serverCreated = false;
        // () => {} adalah arrow function atau lamda --> fitur ES6 javascript
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 2000);
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    ServersComponent.prototype.onCreationStatus = function () {
        this.serverCreated = true;
        this.serverCreationStatus = 'Server telah dibuat!';
    };
    ServersComponent.prototype.onUpdateServerName = function (event) {
        this.serverName = event.target.value;
    };
    ServersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servers',
            template: __webpack_require__(/*! ./servers.component.html */ "./src/app/servers/servers.component.html"),
            styles: [__webpack_require__(/*! ./servers.component.css */ "./src/app/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "./src/app/shared/mahasiswa.ts":
/*!*************************************!*\
  !*** ./src/app/shared/mahasiswa.ts ***!
  \*************************************/
/*! exports provided: Mahasiswa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mahasiswa", function() { return Mahasiswa; });
var Mahasiswa = /** @class */ (function () {
    function Mahasiswa(nim, nama, alamat) {
        this.nim = nim;
        this.nama = nama;
        this.alamat = alamat;
    }
    return Mahasiswa;
}());



/***/ }),

/***/ "./src/app/tugas/tugas.component.css":
/*!*******************************************!*\
  !*** ./src/app/tugas/tugas.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tugas/tugas.component.html":
/*!********************************************!*\
  !*** ./src/app/tugas/tugas.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\">\n<p>{{ username }}</p>\n<p>{{ unableInput }}</p>\n<button class=\"btn btn-primary\" [disabled]=\"username ===''\" (click)=\"onResetUsername()\">Update</button>\n"

/***/ }),

/***/ "./src/app/tugas/tugas.component.ts":
/*!******************************************!*\
  !*** ./src/app/tugas/tugas.component.ts ***!
  \******************************************/
/*! exports provided: TugasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TugasComponent", function() { return TugasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TugasComponent = /** @class */ (function () {
    function TugasComponent() {
        this.username = '';
    }
    TugasComponent.prototype.onUpdateUsername = function (event) {
        this.username = event.target.value;
    };
    TugasComponent.prototype.onResetUsername = function () {
        this.username = '';
    };
    TugasComponent.prototype.ngOnInit = function () {
    };
    TugasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tugas',
            template: __webpack_require__(/*! ./tugas.component.html */ "./src/app/tugas/tugas.component.html"),
            styles: [__webpack_require__(/*! ./tugas.component.css */ "./src/app/tugas/tugas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TugasComponent);
    return TugasComponent;
}());



/***/ }),

/***/ "./src/app/tugas3/tugas3.component.css":
/*!*********************************************!*\
  !*** ./src/app/tugas3/tugas3.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text{\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/tugas3/tugas3.component.html":
/*!**********************************************!*\
  !*** ./src/app/tugas3/tugas3.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button \n  class=\"btn btn-primary\" \n  (click)=\"onClickDetail()\">Tampilkan Detail</button>\n  <p>{{ detailName }}</p>\n  <div *ngFor=\"let data of log\">\n  <p [ngStyle] = \"{'background-color': data>=5? '#007bff' : 'white'}\"\n    [ngClass] = \"{text: data >= 5}\">\n    {{ data }}\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/tugas3/tugas3.component.ts":
/*!********************************************!*\
  !*** ./src/app/tugas3/tugas3.component.ts ***!
  \********************************************/
/*! exports provided: Tugas3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tugas3Component", function() { return Tugas3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tugas3Component = /** @class */ (function () {
    function Tugas3Component() {
        this.status = true;
        this.detailName = "";
        this.log = [];
    }
    Tugas3Component.prototype.ngOnInit = function () {
    };
    Tugas3Component.prototype.onClickDetail = function () {
        this.log.push(this.log.length + 1);
        if (this.status === true) {
            this.detailName = "Watashi Ga Kita!!!";
            this.status = false;
        }
        else {
            this.detailName = "";
            this.status = true;
        }
    };
    Tugas3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tugas3',
            template: __webpack_require__(/*! ./tugas3.component.html */ "./src/app/tugas3/tugas3.component.html"),
            styles: [__webpack_require__(/*! ./tugas3.component.css */ "./src/app/tugas3/tugas3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Tugas3Component);
    return Tugas3Component;
}());



/***/ }),

/***/ "./src/app/week5/week5.component.css":
/*!*******************************************!*\
  !*** ./src/app/week5/week5.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/week5/week5.component.html":
/*!********************************************!*\
  !*** ./src/app/week5/week5.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <label for=\"nim\">NIM</label>\n      <input type=\"text\" name=\"nim\" id=\"nim\"class=\"form-control\" [(ngModel)]=\"nim\">\n      <label for=\"nama\">Nama</label>\n      <input type=\"text\" name=\"nama\" id=\"nama\"class=\"form-control\" [(ngModel)]=\"nama\">\n      <label for=\"alamat\">Alamat</label>\n      <textarea name=\"alamat\" id=\"alamat\" cols=\"10\" rows=\"5\" class=\"form-control\" [(ngModel)]=\"alamat\"></textarea>\n      <br>\n      <button class=\"btn btn-primary\" (click)=\"tambahMhs()\">Tambah Mahasiswa</button>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-12\" *ngFor=\"let mhs of daftarMhs\">\n          <h3>{{ mhs.nama }}</h3>\n          <h4>{{ mhs.nim }}</h4>\n          <p>{{ mhs.alamat }}</p>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/week5/week5.component.ts":
/*!******************************************!*\
  !*** ./src/app/week5/week5.component.ts ***!
  \******************************************/
/*! exports provided: Week5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Week5Component", function() { return Week5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_mahasiswa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/mahasiswa */ "./src/app/shared/mahasiswa.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Week5Component = /** @class */ (function () {
    function Week5Component() {
        this.nim = "";
        this.nama = "";
        this.alamat = "";
        this.daftarMhs = [];
    }
    Week5Component.prototype.ngOnInit = function () {
    };
    Week5Component.prototype.tambahMhs = function () {
        this.mhs = new _shared_mahasiswa__WEBPACK_IMPORTED_MODULE_1__["Mahasiswa"](this.nim, this.nama, this.alamat);
        this.daftarMhs.push(this.mhs);
        this.nim = "";
        this.nama = "";
        this.alamat = "";
    };
    Week5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-week5',
            template: __webpack_require__(/*! ./week5.component.html */ "./src/app/week5/week5.component.html"),
            styles: [__webpack_require__(/*! ./week5.component.css */ "./src/app/week5/week5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Week5Component);
    return Week5Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\MI\Progweb Lanjut\starter-kit\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map