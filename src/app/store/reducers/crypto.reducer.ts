import { createReducer, on } from "@ngrx/store";
import { CryptoState } from "../../core/models/crypto-state.model";
import * as CryptoActions from '../actions/crypto.actions'

export const initialState: CryptoState = {
  prices: {},
  loading: false
}

export const cryptoReducer = createReducer(
  initialState,
  on(CryptoActions.loadCryptoPrices, state => ({ ...state, loading: true})),
  on(CryptoActions.cryptoPricesLoaded, (state, { prices }) => ({ ...state, prices, loading: false})),
  on(CryptoActions.cryptoPriceUpdate, (state, { price }) => ({
    ...state,
    prices: { ...state.prices, [price.symbol]: price.price }
  }))

);
