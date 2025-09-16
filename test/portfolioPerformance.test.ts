import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("Should calculate the correct profit ", () => {
        // ARRANGE
        const initialInvestment = 10000;
        const currentValue = 12000;

        // ACT
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // ASSERT
        expect(result.profitOrLoss).toBe(2000);
        expect(result.percentageChange).toBeCloseTo(20);
        expect(result.performanceSummary()).toContain("gained moderately");
    });

    it("should calculate the correct loss", () => {
        // ARRANGE
        const initialInvestment = 10000;
        const currentValue = 8000;

        // ACT
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // ASSERT
        expect(result.profitOrLoss).toBe(-2000);
        expect(result.percentageChange).toBeCloseTo(-20);
        expect(result.performanceSummary()).toContain("lost moderately");
    });

    it("should calculate the correct no change", () => {
        // ARRANGE
        const initialInvestment = 10000;
        const currentValue = 10000;

        // ACT
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // ASSERT
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary()).toContain("no significant change");
    });
});
