import { TestBed } from '@angular/core/testing';
import { CardsService } from './cards.service';
describe('CardsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CardsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cards.service.spec.js.map