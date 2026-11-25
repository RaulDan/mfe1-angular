import { APP_BASE_HREF } from '@angular/common';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: APP_BASE_HREF, useValue: '/mfe1' },
    provideRouter(routes),
  ]
};
