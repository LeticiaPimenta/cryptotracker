export interface CryptoState {
  prices: { [symbol: string]: number };
  loading: boolean;
}
