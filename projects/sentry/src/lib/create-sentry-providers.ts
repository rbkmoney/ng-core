import { ErrorHandler, Provider } from '@angular/core';
import { ErrorHandlerOptions, TraceService } from '@sentry/angular';

import { ErrorHandler as CustomErrorHandler } from './error-handler';

export function createSentryProviders(deps: unknown[], options?: ErrorHandlerOptions): Provider[] {
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
