import { Component, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { ListSelectionImpl } from '../../model/list-selection';
import { difference } from '../../model/set';
var NgxDualListboxComponent = (function () {
    function NgxDualListboxComponent() {
        this.key = 'id';
        this.selectedItemsChange = new EventEmitter();
        // TODO: add custom properties like, display name, enable filter, enable sort
        this.minHeight = '200px';
    }
    NgxDualListboxComponent.prototype.ngOnInit = function () {
        this.availableItems = new ListSelectionImpl(difference(this.items, this._selectedItems, this.key));
        this.selectedItems = new ListSelectionImpl(this._selectedItems);
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
    NgxDualListboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-dual-listbox',
                    styles: [
                        "\n    *{\n        box-sizing: border-box;\n    }\n    .container-dualListBox{\n        display: -webkit-box; \n        display: -moz-box;\n        display: -ms-flexbox;\n        display: -webkit-flex; \n        display: flex;\n\n        -webkit-box-align: center;\n        -moz-box-align: center;\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n     }\n     .container-dualListBox > div{\n             height: 100%;\n             max-height: 100%;\n             display: flex;\n             flex-direction: column;\n             place-content: flex-start;\n     }\n     .container-items{\n        align-items: flex-start;\n        width:40%;\n        border: 1px solid #ccc8c8;\n     }\n     .container-buttons{\n        align-items: center;\n        width:20%;\n     }\n     .btn-arrow{\n           border: 1px solid #afa7a7;\n           background: #9c9797;\n           color: white;\n           padding: 3px;\n           margin: 5px;\n           width:90px;\n           text-align: center;\n     }\n    .choosed{\n           width: 100%;\n           background: #91949c;\n           color: white;\n     }"
                    ],
                    template: "\n  <div class=\"container-dualListBox\">\n    <div class=\"container-items\" [style.minHeight]=\"minHeight\">\n      <div *ngFor=\"let item of availableItems.totalItems\" [ngClass]=\"{ choosed: availableItems.isSelected(item,1) }\" (click)=\"availableItems.select(item)\">\n        <div *ngIf=\"templateItem;else noTemplateItem\">\n          <ng-container [ngTemplateOutlet]=\"templateItem\" [ngTemplateOutletContext]=\"{ data: item }\">\n          </ng-container>\n        </div>\n        <ng-template #noTemplateItem>\n          {{item.name}}\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"container-buttons\">\n       <div class=\"\" (click)=\"select()\">\n       <div *ngIf=\"templateArrowRight;else arrowRigth\">\n          <ng-container [ngTemplateOutlet]=\"templateArrowRight\">\n          </ng-container>\n       </div>\n      <ng-template #arrowRigth>\n        <div class=\"btn-arrow\">&rarr;</div>\n      </ng-template>\n    </div>\n    <div class=\"\" (click)=\"return()\">\n        <div *ngIf=\"templateArrowLeft;else arrowLeft\">\n          <ng-container [ngTemplateOutlet]=\"templateArrowLeft\">\n          </ng-container>\n        </div>\n        <ng-template #arrowLeft>\n          <div class=\"btn-arrow\">&larr;</div>\n        </ng-template>\n    </div>\n  </div>\n    <div class=\"container-items\" [style.minHeight]=\"minHeight\">\n      <div *ngFor=\"let item of selectedItems.totalItems\" [ngClass]=\"{ choosed: selectedItems.isSelected(item,2) }\"  (click)=\"selectedItems.select(item)\">\n        <div *ngIf=\"templateItem;else noTemplateItem\">\n          <ng-container [ngTemplateOutlet]=\"templateItem\" [ngTemplateOutletContext]=\"{ data: item }\">\n          </ng-container>\n        </div>\n        <ng-template #noTemplateItem>\n          {{item.name}}\n        </ng-template>\n      </div>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    NgxDualListboxComponent.ctorParameters = function () { return []; };
    NgxDualListboxComponent.propDecorators = {
        'key': [{ type: Input },],
        'items': [{ type: Input },],
        '_selectedItems': [{ type: Input, args: ['selectedItems',] },],
        'selectedItemsChange': [{ type: Output },],
        'minHeight': [{ type: Input },],
        'templateItem': [{ type: ContentChild, args: ['templateItem',] },],
        'templateArrowLeft': [{ type: ContentChild, args: ['templateArrowLeft',] },],
        'templateArrowRight': [{ type: ContentChild, args: ['templateArrowRight',] },],
    };
    return NgxDualListboxComponent;
}());
export { NgxDualListboxComponent };
var transfer = function (from, to) {
    return {
        from: new ListSelectionImpl(from.totalItems.filter(function (x) { return !from.isSelected(x); })),
        to: new ListSelectionImpl(from.selectedItems.concat(to.totalItems))
    };
};
//# sourceMappingURL=index.component.js.map