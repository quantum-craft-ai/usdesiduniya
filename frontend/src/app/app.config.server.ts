import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { uddPreset } from '../../uddpreset';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: uddPreset,
          options: {
            darkModeSelector: false || 'none',
          }
      }
  })
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
