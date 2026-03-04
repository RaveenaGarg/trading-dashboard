import http from "http";
import { WebSocketServer, WebSocket } from "ws";
import { getTickers, simulatePriceUpdate } from "../services/priceEngine";

export function setupWebSocket(server: http.Server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws: WebSocket) => {
    console.log("Client connected");

    // Send initial connection message
    ws.send(
      JSON.stringify({
        message: "Connected to WebSocket server",
      })
    );

    // Start streaming prices every second
    const interval = setInterval(() => {
      try {
        getTickers().forEach((ticker) => {
          const price = simulatePriceUpdate(ticker.symbol);

          ws.send(
            JSON.stringify({
              symbol: ticker.symbol,
              price,
            })
          );
        });
      } catch (error) {
        console.error("Error streaming prices:", error);
      }
    }, 1000);

    ws.on("close", () => {
      console.log("Client disconnected");
      clearInterval(interval);
    });

    ws.on("error", (error) => {
      console.error("WebSocket error:", error);
    });
  });

  console.log("WebSocket server initialized");
}