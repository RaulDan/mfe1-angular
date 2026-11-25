import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { provideSingleSpa, provideSingleSpaPlatform, singleSpaAngular } from 'single-spa-angular';
import { appConfig } from './src/app/app.config';
import { App } from './src/app/app';

const lifecycles = singleSpaAngular({
  bootstrapFunction: () => {
    const platformRef = platformBrowser(provideSingleSpaPlatform());
    return bootstrapApplication(
      App,
      { ...appConfig, providers: [...appConfig.providers, provideSingleSpa()] },
      { platformRef },
    );
  },
  template: '<app-root></app-root>',
  Router,
  NavigationStart,
  NgZone: 'noop',
});
export const { bootstrap, mount, unmount } = lifecycles;
