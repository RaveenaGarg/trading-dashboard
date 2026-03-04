export interface Ticker {
  symbol: string;
  name: string;
  price: number;
}

export interface HistoricalPoint {
  time: string;
  price: number;
}