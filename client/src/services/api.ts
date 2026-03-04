import axios from "axios";
import type { HistoricalPoint, Ticker } from "../types/market";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getTickers = async (): Promise<Ticker[]> => {
  const response = await axios.get(`${API_BASE_URL}/tickers`);
  return response.data;
};

export const getHistoricalData = async (
  symbol: string
): Promise<HistoricalPoint[]> => {
  const response = await axios.get(`${API_BASE_URL}/history/${symbol}`);
  return response.data;
};