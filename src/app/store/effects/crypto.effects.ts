import { webSocket } from 'rxjs/webSocket';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import * as CryptoActions from '../actions/crypto.actions';
import { WebsocketService } from '../../core/services/websocket.service';
import { CryptoPrice } from '../../core/models/crypto-price.model';

@Injectable()
export class CryptoEffects {
  constructor(
    private actions$: Actions,
    private webSocketService: WebsocketService
  ) {}

  loadCryptoPrices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CryptoActions.loadCryptoPrices),
      mergeMap(() =>
        this.webSocketService
          .getCryptoPrices()
          .pipe(map((price) => CryptoActions.cryptoPriceUpdate({ price })))
      )
    )
  );
}
