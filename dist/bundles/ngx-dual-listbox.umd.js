/**
 * ngx-dual-listbox - A dual list box component for Angular 2+
 * @version v0.2.0
 * @author Ouracademy
 * @link https://github.com/ouracademy/ngx-dual-listbox#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ngxDualListbox"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ngxDualListbox"] = factory(root["ng"]["core"], root["ng"]["common"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
var index_component_1 = __webpack_require__(4);
var NgxDualListboxModule = (function () {
    function NgxDualListboxModule() {
    }
    NgxDualListboxModule_1 = NgxDualListboxModule;
    NgxDualListboxModule.forRoot = function () {
        return {
            ngModule: NgxDualListboxModule_1
        };
    };
    NgxDualListboxModule = NgxDualListboxModule_1 = __decorate([
        core_1.NgModule({
            declarations: [index_component_1.NgxDualListboxComponent],
            imports: [common_1.CommonModule],
            exports: [index_component_1.NgxDualListboxComponent]
        })
    ], NgxDualListboxModule);
    return NgxDualListboxModule;
    var NgxDualListboxModule_1;
}());
exports.NgxDualListboxModule = NgxDualListboxModule;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
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
var core_1 = __webpack_require__(0);
var list_selection_1 = __webpack_require__(5);
var set_1 = __webpack_require__(6);
var NgxDualListboxComponent = (function () {
    function NgxDualListboxComponent() {
        this.key = 'id';
        this.selectedItemsChange = new core_1.EventEmitter();
        // TODO: add custom properties like, display name, enable filter, enable sort
        this.minHeight = '200px';
    }
    NgxDualListboxComponent.prototype.ngOnInit = function () {
        this.availableItems = new list_selection_1.ListSelectionImpl(set_1.difference(this.items, this._selectedItems, this.key));
        this.selectedItems = new list_selection_1.ListSelectionImpl(this._selectedItems);
    };
    NgxDualListboxComponent.prototype.select = function () {
        var _a = transfer(this.availableItems, this.selectedItems), from = _a.from, to = _a.to;
        this.availableItems = from;
        this.selectedItems = to;
        this.selectedItemsChange.emit(this.selectedItems.totalItems);
    };
    NgxDualListboxComponent.prototype.return = function () {
        var _a = transfer(this.selectedItems, this.availableItems), from = _a.from, to = _a.to;
        this.selectedItems = from;
        this.availableItems = to;
        this.selectedItemsChange.emit(this.selectedItems.totalItems);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgxDualListboxComponent.prototype, "key", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], NgxDualListboxComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input('selectedItems'),
        __metadata("design:type", Array)
    ], NgxDualListboxComponent.prototype, "_selectedItems", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NgxDualListboxComponent.prototype, "selectedItemsChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgxDualListboxComponent.prototype, "minHeight", void 0);
    __decorate([
        core_1.ContentChild('templateItem'),
        __metadata("design:type", core_1.TemplateRef)
    ], NgxDualListboxComponent.prototype, "templateItem", void 0);
    __decorate([
        core_1.ContentChild('templateArrowLeft'),
        __metadata("design:type", core_1.TemplateRef)
    ], NgxDualListboxComponent.prototype, "templateArrowLeft", void 0);
    __decorate([
        core_1.ContentChild('templateArrowRight'),
        __metadata("design:type", core_1.TemplateRef)
    ], NgxDualListboxComponent.prototype, "templateArrowRight", void 0);
    NgxDualListboxComponent = __decorate([
        core_1.Component({
            selector: 'ngx-dual-listbox',
            styles: [
                "\n    *{\n        box-sizing: border-box;\n    }\n    .container-dualListBox{\n        display: -webkit-box; \n        display: -moz-box;\n        display: -ms-flexbox;\n        display: -webkit-flex; \n        display: flex;\n\n        -webkit-box-align: center;\n        -moz-box-align: center;\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n     }\n     .container-dualListBox > div{\n             height: 100%;\n             max-height: 100%;\n             display: flex;\n             flex-direction: column;\n             place-content: flex-start;\n     }\n     .container-items{\n        align-items: flex-start;\n        width:40%;\n        border: 1px solid #ccc8c8;\n     }\n     .container-buttons{\n        align-items: center;\n        width:20%;\n     }\n     .btn-arrow{\n           border: 1px solid #afa7a7;\n           background: #9c9797;\n           color: white;\n           padding: 3px;\n           margin: 5px;\n           width:90px;\n           text-align: center;\n     }\n    .choosed{\n           width: 100%;\n           background: #91949c;\n           color: white;\n     }"
            ],
            template: "\n  <div class=\"container-dualListBox\">\n    <div class=\"container-items\" [style.minHeight]=\"minHeight\">\n      <div *ngFor=\"let item of availableItems.totalItems\" [ngClass]=\"{ choosed: availableItems.isSelected(item,1) }\" (click)=\"availableItems.select(item)\">\n        <div *ngIf=\"templateItem;else noTemplateItem\">\n          <ng-container [ngTemplateOutlet]=\"templateItem\" [ngTemplateOutletContext]=\"{ data: item }\">\n          </ng-container>\n        </div>\n        <ng-template #noTemplateItem>\n          {{item.name}}\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"container-buttons\">\n       <div class=\"\" (click)=\"select()\">\n       <div *ngIf=\"templateArrowRight;else arrowRigth\">\n          <ng-container [ngTemplateOutlet]=\"templateArrowRight\">\n          </ng-container>\n       </div>\n      <ng-template #arrowRigth>\n        <div class=\"btn-arrow\">&rarr;</div>\n      </ng-template>\n    </div>\n    <div class=\"\" (click)=\"return()\">\n        <div *ngIf=\"templateArrowLeft;else arrowLeft\">\n          <ng-container [ngTemplateOutlet]=\"templateArrowLeft\">\n          </ng-container>\n        </div>\n        <ng-template #arrowLeft>\n          <div class=\"btn-arrow\">&larr;</div>\n        </ng-template>\n    </div>\n  </div>\n    <div class=\"container-items\" [style.minHeight]=\"minHeight\">\n      <div *ngFor=\"let item of selectedItems.totalItems\" [ngClass]=\"{ choosed: selectedItems.isSelected(item,2) }\"  (click)=\"selectedItems.select(item)\">\n        <div *ngIf=\"templateItem;else noTemplateItem\">\n          <ng-container [ngTemplateOutlet]=\"templateItem\" [ngTemplateOutletContext]=\"{ data: item }\">\n          </ng-container>\n        </div>\n        <ng-template #noTemplateItem>\n          {{item.name}}\n        </ng-template>\n      </div>\n    </div>\n</div>"
        })
    ], NgxDualListboxComponent);
    return NgxDualListboxComponent;
}());
exports.NgxDualListboxComponent = NgxDualListboxComponent;
var transfer = function (from, to) {
    return {
        from: new list_selection_1.ListSelectionImpl(from.totalItems.filter(function (x) { return !from.isSelected(x); })),
        to: new list_selection_1.ListSelectionImpl(from.selectedItems.concat(to.totalItems))
    };
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ListSelectionImpl = (function () {
    function ListSelectionImpl(totalItems) {
        this.totalItems = totalItems;
        this._selectedItems = [];
    }
    ListSelectionImpl.prototype.select = function (item) {
        if (!this.isSelected(item)) {
            this._selectedItems.push(item);
        }
    };
    ListSelectionImpl.prototype.selectAll = function () {
        this._selectedItems = this.totalItems;
    };
    ListSelectionImpl.prototype.unselect = function (item) {
        if (!this.isSelected(item)) {
            throw new Error("Cannot unselect an item that is not selected");
        }
        this._selectedItems = this._selectedItems.filter(function (e) { return e !== item; });
    };
    ListSelectionImpl.prototype.isSelected = function (item) {
        return !!this._selectedItems.find(function (e) { return e === item; });
    };
    Object.defineProperty(ListSelectionImpl.prototype, "selectedItems", {
        get: function () {
            return this._selectedItems;
        },
        enumerable: true,
        configurable: true
    });
    return ListSelectionImpl;
}());
exports.ListSelectionImpl = ListSelectionImpl;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function belongs(item, array, key) {
    return !!array.find(function (i) { return i[key] === item[key]; });
}
exports.belongs = belongs;
function difference(arrayOne, arrayTwo, key) {
    return arrayOne.filter(function (i) {
        return !belongs(i, arrayTwo, key);
    });
}
exports.difference = difference;


/***/ })
/******/ ]);
});
//# sourceMappingURL=ngx-dual-listbox.umd.js.map