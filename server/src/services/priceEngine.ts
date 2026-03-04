import { tickers } from "../data/mockTickers";
import { HistoricalPrice, Ticker } from "../models/ticker";


export function getTickers(): Ticker[] {
  return Array.from(tickers.values());
}

export function getCurrentPrice(symbol: string): number | null {
  return tickers.get(symbol)?.price ?? null;
}

export function getHistoricalData(symbol: string): HistoricalPrice[] {
  const basePrice = tickers.get(symbol)?.price;

  if (basePrice == undefined) {
    throw new Error("Ticker not found");
  }

  return Array.from({ length: 30 }, (_, i) => ({
    time: Date.now() - (30 - i) * 60000,
    price: Number(
      (basePrice + (Math.random() - 0.5) * 10).toFixed(2)
    ),
  }));
}

export function simulatePriceUpdate(symbol: string): number {
  const currentPrice = tickers.get(symbol)?.price;

  if (currentPrice == undefined) {
    throw new Error("Ticker not found");
  }

  const change = (Math.random() - 0.5) * 2;
  const updatedPrice = Number((currentPrice + change).toFixed(2));

  const existingTicker = tickers.get(symbol) as Ticker;
  tickers.set(symbol, { ...existingTicker, price: updatedPrice });

  return updatedPrice;
}