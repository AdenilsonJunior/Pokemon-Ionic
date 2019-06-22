import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CardsService } from './cards.service';
var CardsPage = /** @class */ (function () {
    function CardsPage(service, router) {
        this.service = service;
        this.router = router;
    }
    CardsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCards().subscribe(function (results) {
            _this.cards = results;
        });
    };
    CardsPage.prototype.seePokemonDetails = function (id) {
        var extras = {
            state: {
                card_id: id
            }
        };
        this.router.navigate(['cards/card-details/' + id], extras);
    };
    CardsPage = tslib_1.__decorate([
        Component({
            selector: 'app-cards',
            templateUrl: './cards.page.html',
            styleUrls: ['./cards.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CardsService, Router])
    ], CardsPage);
    return CardsPage;
}());
export { CardsPage };
//# sourceMappingURL=cards.page.js.map