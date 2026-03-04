import { useState } from "react";
import TickerList from "./components/TickerList";
import PriceChart from "./components/PriceChart";
import LivePrice from "./components/LivePrice";

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      <div style={{ width: "25%", borderRight: "1px solid #ddd", overflowY: "auto", padding: "20px", backgroundColor: "#fafafa" }}>
        <TickerList onSelect={setSelectedSymbol} selectedSymbol={selectedSymbol}/>
      </div>

      <div style={{ width: "75%", padding: "30px" }}>
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