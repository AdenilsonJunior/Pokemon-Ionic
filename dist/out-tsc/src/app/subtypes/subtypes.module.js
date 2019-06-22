import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SubtypesPage } from './subtypes.page';
var routes = [
    {
        path: '',
        component: SubtypesPage
    }
];
var SubtypesPageModule = /** @class */ (function () {
    function SubtypesPageModule() {
    }
    SubtypesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SubtypesPage]
        })
    ], SubtypesPageModule);
    return SubtypesPageModule;
}());
export { SubtypesPageModule };
//# sourceMappingURL=subtypes.module.js.map