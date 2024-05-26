import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket'
import { CryptoPrice } from '../models/crypto-price.model';
import { map, mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
  private socket$ = webSocket<{ [key: string]: number }>('wss://ws.coincap.io/prices?assets=bitcoin,ethereum');

  getCryptoPrices(): Observable<CryptoPrice> {
    return this.socket$.pipe(
      mergeMap((data: { [key: string]: number }) => {
        const prices: CryptoPrice[] = [];
        for (const symbol in data) {
          prices.push({ symbol, price: data[symbol] });
        }
        return prices;
      })
    );
  }

}
