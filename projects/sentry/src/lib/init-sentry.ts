import * as Sentry from '@sentry/angular';
import { BrowserOptions } from '@sentry/browser/dist/backend';
import { Integrations } from '@sentry/tracing';

export type InitSentryOptions = BrowserOptions;

export const initSentry = (options: InitSentryOptions): void => {
    if (!options.dsn) {
        return null;
    }
    Sentry.init({
        integrations: [
            new Integrations.BrowserTracing({
                routingInstrumentation: Sentry.routingInstrumentation,
            }),
        ],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        tracesSampleRate: 1,
        autoSessionTracking: true,
        ...options,
    });
};
