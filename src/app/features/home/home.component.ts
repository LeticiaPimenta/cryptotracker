import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../core/models/app-state.model';
import { selectCryptoLoading, selectCryptoPrices } from '../../store/selectors/crypto.selectors';
import { loadCryptoPrices } from '../../store/actions/crypto.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'cryptotracker';
  prices$: Observable<{ [ symbol: string ] : number }>;
  loading$: Observable<boolean>;
  symbols = ['bitcoin', 'ethereum'];

  constructor(private store: Store<AppState>) {
    this.prices$ = this.store.select(selectCryptoPrices);
    this.loading$ = this.store.select(selectCryptoLoading);
    this.store.dispatch(loadCryptoPrices());
  }
}
