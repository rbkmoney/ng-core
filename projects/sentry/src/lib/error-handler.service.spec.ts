import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import { ErrorHandler } from '@angular/core';

describe('ErrorHandlerService', () => {
    let service: ErrorHandler;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: ErrorHandler, useFactory: () => new ErrorHandlerService() }],
        });
        service = TestBed.inject(ErrorHandler);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
