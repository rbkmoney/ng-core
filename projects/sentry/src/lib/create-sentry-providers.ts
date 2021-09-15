import { ErrorHandler, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerOptions, TraceService } from '@sentry/angular';

import { ErrorHandler as CustomErrorHandler } from './error-handler';

export function createSentryProviders(deps: [typeof Router], options?: ErrorHandlerOptions): Provider[] {
    return [
        {
            provide: ErrorHandler,
            useFactory: () => new CustomErrorHandler(options),
        },
        {
            provide: TraceService,
            deps,
        },
    ];
}
