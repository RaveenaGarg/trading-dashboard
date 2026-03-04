import { useEffect, useState } from "react";
import { getHistoricalData } from "../services/api";
import type { HistoricalPoint } from "../types/market";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface Props {
  symbol: string;
}

const PriceChart = ({ symbol }: Props) => {
  const [data, setData] = useState<HistoricalPoint[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const history = await getHistoricalData(symbol);
      setData(history);
    };

    fetchHistory();
  }, [symbol]);

  return (
    <div>
      <h3>{symbol} - Historical Price</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;