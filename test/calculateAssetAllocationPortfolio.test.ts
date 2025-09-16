import { Asset, calculateAssetAllocationPortfolio } from "../src/portfolio/portfolioPerformance";

describe("calculateAssetAllocationPortfolio", () => {
    let assets: Asset[];

    beforeEach(() => {
        assets = [
            { name: "House", value: 300000 },
            { name: "Stocks", value: 50000 },
            { name: "Bonds", value: 100000 }
        ];
    });

    it("should calculate correct percentages for even distribution", () => {
        // Arrange
        const evenAssets: Asset[] = [
            { name: "Stocks", value: 5000 },
            { name: "Bonds", value: 5000 }
        ];

        // Act
        const result = calculateAssetAllocationPortfolio(evenAssets);

        // Assert
        expect(result.allocations[0].percentage).toBe(50);
        expect(result.allocations[1].percentage).toBe(50);
    });

    it("should calculate correct percentages for uneven distribution", () => {
        // Arrange
        const unevenAssets: Asset[] = [
            { name: "Stocks", value: 7000 },
            { name: "Bonds", value: 3000 }
        ];

        // Act
        const result = calculateAssetAllocationPortfolio(unevenAssets);

        // Assert
        expect(result.allocations[0].percentage).toBe(70);
        expect(result.allocations[1].percentage).toBe(30);
    });

});


