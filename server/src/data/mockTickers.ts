import { Ticker } from "../models/ticker";

export const tickers = new Map<string, Ticker>([
  ["AAPL", { symbol: "AAPL", name: "Apple Inc.", price: 180 }],
  ["TSLA", { symbol: "TSLA", name: "Tesla Inc.", price: 250 }],
  ["GOOGL", { symbol: "GOOGL", name: "Alphabet Inc.", price: 120 }],
  ["AMZN", { symbol: "AMZN", name: "Amazon.com Inc.", price: 135 }],
  ["MSFT", { symbol: "MSFT", name: "Microsoft Corp.", price: 300 }],
  ["FB", { symbol: "FB", name: "Meta Platforms Inc.", price: 210 }],
  ["NFLX", { symbol: "NFLX", name: "Netflix Inc.", price: 550 }],
  ["BTC-USD", { symbol: "BTC-USD", name: "Bitcoin", price: 60000 }],
  ["ETH-USD", { symbol: "ETH-USD", name: "Ethereum", price: 4500 }],
  ["DOGE-USD", { symbol: "DOGE-USD", name: "Dogecoin", price: 0.25 }],
  ["NVDA", { symbol: "NVDA", name: "NVIDIA Corp.", price: 400 }],
  ["DIS", { symbol: "DIS", name: "Walt Disney Co.", price: 150 }],
]);