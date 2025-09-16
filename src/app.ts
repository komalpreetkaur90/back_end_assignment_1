import express from "express";
import {
  calculatePortfolioPerformance,
  findLargestHoldingPortfolio,
  calculateAssetAllocationPortfolio
} from "./portfolio/portfolioPerformance";

const app = express();
const version = "1.0.0";

interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

app.use(express.json());

app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

app.get("/api/v1/portfolio/performance", (req, res) => {
    const initialInvestment = Number(req.query.initialInvestment) || 10000;
    const currentValue = Number(req.query.currentValue) || 12000;

    const result = calculatePortfolioPerformance(initialInvestment, currentValue);
    res.json(result);
});

app.post("/api/v1/portfolio/largest-holding", (req, res) => {
    const assets = req.body.assets || [];
    const result = findLargestHoldingPortfolio(assets);
    res.json(result);
});

app.post("/api/v1/portfolio/allocation", (req, res) => {
    const assets = req.body.assets || [];
    const result = calculateAssetAllocationPortfolio(assets);
    res.json(result);
});

export default app