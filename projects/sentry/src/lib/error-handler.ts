import { captureException, SentryErrorHandler } from '@sentry/angular';
import { runOutsideAngular } from '@sentry/angular/dist/zone';

import { isChunkLoadError } from './utils';

export class ErrorHandler extends SentryErrorHandler {
    handleError(error: unknown): void {
        this.handleChunkLoadError(error);
        super.handleError(error);
    }

    private handleChunkLoadError(error: unknown): void {
        if (isChunkLoadError(error)) {
            runOutsideAngular(() => captureException('Chunk load error captured'));
            window.location.reload();
        }
    }
}
