import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CryptoState } from "../../core/models/crypto-state.model";

export const selectCryptoState = createFeatureSelector<CryptoState>('crypto');

export const selectCryptoPrices = createSelector(
  selectCryptoState,
  (state: CryptoState) => state.prices
);

export const selectCryptoLoading = createSelector(
  selectCryptoState,
  (state: CryptoState) => state.loading
);
