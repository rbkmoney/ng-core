import { TestBed } from '@angular/core/testing';

import { ErrorHandler as CustomErrorHandler } from './error-handler';
import { ErrorHandler } from '@angular/core';

describe('ErrorHandler', () => {
    let service: ErrorHandler;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: ErrorHandler, useFactory: () => new CustomErrorHandler() }],
        });
        service = TestBed.inject(ErrorHandler);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
