import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../core/models/app-state.model';
import { selectCryptoLoading, selectCryptoPrices } from '../../store/selectors/crypto.selectors';
import { loadCryptoPrices } from '../../store/actions/crypto.actions';
import { CommonModule } from '@angular/common';
import { PriceSummary } from '../../core/models/price-sumary.model';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{
  title = 'cryptotracker';
  prices$: Observable<{ [ symbol: string ] : number }>;
  loading$: Observable<boolean>;
  symbols = ['bitcoin', 'ethereum'];
  priceSummary: PriceSummary[] = [];

  constructor(private store: Store<AppState>) {
    this.prices$ = this.store.select(selectCryptoPrices);
    this.loading$ = this.store.select(selectCryptoLoading);

  }

  ngOnInit() {
    this.store.dispatch(loadCryptoPrices());

    this.prices$.subscribe(prices => {
      this.getPrices(prices);
    })
  }

  getPrices(prices: { [ symbol: string ] : number } ) {
    for (const symbol of this.symbols) {
      const price  = prices[symbol];
      if (price === undefined || isNaN(price)) {
        continue;
      }
      let priceSummaryEntry = this.priceSummary.find(entry => entry.symbol === symbol)

      if (!priceSummaryEntry) {
        priceSummaryEntry = { symbol, highestPrice: price, lowestPrice: price }
        this.priceSummary.push(priceSummaryEntry);
      } else {
        if (price > priceSummaryEntry.highestPrice ) {
          priceSummaryEntry.highestPrice = price;
        }
        if (price < priceSummaryEntry.lowestPrice) {
          priceSummaryEntry.lowestPrice = price;
        }
      }
    }
  }

}
