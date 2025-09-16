import { Asset, findLargestHoldingPortfolio } from "../src/portfolio/portfolioPerformance";

describe("findLargestHoldingPortfolio", () => {
    let assets: Asset[];

    beforeEach(() => {
        assets = [
            { name: "House", value: 300000 },
            { name: "Stocks", value: 50000 },
            { name: "Bonds", value: 100000 }
        ];
    });

    it("should return the asset with the largest value", () => {
        // Arrange

        // Act
        const result = findLargestHoldingPortfolio(assets);

        // Assert
        expect(result.largest?.name).toBe("House");
        expect(result.largest?.value).toBe(300000);
    });

    it("should return null for an empty array", () => {
        // Arrange
        const emptyAssets: Asset[] = [];

        // Act
        const result = findLargestHoldingPortfolio(emptyAssets);

        // Assert
        expect(result.largest).toBeNull();
        expect(result.summary()).toBe("No assets in the portfolio.");
    });

    it("should handle tied largest values", () => {
        // Arrange
        const tiedAssets: Asset[] = [
            { name: "Asset1", value: 100 },
            { name: "Asset2", value: 100 }
        ];

        // Act
        const result = findLargestHoldingPortfolio(tiedAssets);

        // Assert
        expect(["Asset1", "Asset2"]).toContain(result.largest?.name);
    });
});
