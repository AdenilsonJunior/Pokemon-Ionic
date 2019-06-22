import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardsPage } from './cards.page';
var routes = [
    {
        path: '',
        component: CardsPage
    }
];
var CardsPageModule = /** @class */ (function () {
    function CardsPageModule() {
    }
    CardsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CardsPage]
        })
    ], CardsPageModule);
    return CardsPageModule;
}());
export { CardsPageModule };
//# sourceMappingURL=cards.module.js.map