import { Router } from "express";
import { getTickers, getHistoricalData } from "../services/priceEngine";

const router = Router();

router.get("/tickers", (req, res) => {
  res.json(getTickers());
});

router.get("/history/:symbol", (req, res) => {
  try {
    const data = getHistoricalData(req.params.symbol);
    res.json(data);
  } catch (error) {
    res.status(404).json({ error: "Ticker not found" });
  }
});

export default router;