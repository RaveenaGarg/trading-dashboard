import request from "supertest";
import express from "express";
import cors from "cors";
import tickerRoutes from "./tickerRoutes";

// Create a fresh Express app for testing
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", tickerRoutes);

describe("Ticker Routes", () => {
  it("GET /api/tickers should return all tickers", async () => {
    //Act
    const res = await request(app).get("/api/tickers");

    //Assert
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    // Each ticker should have symbol, name, price
    res.body.forEach((ticker: any) => {
      expect(ticker).toHaveProperty("symbol");
      expect(ticker).toHaveProperty("name");
      expect(ticker).toHaveProperty("price");
      expect(typeof ticker.price).toBe("number");
    });
  });

  it("GET /api/history/:symbol should return historical data", async () => {
    //Arrange
    const symbol = "AAPL"; // pick a symbol from your mock data
    //Act
    const res = await request(app).get(`/api/history/${symbol}`);
    //Assert
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    // Each historical point should have time and price
    res.body.forEach((point: any) => {
      expect(point).toHaveProperty("time");
      expect(point).toHaveProperty("price");
      expect(typeof point.price).toBe("number");
    });
  });
});