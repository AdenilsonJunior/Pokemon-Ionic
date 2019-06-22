import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
var CardDetailsService = /** @class */ (function () {
    function CardDetailsService(httpClient) {
        this.httpClient = httpClient;
        this.URL = 'https://api.pokemontcg.io/v1/cards/';
    }
    CardDetailsService.prototype.getCardById = function (card_id) {
        return this.httpClient.get(this.URL + card_id)
            .pipe(map(function (result) {
            return result['card'];
        }));
    };
    CardDetailsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CardDetailsService);
    return CardDetailsService;
}());
export { CardDetailsService };
//# sourceMappingURL=card-details.service.js.map