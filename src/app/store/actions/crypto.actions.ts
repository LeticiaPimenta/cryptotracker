import { createAction, props } from "@ngrx/store";
import { CryptoPrice } from "../../core/models/crypto-price.model";

export const loadCryptoPrices = createAction('[Crypto] Load Prices');
export const cryptoPricesLoaded = createAction('[Crypto] Prices Loaded', props<{ prices: { [symbol: string]: number } }>());
export const cryptoPriceUpdate = createAction('[Crypto] Price Update', props<{ price: CryptoPrice }>());
