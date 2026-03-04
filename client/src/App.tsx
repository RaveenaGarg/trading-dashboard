import { useState } from "react";
import TickerList from "./components/TickerList";
import PriceChart from "./components/PriceChart";
import LivePrice from "./components/LivePrice";

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <div style={{ width: "30%", borderRight: "1px solid #ddd" }}>
        <TickerList onSelect={setSelectedSymbol} />
      </div>

      <div style={{ width: "70%", padding: "20px" }}>
        {selectedSymbol ? (
          <>
            <LivePrice symbol={selectedSymbol} />
            <PriceChart symbol={selectedSymbol} />
          </>
        ) : (
          <h2>Select a ticker</h2>
        )}
      </div>
    </div>
  );
}

export default App;