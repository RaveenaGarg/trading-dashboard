import { useEffect, useState } from "react";
import { getTickers } from "../services/api";
import type { Ticker } from "../types/market";

interface Props {
  onSelect: (symbol: string) => void;
  selectedSymbol: string | null;
}

const TickerList = ({ onSelect, selectedSymbol }: Props) => {
  const [tickers, setTickers] = useState<Ticker[]>([]);

  useEffect(() => {
    const fetchTickers = async () => {
      const data = await getTickers();
      setTickers(data);
    };

    fetchTickers();
  }, []);

  return (
    <div>
      <h2>Tickers</h2>
      {tickers.map((ticker) => (
        <div
          key={ticker.symbol}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #ddd",
            backgroundColor: selectedSymbol === ticker.symbol ? "#e6f0ff" : "white",
            fontWeight: selectedSymbol === ticker.symbol ? "bold" : "normal",
          }}
          onClick={() => onSelect(ticker.symbol)}
        >
          <strong>{ticker.symbol}</strong> — {ticker.name} — ₹
          {ticker.price.toFixed(2)}
        </div>
      ))}
    </div>
  );
};

export default TickerList;