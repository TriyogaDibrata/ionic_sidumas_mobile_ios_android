import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';
describe('SharedService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(SharedService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=shared.service.spec.js.map