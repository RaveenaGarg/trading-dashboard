import { useEffect, useState } from "react";

interface Props {
  symbol: string;
}

const LivePrice = ({ symbol }: Props) => {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.symbol === symbol) {
        setPrice(data.price);
      }
    };

    return () => {
      ws.close();
    };
  }, [symbol]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{symbol}</h2>
      <h3>
        Live Price:{" "}
        {price !== null ? `₹ ${price.toFixed(2)}` : "Waiting for update..."}
      </h3>
    </div>
  );
};

export default LivePrice;