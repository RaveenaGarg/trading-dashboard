export interface Ticker {
  symbol: string;
  name: string;
  price: number;
}

export interface HistoricalPrice {
  time: number;
  price: number;
}