import { Ticker } from "../models/ticker";

export const tickers = new Map<string, Ticker>([
  [
    "AAPL",
    { symbol: "AAPL", name: "Apple Inc.", price: 180 },
  ],
  [
    "TSLA",
    { symbol: "TSLA", name: "Tesla Inc.", price: 250 },
  ],
  [
    "BTC-USD",
    { symbol: "BTC-USD", name: "Bitcoin", price: 60000 },
  ],
]);