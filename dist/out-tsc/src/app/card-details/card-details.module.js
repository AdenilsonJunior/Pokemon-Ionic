import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardDetailsPage } from './card-details.page';
var routes = [
    {
        path: '',
        component: CardDetailsPage
    }
];
var CardDetailsPageModule = /** @class */ (function () {
    function CardDetailsPageModule() {
    }
    CardDetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CardDetailsPage]
        })
    ], CardDetailsPageModule);
    return CardDetailsPageModule;
}());
export { CardDetailsPageModule };
//# sourceMappingURL=card-details.module.js.map