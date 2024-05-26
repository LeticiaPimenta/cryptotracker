import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { reducers } from './store/state';
import { provideEffects } from '@ngrx/effects';
import { CryptoEffects } from './store/effects/crypto.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers),
    provideEffects([CryptoEffects]),
    provideStoreDevtools({ maxAge: 25 })
  ]
};
