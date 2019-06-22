import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
var CardsService = /** @class */ (function () {
    function CardsService(httpClient) {
        this.httpClient = httpClient;
        this.URL = 'https://api.pokemontcg.io/v1/cards';
    }
    CardsService.prototype.getCards = function () {
        return this.httpClient.get(this.URL)
            .pipe(map(function (results) {
            return results["cards"].map(function (card) {
                var newCard = {
                    id: card.id,
                    name: card.name,
                    rarity: card.rarity,
                    subtype: card.subtype,
                    imageUrl: card.imageUrl
                };
                return newCard;
            });
        }));
    };
    CardsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CardsService);
    return CardsService;
}());
export { CardsService };
//# sourceMappingURL=cards.service.js.map