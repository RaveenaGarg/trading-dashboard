import express from "express";
import http from "http";
import cors from "cors";

import tickerRoutes from "./routes/tickerRoutes";
import { setupWebSocket } from "./websocket/priceSocket";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running 🚀" });
});

// REST Routes
app.use("/api", tickerRoutes);

// Create HTTP Server
const server = http.createServer(app);

// Initialize WebSocket
setupWebSocket(server);

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});