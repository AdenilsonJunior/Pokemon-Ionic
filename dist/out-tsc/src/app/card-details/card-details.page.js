import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardDetailsService } from './card-details.service';
var CardDetailsPage = /** @class */ (function () {
    function CardDetailsPage(router, serivce) {
        this.router = router;
        this.serivce = serivce;
        this.card = {
            name: 'Loading...',
            supertype: 'Loading...',
            set: 'Loading...',
            rarity: 'Loading...',
            attacks: []
        };
        this.card_id = this.router.getCurrentNavigation().extras.state.card_id;
    }
    CardDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.serivce.getCardById(this.card_id).subscribe(function (card) {
            return _this.card = card;
        });
    };
    CardDetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-card-details',
            templateUrl: './card-details.page.html',
            styleUrls: ['./card-details.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, CardDetailsService])
    ], CardDetailsPage);
    return CardDetailsPage;
}());
export { CardDetailsPage };
//# sourceMappingURL=card-details.page.js.map